import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import AppText from "@/components/Commmon/AppText";
import { Headphones, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupportTicketsPage = () => {

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        hideBackButton
        title="Support Tickets"
        description="Manage customer support tickets and inquiries."
        asideComp={
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Ticket
            </Button>
          </div>
        }
      />

      {/* Development Notice */}
      <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-center">
          <Headphones className="w-6 h-6 text-orange-600 mr-3" />
          <div>
            <AppText type="h4" className="text-lg font-semibold text-orange-800 mb-2">
              Support Tickets Under Development
            </AppText>
            <AppText type="p" className="text-orange-700">
              Advanced ticket management, automated responses, SLA tracking, and integration with communication tools are coming soon.
            </AppText>
          </div>
        </div>
      </div>
    </AppPageWrapper>
  );
};

export default SupportTicketsPage;
