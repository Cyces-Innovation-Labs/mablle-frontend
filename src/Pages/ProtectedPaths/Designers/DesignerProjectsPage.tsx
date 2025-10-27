import { useState } from "react";
import ProjectCard, { type ProjectCardData } from "./components/ProjectCard";
import ProjectCardSkeleton from "./components/ProjectCardSkeleton";
import ProjectsHeader from "./components/ProjectsHeader";

const DesignerProjectsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activeTab, setActiveTab] = useState<"ongoing" | "closed">("ongoing");
  const isLoading = false;

  // Mock project data - Replace with actual API call
  const ongoingProjects: ProjectCardData[] = [
    {
      id: "MID385626",
      designerName: "Randy Dorwart",
      statusTag: { label: "BK", bgColor: "bg-[#F2C94C]" },
      statusIndicator: { color: "green", label: "Booking Confirmed", icon: "circle" },
      mainStatus: "Booking Confirmed",
      mainStatusColor: "green",
      secondaryStatus: { label: "Upcoming Payment", color: "orange" },
      date: "Dec 30, 2025",
      dateLabel: "Due on",
    },
    {
      id: "MID385627",
      designerName: "Randy Dorwart",
      statusTag: { label: "BK", bgColor: "bg-[#F2C94C]" },
      statusIndicator: { color: "green", label: "Booking Confirmed", icon: "circle" },
      mainStatus: "Booking Confirmed",
      mainStatusColor: "green",
      secondaryStatus: { label: "Upcoming Payment", color: "red" },
      date: "Dec 30, 2025",
      dateLabel: "Overdue",
    },
    {
      id: "MID385628",
      designerName: "Rajesh Kumar",
      statusTag: { label: "CF", bgColor: "bg-[#FF6B35]" },
      statusIndicator: { color: "green", label: "Project Confirmed", icon: "circle" },
      mainStatus: "Project Confirmed",
      mainStatusColor: "green",
      secondaryStatus: { label: "Project Confirmed", color: "green" },
      date: "23th Sep 2025",
      progress: 98,
    },
    {
      id: "MID385629",
      designerName: "Rajesh Kumar",
      statusTag: { label: "CF", bgColor: "bg-[#FF6B35]" },
      statusIndicator: { color: "green", label: "Project Confirmed", icon: "circle" },
      mainStatus: "Project Confirmed",
      mainStatusColor: "green",
      secondaryStatus: { label: "Execution In Progress", color: "green" },
      date: "23th Sep 2025",
      progress: 98,
    },
    {
      id: "MID385630",
      designerName: "Randy Dorwart",
      statusTag: { label: "CF", bgColor: "bg-[#FF6B35]" },
      statusIndicator: { color: "green", label: "Booking Confirmed", icon: "circle" },
      mainStatus: "Booking Confirmed",
      mainStatusColor: "green",
      secondaryStatus: { label: "Upcoming Final Payment", color: "orange" },
      date: "Dec 30, 2025",
      dateLabel: "Due on",
      progress: 98,
    },
    {
      id: "MID385631",
      designerName: "Randy Dorwart",
      statusTag: { label: "CF", bgColor: "bg-[#FF6B35]" },
      statusIndicator: { color: "green", label: "Booking Confirmed", icon: "circle" },
      mainStatus: "Booking Confirmed",
      mainStatusColor: "green",
      secondaryStatus: { label: "Final Payment Pending", color: "red" },
      date: "Dec 30, 2025",
      dateLabel: "Overdue",
      progress: 98,
    },
    {
      id: "MID385632",
      designerName: "Randy Dorwart",
      statusTag: { label: "FC", bgColor: "bg-green-600" },
      statusIndicator: { color: "green", label: "Project Confirmed", icon: "circle" },
      mainStatus: "Project Confirmed",
      mainStatusColor: "green",
      secondaryStatus: { label: "Execution In Progress", color: "green" },
      date: "23th Sep 2025",
      progress: 98,
    },
    {
      id: "MID385633",
      designerName: "Randy Dorwart",
      statusTag: { label: "FC", bgColor: "bg-green-600" },
      statusIndicator: { color: "green", label: "Project Confirmed", icon: "circle" },
      mainStatus: "Project Confirmed",
      mainStatusColor: "green",
      secondaryStatus: { label: "Handover Pending", color: "gray" },
      date: "Dec 30, 2025",
      dateLabel: "Est. Handover",
      progress: 98,
    },
    {
      id: "MID385634",
      designerName: "Randy Dorwart",
      statusTag: { label: "HO", bgColor: "bg-cyan-600" },
      statusIndicator: { color: "green", label: "Project Handover", icon: "tick" },
      mainStatus: "Project Handover",
      mainStatusColor: "green",
      secondaryStatus: { label: "Project handed over.", color: "green" },
      date: "23th Sep 2025",
      additionalDates: [
        { label: "Started", date: "Aug 1, 2025" },
        { label: "Completed", date: "Dec 30, 2025" },
      ],
    },
  ];

  const closedProjects: ProjectCardData[] = [
    // Add closed projects data here
  ];

  // Filter projects based on search, status, and tab
  const filteredProjects = (activeTab === "ongoing" ? ongoingProjects : closedProjects).filter(
    (project) => {
      const matchesSearch =
        searchValue === "" ||
        project.id.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.designerName.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.mainStatus.toLowerCase().includes(searchValue.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || project.statusTag.label.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    }
  );

  const projectCount = filteredProjects.length;
  const title = activeTab === "ongoing" ? "Ongoing Projects" : "Closed Projects";

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <ProjectsHeader
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        projectCount={projectCount}
        title={title}
      />

      {/* Projects Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="flex items-center justify-center h-64 bg-white rounded-lg border border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 text-lg">No projects found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DesignerProjectsPage;
