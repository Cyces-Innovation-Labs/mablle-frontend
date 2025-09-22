import {
  FormControl,
  FormDescription,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import type { UseFormReturn } from "react-hook-form";

const AppTextArea = ({
  label,
  description,
  topDescription,
  formUtils,
  name,
  placeholder,
  className,
  labelClassName,
  customOnChange,
}: {
  label?: string;
  description?: string;
  topDescription?: string;
  name: string;
  formUtils: UseFormReturn<any>;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  customOnChange?: (e: any) => void;
}) => {
  return (
    <FormField
      control={formUtils?.control}
      name={name}
      render={({ field: { onChange, ...field } }) => (
        <FormItem>
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
            <Textarea
              placeholder={placeholder}
              className={`resize-none min-h-[180px] ${className}`}
              {...field}
              onChange={(e) => {
                if (customOnChange) {
                  customOnChange(e);
                } else {
                  onChange(e);
                }
              }}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AppTextArea;
