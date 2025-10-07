import AppInput from "@/components/Commmon/AppForm/AppInput";
import AppSelect from "@/components/Commmon/AppForm/AppSelect";
import AppDatePicker from "@/components/Commmon/AppForm/AppDatePicker";
import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, type UseFormReturn } from "react-hook-form";

const FamilyMembersComponent = ({ formUtils, metaData }: { formUtils: UseFormReturn, metaData: any }) => {
  const { fields, append, remove } = useFieldArray({
    control: formUtils.control,
    name: "family_members",
  });

  const handleAddMember = () => {
    // push the current fam members to the list of family memebers
    const memberObj = {
      name: formUtils.watch("new_member_name"),
      relationship: formUtils.watch("new_member_relationship"),
      date_of_birth: formUtils.watch("new_member_dob"),
    }
    append(memberObj);
    formUtils.setValue("new_member_name", "");
    formUtils.setValue("new_member_relationship", "");
    formUtils.setValue("new_member_dob", "");

  };

  return (
    <div className="">
      <div className="flex gap-2 items-center pb-3">
        <AppText
          text="Family Members"
          className="text-[18px] mb-2 font-bold text-primary"
        />
      </div>

      {/* Input fields for new member */}
      <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <AppInput
            formUtils={formUtils}
            name="new_member_name"
            placeholder="Enter name"
            label="Name"
          />
          <AppSelect
            formUtils={formUtils}
            name="new_member_relationship"
            placeholder="Select relationship"
            label="Relationship"
            options={metaData?.data?.meta?.relationship}
            
          />
          <AppDatePicker
            formUtils={formUtils}
            name="new_member_dob"
            placeholder="dd-mm-yyyy"
            label="Date of Birth"
          />
        </div>
        <Button
          type="button"
          onClick={handleAddMember}
          variant="default"
          className="bg-[#821a52] hover:bg-[#6b1441] text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Member
        </Button>
      </div>

      {/* Display added members */}
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
                    text="Name"
                    className="text-sm font-medium text-gray-600 mb-1"
                  />
                  <AppText
                    text={
                      formUtils.watch(`family_members.${index}.name`) || "-"
                    }
                    className="text-sm"
                  />
                </div>
                <div>
                  <AppText
                    text="Relationship"
                    className="text-sm font-medium text-gray-600 mb-1"
                  />
                  <AppText
                    text={
                      formUtils.watch(`family_members.${index}.relationship`) ||
                      "-"
                    }
                    className="text-sm"
                  />
                </div>
                <div>
                  <AppText
                    text="Date of Birth"
                    className="text-sm font-medium text-gray-600 mb-1"
                  />
                  <AppText
                    text={
                      formUtils.watch(
                        `family_members.${index}.date_of_birth`
                      ) || "-"
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

export default FamilyMembersComponent;
