import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import AppText from "@/components/Commmon/AppText";
import { BarChart3, Filter, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReportsPage = () => {

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        hideBackButton
        title="Reports"
        description="Generate and manage business reports and analytics."
        asideComp={
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule Report
            </Button>
          </div>
        }
      />

      {/* Development Notice */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center">
          <BarChart3 className="w-6 h-6 text-green-600 mr-3" />
          <div>
            <AppText type="h4" className="text-lg font-semibold text-green-800 mb-2">
              Reports Under Development
            </AppText>
            <AppText type="p" className="text-green-700">
              Advanced reporting features, interactive charts, automated scheduling, and custom report builder are coming soon.
            </AppText>
          </div>
        </div>
      </div>
    </AppPageWrapper>
  );
};

export default ReportsPage;
