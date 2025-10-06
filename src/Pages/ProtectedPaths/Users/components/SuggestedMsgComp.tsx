import AppInput from "@/components/Commmon/AppForm/AppInput";
import AppSwitch from "@/components/Commmon/AppForm/AppSwitch";
import AppText from "@/components/Commmon/AppText";
import AppToolTip from "@/components/Commmon/AppToolTip";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useFieldArray } from "react-hook-form";

const SuggestedMsgComp = ({ formUtils }: { formUtils: any }) => {
  const { fields, append, remove } = useFieldArray({
    control: formUtils.control,
    name: "family_members",
  });

  const handleAddSuggestedMsg = () => {
    append({
      name: "",
      email: "",
    });
  };

  const value = formUtils.watch("family_members");

  return (
    <div className="">
      <div className="flex gap-2 items-center pb-3">
        <AppText
          text="Family Members"
          className="text-text-secondary text-sm font-medium "
        />
        <AppToolTip content="Help guide users with family members at the bottom of the chat. Keep them concise (under 50 characters) and limit to 4 suggestions for the best experience" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="p-3 bg-[#fafafa] border border-border-gray-200 rounded-lg">
          <AppSwitch
            labelClassName="mb-0"
            name="show_suggestions_after_first_message"
            formUtils={formUtils}
            label={
              <div className="flex items-center gap-2">
                <div>
                  Provide family members details
                </div>
                <AppToolTip
                  bodyClassName=""
                  content="When enabled, family members will be provided to the user to choose from."
                />
              </div>
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          {fields?.map((field, index) => (
            <div className="flex gap-2 items-center" key={field.id}>
              <div className="flex-1 relative">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <AppInput
                      formUtils={formUtils}
                      name={`family_members.${index}.name`}
                      placeholder="Add suggested message..."
                      className="flex-1 "
                      inputClassName="pr-10"
                      maxLength={50}
                    />
                    <AppText
                      text={`${value[index]?.name?.length || 0}/40`}
                      className="text-text-secondary text-xs absolute right-2 top-[50%] translate-y-[-50%]"
                    />
                  </div>
                  <div>
                    <AppInput
                      formUtils={formUtils}
                      name={`family_members.${index}.email`}
                      placeholder="Add suggested email..."
                      className="flex-1 "
                      inputClassName="pr-10"
                      maxLength={50}
                    />
                  </div>
                </div>
              </div>

              <Button
                type="button"
                onClick={() => remove(index)}
                variant={"outline"}
                className="!py-[20px] self-start"
              >
                <X />
              </Button>
            </div>
          ))}
        </div>
        <Button
          type="button"
          onClick={handleAddSuggestedMsg}
          variant={"outline"}
        >
          <Plus /> Add Family Member
        </Button>
      </div>
    </div>
  );
};

export default SuggestedMsgComp;
