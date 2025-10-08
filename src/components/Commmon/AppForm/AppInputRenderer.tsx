import type { ReactNode } from "react";
import type { UseFormReturn, FieldValues, Path } from "react-hook-form";
import AppInput from "./AppInput";
import AppSelect from "./AppSelect";
import AppDatePicker from "./AppDatePicker";
import type { InputGroup, InputType } from "../types";
import AppTextArea from "./AppTextArea";
import AppSlider from "./AppSlider";
import AppSwitch from "./AppSwitch";
import AppTextEditor from "./AppTextEditor";
import AppText from "../AppText";
import AppPhone from "./AppPhone";
import AppOTP from "@/Pages/AuthPages/components/OTPLogin/AppOTP";

// interface SelectOption {
//   label: string;
//   value: string;
// }

interface InputConfig {
  type: InputType;
  name: Path<FieldValues>;
  label?: string;
  placeholder?: string;
  description?: string;
  topDescription?: string;
  options?: {
    label: string;
    value: string;
    id?: string | number;
    identity?: string;
    name?: string;
  }[];
  customComp?: ReactNode;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  min?: number;
  max?: number;
  step?: number;
  sliderLeftDescription?: string;
  sliderRightDescription?: string;
  labelToolTip?: string;
  tag?: {
    text: string;
    color: string;
  };
  formMessageClassName?: string;
  customOnChange?: (value: string) => void;
  onInputChange?: (value: string) => void;
}

interface AppInputRendererProps {
  inputArr: InputGroup[];
  formUtils: UseFormReturn;
  formWrapperClassName?: string;
}

const AppInputRenderer = ({
  inputArr,
  formUtils,
  formWrapperClassName,
}: AppInputRendererProps) => {
  const renderInput = (input: InputConfig) => {
    switch (input.type) {
      case "text":
        return (
          <AppInput
            key={input.name}
            name={input.name}
            label={input.label}
            description={input.description}
            topDescription={input.topDescription}
            placeholder={input.placeholder}
            formUtils={formUtils}
            className={input.className}
            labelClassName={input.labelClassName}
            inputClassName={input.inputClassName}
            customOnChange={input.customOnChange}
          />
        );

      case "select":
        return (
          <AppSelect
            key={input.name}
            name={input.name}
            label={input.label}
            description={input.description}
            topDescription={input.topDescription}
            placeholder={input.placeholder}
            options={input.options ?? []}
            formUtils={formUtils}
            className={input.className}
            labelClassName={input.labelClassName}
            customOnChange={input.customOnChange}
            onInputChange={input.onInputChange}
          />
        );

      case "date":
        return (
          <AppDatePicker
            key={input.name}
            name={input.name}
            label={input.label}
            description={input.description}
            placeholder={input.placeholder}
            formUtils={formUtils}
            className={input.className}
            labelClassName={input.labelClassName}
            inputClassName={input.inputClassName}
          />
        );

      case "textarea":
        return (
          <AppTextArea
            key={input.name}
            name={input.name}
            label={input.label}
            description={input.description}
            topDescription={input.topDescription}
            placeholder={input.placeholder}
            formUtils={formUtils}
            className={input.className}
            labelClassName={input.labelClassName}
            customOnChange={input.customOnChange}
          />
        );
      case "range":
        return (
          <AppSlider
            description={input.description || ""}
            key={input.name}
            formUtils={formUtils}
            name={input.name}
            placeholder={input.placeholder}
            className={input.className}
            labelClassName={input.labelClassName}
            min={input.min}
            max={input.max}
            step={input.step}
            sliderLeftDescription={input.sliderLeftDescription}
            sliderRightDescription={input.sliderRightDescription}
            label={input.label}
            labelToolTip={input.labelToolTip}
          />
        );
      case "switch":
        return (
          <AppSwitch
            key={input.name}
            name={input.name}
            label={input.label}
            description={input.description}
            formUtils={formUtils}
            labelClassName={input.labelClassName}
            tag={input.tag}
          />
        );

      case "text-editor":
        return (
          <AppTextEditor
            key={input.name}
            name={input.name}
            formUtils={formUtils}
            label={input.label}
            description={input.description}
            topDescription={input.topDescription}
            labelClassName={input.labelClassName}
            className={input.className}
          />
        );

      case "custom-comp":
        return input.customComp;

      case "password":
        return (
          <AppInput
            type={input.type}
            key={input.name}
            name={input.name}
            label={input.label}
            description={input.description}
            topDescription={input.topDescription}
            placeholder={input.placeholder}
            formUtils={formUtils}
            className={input.className}
            labelClassName={input.labelClassName}
            inputClassName={input.inputClassName}
            formMessageClassName={input.formMessageClassName}
          />
        );

      case "phone":
        return (
          <AppPhone
            key={input.name}
            name={input.name}
            label={input.label}
            description={input.description}
            topDescription={input.topDescription}
            placeholder={input.placeholder}
            formUtils={formUtils}
            className={input.className}
            labelClassName={input.labelClassName}
            inputClassName={input.inputClassName}
            customOnChange={input.customOnChange}
          />
        );
      case "otp":
        return (
          <AppOTP
            key={input.name}
            name={input.name}
            label={input.label}
            description={input.description}
            topDescription={input.topDescription}
            formUtils={formUtils}
            className={input.className}
            labelClassName={input.labelClassName}
            inputClassName={input.inputClassName}
          />
        );

      default:
        return (
          <AppInput
            //@ts-expect-error TODO
            type={input.type}
            key={input.name}
            name={input.name}
            label={input.label}
            description={input.description}
            topDescription={input.topDescription}
            placeholder={input.placeholder}
            formUtils={formUtils}
            className={input.className}
            labelClassName={input.labelClassName}
            inputClassName={input.inputClassName}
            formMessageClassName={input.formMessageClassName}
          />
        );
    }
  };

  return (
    <div
      className={`grid grid-cols-1 gap-4 items-baseline ${formWrapperClassName}`}
    >
      {inputArr?.map((group, groupIndex) => (
        <div key={groupIndex} className={group.outerWrapperClassName}>
          {group?.subTitle && (
            <AppText
              text={group.subTitle}
              className="text-[18px] mb-2 font-bold text-primary"
            />
          )}
          <div
            className={`grid grid-cols-1 gap-4 items-baseline ${group.wrapperClassName}`}
          >
            {/* @ts-expect-error ignore */}
            {group.render.map((input: InputConfig) => (
              <> {renderInput(input)}</>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppInputRenderer;
