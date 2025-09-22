import { Form } from "@/components/ui/form";
import type {
  UseFormReturn,
  // FieldValues,
  SubmitHandler,
} from "react-hook-form";
import AppInputRenderer from "./AppInputRenderer";
import type { InputGroup } from "../types";
import SkeletonFormFields from "@/components/loaders/skeletonLoaders/SkeletonFormFields";
import { Button } from "@/components/ui/button";
// import { memo } from "react";

interface AppFormProps {
  inputArr: InputGroup[];
  onSubmit: SubmitHandler<any>;
  formUtils: UseFormReturn<any>;
  className?: string;
  formClassName?: string;
  children?: React.ReactNode;
  topChildren?: boolean;
  formWrapperClassName?: string;
  isLoading?: boolean;
  fieldsCount?: number;
  skeletonWrapperClassName?: string;
  noDefaultButtons?: boolean;
  handleCancel?: () => void;
  isSubmitting?: boolean;
}

const AppForm = ({
  inputArr,
  onSubmit,
  formUtils,
  className,
  formClassName,
  children,
  topChildren = false,
  formWrapperClassName,
  isLoading = false,
  fieldsCount = 2,
  skeletonWrapperClassName,
  noDefaultButtons = false,
  handleCancel,
  isSubmitting = false,
}: AppFormProps) => {
  if (isLoading)
    return (
      <SkeletonFormFields
        skeletonWrapperClassName={`${skeletonWrapperClassName}`}
        fieldsCount={fieldsCount}
      />
    );

  return (
    <div className={className}>
      <Form {...formUtils}>
        <form
          onSubmit={formUtils.handleSubmit(onSubmit)}
          className={formClassName}
        >
          {topChildren && children}
          <AppInputRenderer
            inputArr={inputArr}
            formUtils={formUtils}
            formWrapperClassName={formWrapperClassName}
          />
          {!topChildren && children}
          {!noDefaultButtons && (
            <div className="flex justify-end gap-2 mt-4">
              <Button
                type="button"
                onClick={() => handleCancel?.()}
                variant="outline"
              >
                Cancel
              </Button>
              <Button type="submit" loading={isSubmitting}>Submit</Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default AppForm;
