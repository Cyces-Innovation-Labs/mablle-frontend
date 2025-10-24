import AppText from "@/components/Commmon/AppText";
import { FolderIcon, CircleDotIcon, CheckCircleIcon } from "lucide-react";
import { useMemo, memo } from "react";

interface ProjectStats {
  total: number;
  active: number;
  completed: number;
  activeChange: string;
  completedChange: string;
}

interface ProjectsContainerProps {
  data?: ProjectStats;
}

const ProjectsContainer = memo(({ data }: ProjectsContainerProps) => {
  const defaultData: ProjectStats = useMemo(() => ({
    total: 250,
    active: 40,
    completed: 100,
    activeChange: "+5% this month",
    completedChange: "+5% this month",
  }), []);

  const projectData = data || defaultData;

  return (
    <div className="space-y-4">
      

      {/* Main Project Card */}
      <div className="bg-gradient-to-r from-[#9C6E61] to-[#C6982B] rounded-lg p-6 text-white">
        <div className="flex items-center space-x-4">
          <FolderIcon className="w-8 h-8" />
          <div>
            <AppText type="h2" className="text-3xl font-bold">
              {projectData.total}
            </AppText>
            <AppText type="p">
              Total projects
            </AppText>
          </div>
        </div>
        {/* Sub Cards */}
      <div className="grid grid-cols-1 gap-3 mt-6">
        {/* Active Projects */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AppText type="span" className="text-2xl font-bold text-gray-900">
                {projectData.active}
              </AppText>
              <div className="flex items-center space-x-2">
                <CircleDotIcon className="w-3 h-3 text-red-500 fill-current" />
                <AppText type="span" className="text-sm text-gray-600">
                  Active Projects
                </AppText>
              </div>
            </div>
            <AppText type="span" className="text-sm text-green-600 font-medium">
              {projectData.activeChange}
            </AppText>
          </div>
        </div>

        {/* Completed Projects */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AppText type="span" className="text-2xl font-bold text-gray-900">
                {projectData.completed}
              </AppText>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="w-3 h-3 text-amber-600 fill-current" />
                <AppText type="span" className="text-sm text-gray-600">
                  Completed Projects
                </AppText>
              </div>
            </div>
            <AppText type="span" className="text-sm text-green-600 font-medium">
              {projectData.completedChange}
            </AppText>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
});

export default ProjectsContainer;
