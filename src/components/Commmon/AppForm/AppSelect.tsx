import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import type { UseFormReturn, FieldValues, Path } from "react-hook-form";

interface AppSelectProps<T extends FieldValues> {
  label?: string;
  description?: string;
  topDescription?: string;
  name: Path<T>;
  formUtils: UseFormReturn<T>;
  options: {
    label?: string;
    value?: string;
    id?: string | number;
    identity?: string;
    name?: string;
    icon?: React.ReactNode;
    image?: string;
  }[];
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  customOnChange?: (value: string, options: any) => void;
  readOnly?: boolean;
  disabled?: boolean;
  formMessageClassName?: string;
  onInputChange?: (value: string) => void;
}

const AppSelect = <T extends FieldValues>({
  label,
  description,
  topDescription,
  formUtils,
  name,
  options,
  placeholder = "Select an option",
  className,
  labelClassName,
  customOnChange,
  disabled = false,
  readOnly = false,
  formMessageClassName,
  onInputChange
}: AppSelectProps<T>) => {
  const watchedValue = formUtils.watch(name);
  const value = (watchedValue ?? "") as string;
  return (
    <FormField
      control={formUtils.control}
      name={name}
      render={({ field }) => {
        return (
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
          <Select
            disabled={disabled}
            value={value}
            onValueChange={(value) => {
              if (customOnChange) {
                customOnChange(value, options);
              } else {
                field.onChange(value);
              }
            }}
          >
            <FormControl>
              <SelectTrigger style={{ pointerEvents: readOnly ? 'none' : 'auto' }}>
                {/* { options.find(
                      (opt) => String(opt.id ?? opt.value) == String(field.value)
                    )?.identity} */}
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
            {onInputChange && (
                  <div className="px-2 py-1">
                    <Input
                      type="text"
                      placeholder="Type to filter..."
                      onChange={(e) => onInputChange(e.target.value)}
                      className="h-8"
                    />
                  </div>
                )}
              {options.map((option) => (
                <SelectItem
                  key={String(option.id ?? option.value)}
                  value={String(option.id ?? option.value)}
                >
                  {option?.image && (
                    <img
                      src={option?.image}
                      alt={option?.label ?? option?.name ?? ""}
                      className="w-4 h-4"
                    />
                  )}{" "}
                  {option?.icon}{" "}
                  {option.identity ?? option.label ?? option.name ?? ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage className={formMessageClassName} />
        </FormItem>
        )
      }}
    />
  );
};

export default AppSelect;
