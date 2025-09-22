import type { InputGroup } from "@/components/Commmon/types";
import { promptTemaplates } from "@/constants/template-data";
import DynamicVariablesFields from "@/Pages/ProtectedPaths/components/DynamicVariablesFields";
import type { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const phoneNumberSchema = z
  .string().length(10, "Phone number must be 10 digits");

const languageSchema = z.string().nonempty("Language is required");

// Hard close time: number between 60 and 500 (seconds)
const hardCloseTimeSchema = z
  .number()
  .min(30, "Minimum duration is 30 seconds")
  .max(500, "Maximum duration is 500 seconds");

// Template: non-empty string
const templateSchema = z.string().nonempty("Template is required");

const dynamicVariablesSchema = z.any()?.optional();
const dynamicFieldsSchema = z.object()?.optional();

export const callSettingsSchema = z.object({
  phone_number: phoneNumberSchema,
  language: languageSchema,
  hard_close_time: hardCloseTimeSchema,
  template: templateSchema,
  dynamic_variables: dynamicVariablesSchema,
  dynamic_fields: dynamicFieldsSchema,
});

export const makeCallInputMeta: ({
  formUtils,
}: {
  formUtils: UseFormReturn;
}) => InputGroup[] = ({ formUtils }) => [
  {
    wrapperClassName: "grid grid-cols-2 gap-4",
    render: [
      {
        name: "phone_number",
        label: "Phone Number",
        type: "phone",
        placeholder: "Enter phone number",
      },
      {
        name: "template",
        label: "Select Template",
        type: "select",
        placeholder: "Select template",
        options: promptTemaplates,
        customOnChange(value, options) {
          formUtils.setValue("template", value);
          const filteredOptions = options?.filter((option: any) => option.value === value);
          formUtils.setValue("dynamic_fields", filteredOptions?.[0]);
          formUtils.setValue("dynamic_variables", {});
          formUtils.setValue("language", "");
          formUtils.setValue("languagesOptions", filteredOptions?.[0]?.languages ?? []);
        },
      },
    ],
  },
  {
    wrapperClassName: "grid grid-cols-2 gap-4",
    render: [
      {
        name: "language",
        label: "Language",
        type: "select",
        placeholder: "Select language (Select template first)",
        options: formUtils.watch("languagesOptions"),
      },
      {
        name: "hard_close_time",
        label: "Hard Close Time (seconds)",
        type: "number",
        placeholder: "Select hard close time",
      },
    ],
  },
  {
    wrapperClassName: "",
    render: [
      {
        type: "custom-comp",
        customComp: <DynamicVariablesFields formUtils={formUtils} />,
        name: "dynamic-fields"
      },
    ],
  },
];
