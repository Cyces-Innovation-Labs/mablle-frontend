import {
  FormControl,
  FormDescription,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import type { UseFormReturn, FieldValues, Path } from "react-hook-form";
import AppCustomEditor from "../AppCustomEditor";

interface AppTextEditorProps<T extends FieldValues> {
  label?: string;
  description?: string;
  topDescription?: string;
  name: Path<T>;
  formUtils: UseFormReturn<T>;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const AppTextEditor = <T extends FieldValues>({
  label,
  description,
  topDescription,
  formUtils,
  name,
  //   placeholder,
  className,
  labelClassName,
}: //   inputClassName,
AppTextEditorProps<T>) => {
  return (
    <FormField
      control={formUtils.control}
      name={name}
      render={({ field: { value, onChange } }) => (
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
          <FormControl className="app-form">
            <AppCustomEditor value={value} setValue={onChange} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AppTextEditor;
