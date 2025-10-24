import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { Filter, Download } from "lucide-react";
import ProjectsContainer from "./components/ProjectsContainer";
import TasksContainer from "./components/TasksContainer";
import ProjectDistributionChart from "./components/ProjectDistributionChart";
import UsersContainer from "./components/UsersContainer";
import SupportTicketsChart from "./components/SupportTicketsChart";

const DashboardPage = () => {
  return (
    <AppPageWrapper>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <AppText type="h1" className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard
          </AppText>
          <AppText type="p" className="text-gray-600">
            Here's a summary of key metrics and project statuses.
          </AppText>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>This month</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <AppText type="h3" className="text-lg font-bold text-gray-900">
          Projects
        </AppText>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
        <div  className="lg:col-span-1 space-y-8">   
        <ProjectsContainer />
        </div>
        <ProjectDistributionChart />
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Projects and Tasks */}
        <div className="lg:col-span-2 space-y-8">
          <TasksContainer />
        </div>

        {/* Right Column - Charts and Stats */}
        <div className="space-y-8">
          <UsersContainer />
          <SupportTicketsChart />
        </div>
      </div>
    </AppPageWrapper>
  );
};

export default DashboardPage;
