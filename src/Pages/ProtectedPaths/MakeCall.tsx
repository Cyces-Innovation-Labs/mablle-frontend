import AppForm from "@/components/Commmon/AppForm/AppForm";
import type { InputGroup } from "@/components/Commmon/types";
import { Button } from "@/components/ui/button";
import useMakeCall from "@/hooks/useMakeCall";

const MakeCall = () => {
  const { formUtils, inputMeta, handleMakeCall, isMakingCall, resetForm } = useMakeCall()

  return (
    <div className="px-4 md:px-8 py-6">
      <div className="mx-auto w-full max-w-l">
        {/* Header */}
        <div className="flex items-center justify-between z-2 bg-background gap-3 mb-6 rounded-lg border bg-card p-4 md:p-6 sticky top-2">
          <div>
            <h1 className="text-2xl font-semibold">Make a Call</h1>
            <p className="text-sm text-text-secondary">
              Configure and launch an outbound call
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => resetForm()} variant={"outline"} className="h-9 px-3 rounded-md">
              Reset
            </Button>
            {/* <button className="h-9 px-3 rounded-md bg-blue-100 text-blue-900 text-sm">Demo Call</button> */}
            <Button
            loading={isMakingCall}
              onClick={() => {
                formUtils.handleSubmit((data: any) => handleMakeCall(data))();
              }}
              className="h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm"
            >
              Make Call
            </Button>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-lg border bg-card p-4 md:p-6">
          {/* Advanced toggle */}
          {/* <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="size-4"
                checked={showAdvanced}
                onChange={(e) => setShowAdvanced(e.target.checked)}
              />
              <span className="font-medium">Show Advanced Options</span>
            </label>
          </div> */}

          {/* Top form row */}
          <div className="">

            <AppForm
              inputArr={inputMeta as InputGroup[]}
              onSubmit={() => {}}
              formUtils={formUtils}
            ></AppForm>
          </div>

      
         
        </div>
      </div>
    </div>
  );
};

export default MakeCall;
