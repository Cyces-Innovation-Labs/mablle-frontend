import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import AppText from "@/components/Commmon/AppText";
import { Settings } from "lucide-react";

const SettingsPage = () => {

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        hideBackButton
        title="Settings"
        description="Manage your account settings and application preferences."
      />

      {/* Development Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex items-center">
          <Settings className="w-6 h-6 text-gray-600 mr-3" />
          <div>
            <AppText type="h4" className="text-lg font-semibold text-gray-800 mb-2">
              Settings Under Development
            </AppText>
            <AppText type="p" className="text-gray-700">
              Advanced settings management, user roles, system configuration, and integration settings are coming soon.
            </AppText>
          </div>
        </div>
      </div>
    </AppPageWrapper>
  );
};

export default SettingsPage;
