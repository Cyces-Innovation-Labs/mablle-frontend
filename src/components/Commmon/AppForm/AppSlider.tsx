import {
  FormControl,
  FormDescription,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import type { UseFormReturn } from "react-hook-form";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AppSlider = ({
  label,
  description,
  formUtils,
  name,
  className,
  labelClassName,
  min = 0,
  max = 100,
  step,
  sliderLeftDescription,
  sliderRightDescription,
  labelToolTip,
}: {
  label?: string;
  description: string;
  name: string;
  formUtils: UseFormReturn;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  min?: number;
  max?: number;
  step?: number;
  sliderLeftDescription?: string;
  sliderRightDescription?: string;
  labelToolTip?: string;
}) => {
  return (
    <FormField
      control={formUtils?.control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <FormItem>
          {label && (
            <div className="flex items-center justify-between mb-[15px]">
              <div className="flex items-center gap-2">
                <FormLabel className={labelClassName}>{label}</FormLabel>
                {labelToolTip && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[260px]">
                      {labelToolTip}
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
              <span className="text-sm text-muted-foreground">{value}</span>
            </div>
          )}
          <FormControl className="relative">
            <>
              <Slider
                className={`${className}`}
                min={min}
                max={max}
                step={step}
                defaultValue={[value]}
                onValueChange={(vals) => {
                  onChange(vals[0]);
                }}
              />
              <div className="flex justify-between items-center">
                {sliderLeftDescription && (
                  <span className="mt-2 text-text-secondary text-xs">
                    {sliderLeftDescription}
                  </span>
                )}
                {sliderRightDescription && (
                  <span className="mt-2 text-text-secondary text-xs">
                    {sliderRightDescription}
                  </span>
                )}
              </div>
            </>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AppSlider;
