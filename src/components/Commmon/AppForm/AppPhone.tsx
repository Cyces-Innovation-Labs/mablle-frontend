import {
    FormControl,
    FormDescription,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { FormItem } from "@/components/ui/form";
  import { FormField } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import type { UseFormReturn, FieldValues, Path } from "react-hook-form";
  import { Eye, EyeOff } from "lucide-react";
  import { useState } from "react";
  import { Button } from "@/components/ui/button";
  
  interface AppInputProps<T extends FieldValues> {
    label?: string;
    description?: string;
    topDescription?: string;
    name: Path<T>;
    formUtils: UseFormReturn<T>;
    placeholder?: string;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    type?: "text" | "password" | "email" | "number";
    formMessageClassName?: string;
    disabled?: boolean;
    readOnly?: boolean;
    customOnChange?: (e: any) => void;
    maxLength?: number;
  }
  
  const AppPhone = <T extends FieldValues>({
    label,
    description,
    topDescription,
    formUtils,
    name,
    placeholder,
    className,
    labelClassName,
    inputClassName,
    type = "text",
    formMessageClassName,
    disabled = false,
    readOnly = false,
    customOnChange,
    maxLength,
  }: AppInputProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <FormField
        control={formUtils.control}
        name={name}
        render={({ field: { onChange, ...field },fieldState: { error } }) => (
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
              <div className="relative">
                <span className="absolute left-0 top-1 h-full px-3 py-2 text-sm">+91</span>
                <Input
                  readOnly={readOnly}
                  placeholder={placeholder}
                  onChange={(e) => {
                    if (customOnChange) {
                      customOnChange(e);
                    } else {
                      onChange(e);
                    }
                  }}
                  type={
                    type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : type
                  }
                  className={`${inputClassName} !pl-[49px] ${
                    type === "password" ? "pr-10" : ""
                  }`}
                  disabled={disabled}
                  aria-invalid={!!error}
                  {...field}
                  maxLength={maxLength}
                />
                {type === "password" && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                )}
              </div>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage className={formMessageClassName} />
          </FormItem>
        )}
      />
    );
  };
  
  export default AppPhone;
  