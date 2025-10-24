import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import AppText from "@/components/Commmon/AppText";
import { Smartphone, Plus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ManageClientAppPage = () => {

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        hideBackButton
        title="Manage Client App"
        description="Manage and monitor client applications and mobile apps."
        asideComp={
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add App
            </Button>
          </div>
        }
      />

      {/* Development Notice */}
      <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
        <div className="flex items-center">
          <Smartphone className="w-6 h-6 text-purple-600 mr-3" />
          <div>
            <AppText type="h4" className="text-lg font-semibold text-purple-800 mb-2">
              Client App Management Under Development
            </AppText>
            <AppText type="p" className="text-purple-700">
              Advanced app management features, real-time monitoring, push notifications, and analytics dashboard are coming soon.
            </AppText>
          </div>
        </div>
      </div>
    </AppPageWrapper>
  );
};

export default ManageClientAppPage;
