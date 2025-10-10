import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import type { UseFormReturn, FieldValues, Path } from "react-hook-form";

interface AppOTPProps<T extends FieldValues> {
  label?: string;
  description?: string;
  topDescription?: string;
  name: Path<T>;
  formUtils: UseFormReturn<T>;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  formMessageClassName?: string;
  disabled?: boolean;
  readOnly?: boolean;
  customOnChange?: (e: any) => void;
  maxLength?: number;
  otpLength?: number;
}

const AppOTP = <T extends FieldValues>({
  label,
  description,
  topDescription,
  formUtils,
  name,
  className,
  labelClassName,
  inputClassName,
  formMessageClassName,
  disabled = false,
  readOnly = false,
  customOnChange,
  maxLength = 6,
  otpLength = 6,
}: AppOTPProps<T>) => {
  return (
    <FormField
      control={formUtils.control}
      name={name}
      render={({ field: { onChange, ...field }, fieldState: { error } }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel className={`mb-[8px] ${labelClassName}`}>
              {label}
            </FormLabel>
          )}
          {topDescription && (
            <FormDescription className="mt-[-6px] mb-2">
              {topDescription}
            </FormDescription>
          )}
          <FormControl>
            <InputOTP
              maxLength={maxLength}
              disabled={disabled}
              readOnly={readOnly}
              className={` ${inputClassName}`}
              aria-invalid={!!error}
              onChange={(value) => {
                if (customOnChange) {
                  customOnChange({ target: { value } });
                } else {
                  onChange(value);
                }
              }}
              {...field}
            >
              <InputOTPGroup className="justify-center w-full gap-4">
                {Array.from({ length: otpLength }, (_, index) => (
                  <InputOTPSlot className="size-12 !rounded-sm border flex-1" key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage className={formMessageClassName} />
        </FormItem>
      )}
    />
  );
};

export default AppOTP;
