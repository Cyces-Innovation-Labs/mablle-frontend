import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
} from "@/components/ui/form";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface AppCheckboxProps {
  label?: string;
  description?: string;
  name: Path<FieldValues>;
  formUtils: UseFormReturn<FieldValues>;
  labelClassName?: string;
  options: {
    id: string;
    label: string;
  }[];
}

const AppCheckbox = ({
  label,
  description,
  formUtils,
  name,
  labelClassName,
  options,
}: AppCheckboxProps) => {
  return (
    <FormField
      control={formUtils.control}
      name={name}
      render={() => (
        <FormItem className="flex flex-row items-center justify-between gap-2">
          {(label || description )&& <div className="space-y-0.5">
            {label && (
              <div className="flex items-center gap-2">
                <FormLabel className={`mb-[8px] ${labelClassName}`}>
                  {label}
                </FormLabel>
              </div>
            )}
            {description && <FormDescription>{description}</FormDescription>}
          </div>}
          {options?.map((item) => (
            <FormField
              key={item.id}
              control={formUtils.control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-center gap-2"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field?.value?.includes(item?.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...(field?.value || []), item?.id])
                            : field.onChange(
                                field?.value?.filter(
                                  (value: string | number) => value !== item?.id
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          {/* TODO: Add form message */}
        </FormItem>
      )}
    />
  );
};

export default AppCheckbox;
