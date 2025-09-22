import AppInputRenderer from "@/components/Commmon/AppForm/AppInputRenderer";
import { useState } from "react";
import type { UseFormReturn } from "react-hook-form";

const DynamicVariablesFields = ({
  formUtils,
}: {
  formUtils: UseFormReturn;
}) => {
  const [showMoreSettings, setShowMoreSettings] = useState(true);
  const dynamicFields = formUtils.watch("dynamic_fields");
  if(!dynamicFields) return null
  const _dynamicFields = dynamicFields?.dynamicFields?.()

  return (
    <div>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center gap-2 h-9 px-3 rounded-md border text-sm"
          onClick={() => setShowMoreSettings((v) => !v)}
        >
          <span className="text-base">⚙</span>{" "}
          {showMoreSettings ? "Hide" : "More"} Settings
        </button>

        {showMoreSettings && (
          <div className="mt-4 rounded-md border bg-secondary p-4">
            <p className="text-sm font-semibold mb-3">Dynamic Variables</p>
            <div className="">
              <AppInputRenderer
                inputArr={_dynamicFields}
                formUtils={formUtils}
                formWrapperClassName={''}
              />
              {/* <div className="mt-4 rounded-md bg-green-50 dark:bg-[#052e16] border px-3 py-2 text-sm">
                <p className="font-medium">✓ Auto-filled:</p>
                <ul className="list-disc pl-5">
                  <li>{`[[language]] = ${
                    language ? language : "None selected"
                  }`}</li>
                </ul>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicVariablesFields;
