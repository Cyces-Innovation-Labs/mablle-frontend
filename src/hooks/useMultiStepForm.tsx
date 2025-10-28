import { useState } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface StepConfig {
  schema: z.ZodSchema;
  fields: string[];
  title: string;
  description?: string;
}

interface UseMultiStepFormProps {
  steps: StepConfig[];
  defaultValues: any;
  // onSubmitSuccess?: (data: any) => void; // Will be implemented when needed
}

interface UseMultiStepFormReturn {
  currentStep: number;
  formUtils: UseFormReturn<any>;
  stepData: Record<number, any>;
  goToNextStep: () => Promise<boolean>;
  goToPreviousStep: () => void;
  goToStep: (stepIndex: number) => Promise<boolean>;
  validateCurrentStep: () => Promise<boolean>;
  isFirstStep: boolean;
  isLastStep: boolean;
  getFinalData: () => any;
  canProceed: boolean;
}

const useMultiStepForm = ({
  steps,
  defaultValues,
  // onSubmitSuccess, // Will be used for final submission
}: UseMultiStepFormProps): UseMultiStepFormReturn => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState<Record<number, any>>({});

  // Get current step schema
  const currentSchema = steps[currentStep]?.schema;

  const formUtils = useForm({
    //@ts-expect-error ignore this
    resolver: zodResolver(currentSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  // Validate current step fields only
  const validateCurrentStep = async (): Promise<boolean> => {
    const currentStepFields = steps[currentStep]?.fields || [];
    return await formUtils.trigger(currentStepFields);
  };

  // Save current step data
  const saveCurrentStepData = () => {
    const currentData = formUtils.getValues();
    setStepData((prev) => ({
      ...prev,
      [currentStep]: currentData,
    }));
  };

  // Go to next step with validation
  const goToNextStep = async (): Promise<boolean> => {
    const isValid = await validateCurrentStep();

    if (isValid) {
      saveCurrentStepData();

      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);

        // Reset form with merged data for next step
        const allData = getFinalData();
        formUtils.reset(allData);

        return true;
      }
    }

    return false;
  };

  // Go to previous step
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      saveCurrentStepData();
      setCurrentStep((prev) => prev - 1);

      // Reset form with previous step data
      const allData = getFinalData();
      formUtils.reset(allData);
    }
  };

  // Go to specific step with validation
  const goToStep = async (stepIndex: number): Promise<boolean> => {
    if (stepIndex < 0 || stepIndex >= steps.length) return false;

    const isValid = await validateCurrentStep();

    if (isValid || stepIndex <= currentStep) {
      saveCurrentStepData();
      setCurrentStep(stepIndex);

      // Reset form with merged data
      const allData = getFinalData();
      formUtils.reset(allData);

      return true;
    }

    return false;
  };

  // Get final merged data from all steps
  const getFinalData = () => {
    const currentData = formUtils.getValues();
    const savedData = Object.values(stepData).reduce(
      (acc, step) => ({ ...acc, ...step }),
      {}
    );

    return { ...savedData, ...currentData };
  };

  // Check if current step is valid
  //   const canProceed = async () => {
  //     return await validateCurrentStep();
  //   };

  return {
    currentStep,
    formUtils,
    stepData,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    validateCurrentStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    getFinalData,
    canProceed: false, // We'll update this dynamically
  };
};

export default useMultiStepForm;
