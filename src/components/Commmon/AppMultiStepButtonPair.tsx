import { Button } from "@/components/ui/button";

interface AppMultiStepButtonPairProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  previousLabel?: string;
  nextLabel?: string;
  submitLabel?: string;
  className?: string;
  disabled?: boolean;
}

const AppMultiStepButtonPair = ({
  isFirstStep,
  isLastStep,
  onPrevious,
  onNext,
  onSubmit,
  isSubmitting = false,
  previousLabel = "Previous",
  nextLabel = "Next",
  submitLabel = "Submit",
  className = "",
  disabled = false,
}: AppMultiStepButtonPairProps) => {
  return (
    <div className={`flex justify-between mt-8 pt-6 border-t ${className}`}>
      <Button
        type="button"
        variant="outline"
        onClick={onPrevious}
        disabled={isFirstStep || disabled}
      >
        {previousLabel}
      </Button>

      <div className="flex gap-2">
        {isLastStep ? (
          <Button
            type="button"
            onClick={onSubmit}
            loading={isSubmitting}
            disabled={isSubmitting || disabled}
          >
            {submitLabel}
          </Button>
        ) : (
          <Button
            type="button"
            onClick={onNext}
            disabled={disabled}
          >
            {nextLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default AppMultiStepButtonPair;
