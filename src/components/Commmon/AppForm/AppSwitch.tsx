import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import AppTag from "../AppTag";

interface AppSwitchProps {
  label?: string | React.ReactNode;
  description?: string;
  name: Path<FieldValues>;
  formUtils: UseFormReturn<FieldValues>;
  labelClassName?: string;
  tag?: {
    text: string;
    color: string;
  };
}

const AppSwitch = ({
  label,
  description,
  formUtils,
  name,
  labelClassName,
  tag,
}: AppSwitchProps) => {
  return (
    <FormField
      control={formUtils.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between gap-2">
          <div className="space-y-0.5">
            {label && (
              <div className="flex items-center gap-2">
                <FormLabel className={`mb-[8px] ${labelClassName}`}>
                  {label}
                  {tag && <AppTag tag={tag.text} color={tag.color} />}
                </FormLabel>
              </div>
            )}
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          {/* TODO: Add form message */}
        </FormItem>
      )}
    />
  );
};

export default AppSwitch;
