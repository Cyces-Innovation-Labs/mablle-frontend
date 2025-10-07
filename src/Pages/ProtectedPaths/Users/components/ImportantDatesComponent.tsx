import AppInput from "@/components/Commmon/AppForm/AppInput";
import AppSelect from "@/components/Commmon/AppForm/AppSelect";
import AppDatePicker from "@/components/Commmon/AppForm/AppDatePicker";
import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, type UseFormReturn } from "react-hook-form";

const ImportantDatesComponent = ({ formUtils, metaData }: { formUtils: UseFormReturn, metaData: any }) => {
  const { fields, append, remove } = useFieldArray({
    control: formUtils.control,
    name: "important_dates",
  });

  const handleAddDate = () => {
    const dateObj = {
      type: formUtils.watch("new_date_type"),
      person_name: formUtils.watch("new_date_person"),
      date: formUtils.watch("new_date_date"),
    }
    append(dateObj);
    formUtils.setValue("new_date_type", "");
    formUtils.setValue("new_date_person", "");
    formUtils.setValue("new_date_date", "");
  };

  return (
    <div className="">
      <div className="flex gap-2 items-center pb-3">
        <AppText
          text="Important Dates"
          className="text-[18px] mb-2 font-bold text-primary"
        />
      </div>

      {/* Input fields for new date */}
      <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <AppSelect
            formUtils={formUtils}
            name="new_date_type"
            placeholder="Select type"
            label="Type"
            options={metaData?.data?.meta?.date_type}
          />
          <AppInput
            formUtils={formUtils}
            name="new_date_person"
            placeholder="Enter person name"
            label="Person Name"
          />
          <AppDatePicker
            formUtils={formUtils}
            name="new_date_date"
            placeholder="dd-mm-yyyy"
            label="Date"
          />
        </div>
        <Button
          type="button"
          onClick={handleAddDate}
          variant="default"
          className="bg-[#821a52] hover:bg-[#6b1441] text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Date
        </Button>
      </div>

      {/* Display added dates */}
      <div className="space-y-3">
        {fields?.map((field, index) => (
          <div
            key={field.id}
            className="border border-gray-200 rounded-lg p-4 bg-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 grid grid-cols-3 gap-4">
                <div>
                  <AppText
                    text="Type"
                    className="text-sm font-medium text-gray-600 mb-1"
                  />
                  <AppText
                    text={
                      formUtils.watch(`important_dates.${index}.type`) || "-"
                    }
                    className="text-sm"
                  />
                </div>
                <div>
                  <AppText
                    text="Person Name"
                    className="text-sm font-medium text-gray-600 mb-1"
                  />
                  <AppText
                    text={
                      formUtils.watch(`important_dates.${index}.person_name`) ||
                      "-"
                    }
                    className="text-sm"
                  />
                </div>
                <div>
                  <AppText
                    text="Date"
                    className="text-sm font-medium text-gray-600 mb-1"
                  />
                  <AppText
                    text={
                      formUtils.watch(`important_dates.${index}.date`) || "-"
                    }
                    className="text-sm"
                  />
                </div>
              </div>
              <Button
                type="button"
                onClick={() => remove(index)}
                variant="outline"
                size="sm"
                className="ml-4 text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDatesComponent;
