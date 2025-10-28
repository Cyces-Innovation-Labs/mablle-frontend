import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import AppText from "@/components/Commmon/AppText";
import { ClipboardList, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const DesignRequestFormPage = () => {

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        hideBackButton
        title="Design Request Form"
        description="Manage design requests and creative briefs from clients."
        asideComp={
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Request
            </Button>
          </div>
        }
      />

      {/* Development Notice */}
      <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-center">
          <ClipboardList className="w-6 h-6 text-indigo-600 mr-3" />
          <div>
            <AppText type="h4" className="text-lg font-semibold text-indigo-800 mb-2">
              Design Request Form Under Development
            </AppText>
            <AppText type="p" className="text-indigo-700">
              Advanced request management, creative brief templates, file uploads, and designer assignment workflows are coming soon.
            </AppText>
          </div>
        </div>
      </div>
    </AppPageWrapper>
  );
};

export default DesignRequestFormPage;
