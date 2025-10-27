
import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectsHeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  activeTab: "ongoing" | "closed";
  onTabChange: (tab: "ongoing" | "closed") => void;
  projectCount: number;
  title: string;
}

const ProjectsHeader = ({
  searchValue,
  onSearchChange,
  statusFilter,
  onStatusChange,
  activeTab,
  onTabChange,
  projectCount,
  title,
}: ProjectsHeaderProps) => {
  return (
    <div className="space-y-10">
      {/* Search and Filters Row */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* Search Bar */}
        <div className="flex-1 min-w-[300px]">
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Enter project number, designer..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 max-w-[380px]"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Search
            </Button>
          </div>
        </div>

        {/* Status Filter */}
        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="ql">QL</SelectItem>
            <SelectItem value="bk">BK</SelectItem>
            <SelectItem value="cf">CF</SelectItem>
            <SelectItem value="fc">FC</SelectItem>
            <SelectItem value="ho">HO</SelectItem>
          </SelectContent>
        </Select>

        {/* Toggle Buttons */}
        <div className="flex gap-2 bg-[#ffffff] border border-[#D8DAD9] rounded-[12px] p-1">
          <Button
            variant={activeTab === "ongoing" ? "default" : "ghost"}
            onClick={() => onTabChange("ongoing")}
            className={activeTab === "ongoing" ? "bg-primary text-white hover:bg-primary/90" : "text-primary"}
          >
            Ongoing projects
          </Button>
          <Button
            variant={activeTab === "closed" ? "default" : "ghost"}
            onClick={() => onTabChange("closed")}
            className={activeTab === "closed" ? "bg-primary text-white hover:bg-primary/90" : "text-primary"}
          >
            Closed projects
          </Button>
        </div>
      </div>

      {/* Title and Count */}
      <div className="flex items-center justify-between">
        <AppText type="h1" className="text-2xl font-bold text-gray-900">
          {title}
        </AppText>
        <AppText type="span" className="text-sm text-gray-600">
          {projectCount} projects
        </AppText>
      </div>
    </div>
  );
};

export default ProjectsHeader;

