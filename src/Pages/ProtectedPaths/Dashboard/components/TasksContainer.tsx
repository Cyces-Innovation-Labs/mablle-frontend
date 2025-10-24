import AppText from "@/components/Commmon/AppText";
import { useMemo, memo } from "react";
import { ImageIcon, ShareIcon, UploadIcon, DollarSignIcon, FileCheckIcon, CameraIcon } from "lucide-react";

interface TaskItem {
  id: string;
  title: string;
  count: number;
  change: string;
  icon: React.ComponentType<any>;
  isHighlighted?: boolean;
  hasRedDot?: boolean;
  hasAvatar?: boolean;
}

interface TasksContainerProps {
  data?: TaskItem[];
}

const TasksContainer = memo(({ data }: TasksContainerProps) => {
  const defaultData: TaskItem[] = useMemo(() => [
    {
      id: "1",
      title: "Designs to be uploaded",
      count: 50,
      change: "+10%",
      icon: ImageIcon,
      isHighlighted: true,
    },
    {
      id: "2",
      title: "Designs to be shared",
      count: 11,
      change: "+10%",
      icon: ShareIcon,
    },
    {
      id: "3",
      title: "Execution image to be uploaded",
      count: 2,
      change: "+15%",
      icon: UploadIcon,
    },
    {
      id: "4",
      title: "Payments pending",
      count: 14,
      change: "+20%",
      icon: DollarSignIcon,
      hasRedDot: true,
    },
    {
      id: "5",
      title: "Quotations in review",
      count: 12,
      change: "+15%",
      icon: FileCheckIcon,
    },
    {
      id: "6",
      title: "Photoshoot pending post HO",
      count: 20,
      change: "+15%",
      icon: CameraIcon,
      hasAvatar: true,
    },
  ], []);

  const tasksData = data || defaultData;

  const renderTaskItem = (task: TaskItem) => {
    const IconComponent = task.icon;
    
    return (
      <div 
        key={task.id} 
        className={`px-5 pt-5 pb-[43px] rounded-lg ${
          task.isHighlighted 
            ? 'bg-[#DAA14C1A]' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex flex-col space-y-2">
          {/* Icon and Avatar */}
          <div className="relative">
            <IconComponent className="w-8 h-8 text-amber-600" />
          </div>
          
          {/* Count */}
          <AppText type="span" className="text-2xl font-bold text-gray-900 mt-[30px]">
            {task.count}
          </AppText>
          
          {/* Title with Red Dot */}
          <div className="flex items-center space-x-1">
            {task.hasRedDot && (
              <div className="w-2 h-2 bg-[#DAA14C1A] rounded-full"></div>
            )}
            <AppText type="span" className="text-sm text-gray-700">
              {task.title}
            </AppText>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
        <AppText type="h3" className="text-sm font-semibold text-primary mb-4">
        Tasks
      </AppText>
    <div className="bg-white rounded-lg p-6 shadow-sm">
      
      
      <div className="grid grid-cols-3 gap-4">
        {tasksData.map((task) => renderTaskItem(task))}
      </div>
    </div>
    </div>
  );
});

export default TasksContainer;
