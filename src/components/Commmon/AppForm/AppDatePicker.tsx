import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { UseFormReturn, FieldValues, Path } from "react-hook-form";

interface AppDatePickerProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  formUtils: UseFormReturn<T>;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const AppDatePicker = <T extends FieldValues>({
  name,
  label,
  placeholder,
  description,
  formUtils,
  className,
  labelClassName,
  inputClassName,
}: AppDatePickerProps<T>) => {
  return (
    <FormField
      control={formUtils.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel className={`mb-[8px] ${labelClassName}`}>{label}</FormLabel>}
          <FormControl>
            <Input
              type="date"
              placeholder={placeholder}
              {...field}
              value={field.value || ""}
              className={inputClassName}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AppDatePicker;
