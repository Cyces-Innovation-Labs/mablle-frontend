import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

import useMultiStepForm from "@/hooks/useMultiStepForm";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import AppForm from "@/components/Commmon/AppForm/AppForm";
import { useMutation } from "@tanstack/react-query";
import makePostRequest from "@/api/makePostRequest";
import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import { USER_PAGE_URL } from "@/navigation/urls";
import AppText from "@/components/Commmon/AppText";
import AppStepperHeader from "@/components/Commmon/AppStepperHeader";
import {
  defaultValues,
  stepOneSchema,
  stepThreeSchema,
  stepTwoSchema,
} from "./UsersFormHelpers";

const TestMultipartForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Step configuration
  const steps = [
    {
      schema: stepOneSchema,
      fields: ["firstName", "lastName", "email"],
      title: "Basic Information",
      description: "Enter your personal details",
    },
    {
      schema: stepTwoSchema,
      fields: ["phone", "address", "city", "zipCode"],
      title: "Contact Information",
      description: "Enter your contact and location details",
    },
    {
      schema: stepThreeSchema,
      fields: ["country", "gender", "newsletter", "terms"],
      title: "Additional Information",
      description: "Complete your profile and preferences",
    },
  ];

  const {
    currentStep,
    formUtils,
    goToNextStep,
    goToPreviousStep,
    validateCurrentStep,
    isLastStep,
    getFinalData,
    isFirstStep
  } = useMultiStepForm({
    steps,
    defaultValues,
    onSubmitSuccess: (data) => {
      toast.success("Form submitted successfully!");
      console.log("Final form data:", data);
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => makePostRequest("submitEndpoint", data),
    onSuccess: (data) => {
      toast.success("Form submitted successfully!");
      console.log("Final form data:", data);
      formUtils.reset(defaultValues);
    },
  });

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const isValid = await validateCurrentStep();
      if (isValid) {
        const finalData = getFinalData();
        mutate(finalData);
      }
    } catch (error) {
      toast.error("Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle next step
  const handleNext = async () => {
    const success = await goToNextStep();
    if (!success) {
      toast.error("Please fill in all required fields");
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    goToPreviousStep();
  };

  // Render current step component
  const renderCurrentStep = () => {
    const stepComponents = [StepOne, StepTwo, StepThree];
    const CurrentStepComponent = stepComponents[currentStep];

    return <CurrentStepComponent formUtils={formUtils} />;
  };

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        onBackNavigateTo={USER_PAGE_URL}
        title="Multi-Step Form"
      />

      <div className="mb-4">
        <AppText className="text-gray-600">
          Complete all steps to submit your information
        </AppText>
      </div>

      {/* Progress indicator */}
      <div className="mb-4">
        <AppStepperHeader
          steps={steps}
          currentStep={currentStep}
          variant="default"
        />
      </div>

      {/* Form content */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{steps[currentStep].title}</CardTitle>
              <AppText className="text-gray-600 mt-1">
                {steps[currentStep].description}
              </AppText>
            </div>
            <Badge variant="outline">
              Step {currentStep + 1} of {steps.length}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <AppForm
            inputArr={[]}
            formUtils={formUtils}
            onSubmit={formUtils.handleSubmit(handleSubmit)}
            isSubmitting={isSubmitting || isPending}
            primaryButtonText={isLastStep ? "Submit Form" : "Next Step"}
            secondaryButtonText="Previous"
            primaryBtnType={isLastStep ? "submit" : "button"}
            onPrimaryButtonClick={isLastStep ? undefined : handleNext}
            onSecondaryButtonClick={isFirstStep ? undefined : handlePrevious}
            secondaryButtonDisabled={isFirstStep}
          >
            {renderCurrentStep()}
          </AppForm>
        </CardContent>
      </Card>

      {/* Debug info (remove in production) */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-medium mb-2">Debug Info:</h3>
        <div className="text-sm text-gray-600">
          <p>Current Step: {currentStep + 1}</p>
          <p>Form Values: {JSON.stringify(formUtils.watch(), null, 2)}</p>
        </div>
      </div>
    </AppPageWrapper>
  );
};

export default TestMultipartForm;
