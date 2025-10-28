import AppText from "@/components/Commmon/AppText";
// import { useOutletContext } from "react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ClientProjectsTab = () => {
  // const client = useOutletContext<any>();
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock projects data
  const projects = [
    { id: "proj-1", name: "3BHK Interior - Prestige Lakes", status: "FC", progress: 75 },
    { id: "proj-2", name: "Living Room Makeover", status: "CF", progress: 45 },
    { id: "proj-3", name: "Kitchen Renovation", status: "QL", progress: 20 },
  ];

  const handleAddProject = () => {
    console.log("Add new project");
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex-1 min-w-[300px]">
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Search projects..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 max-w-[380px]"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
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

        <Button onClick={handleAddProject} className="bg-gray-900 text-white hover:bg-gray-800">
          Add Project
        </Button>
      </div>

      {/* Projects List */}
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <AppText type="h3" className="font-semibold text-gray-900">
                  {project.name}
                </AppText>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === "FC" ? "bg-green-100 text-green-800" :
                    project.status === "CF" ? "bg-orange-100 text-orange-800" :
                    "bg-purple-100 text-purple-800"
                  }`}>
                    {project.status}
                  </span>
                  <AppText type="span" className="text-sm text-gray-600">
                    Progress: {project.progress}%
                  </AppText>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientProjectsTab;

