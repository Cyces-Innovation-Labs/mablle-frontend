import AppText from "@/components/Commmon/AppText";
import { ChevronDown, Circle, CheckCircle, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export interface ProjectCardData {
  id: string;
  designerName: string;
  statusTag: {
    label: string;
    bgColor: string;
  };
  statusIndicator: {
    color: "green" | "orange" | "red" | "gray";
    label: string;
    icon?: "circle" | "tick" | "clock";
  };
  mainStatus: string;
  mainStatusColor?: "green" | "orange" | "red" | "gray";
  secondaryStatus?: {
    label: string;
    color: "green" | "orange" | "red" | "gray";
  };
  date?: string;
  dateLabel?: "Due on" | "Overdue" | "Est. Handover" | "Started" | "Completed";
  additionalDates?: Array<{ label: string; date: string }>;
  progress?: number;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusColor = (color: string) => {
    switch (color) {
      default:
        return "text-[#737373]";
    }
  };

  const getIcon = (iconType?: string, color: string = "green") => {
    const iconColor = color === "green" ? "green" : color === "orange" ? "orange" : color === "red" ? "red" : "gray";
    const textColor = `text-${iconColor}-600`;
    
    switch (iconType) {
      case "tick":
        return <CheckCircle className={cn("w-4 h-4", textColor)} />;
      case "clock":
        return <Clock className={cn("w-4 h-4", textColor)} />;
      case "circle":
      default:
        return <div className={`border border-[#0DA000] ${textColor} flex items-center justify-center rounded-full w-[10px] h-[10px]`}  >
          <Circle className={cn("w-[5px] h-[5px] fill-current", textColor)} />
        </div>;
    }
  };

  // const isPaymentRelated = project.mainStatus.toLowerCase().includes("payment");
  // const isHandover = project.mainStatus.toLowerCase().includes("handover");

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      {/* Top Section */}
      <div className="p-4">
        {/* Project ID and Status Tag */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <AppText type="h3" className="text-sm font-semibold text-gray-900 mb-1">
              {project.id}
            </AppText>
            <AppText type="span" className="text-sm text-gray-600">
              {project.designerName}
            </AppText>
          </div>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${project.statusTag.bgColor} text-white`}>
            <span>{project.statusTag.label}</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 mb-2 border border-2 rounded-full px-3 py-[6px] w-fit">
          {getIcon(project.statusIndicator.icon, project.statusIndicator.color)}
          <AppText type="span" className={cn("text-xs font-medium", getStatusColor(project.statusIndicator.color))}>
            {project.statusIndicator.label}
          </AppText>
        </div>

        <div className="border-t border-b py-4 mb-3">
          {/* Secondary Status */}
        {project.secondaryStatus && (
          <div className="flex items-center gap-2 mb-2">
            <Circle className={cn("w-3 h-3 fill-current", getStatusColor(project.secondaryStatus.color))} />
            <AppText type="span" className={cn("text-sm font-medium", getStatusColor(project.secondaryStatus.color))}>
              {project.secondaryStatus.label}
            </AppText>
          </div>
        )}

        {/* Date with Label */}
        {project.date && (
          <div className="flex items-center gap-2">
            {project.dateLabel && project.dateLabel.includes("Started") || project.dateLabel?.includes("Completed") ? (
              <>
                <Clock className="w-3 h-3 text-gray-500" />
                <AppText type="span" className="text-xs text-gray-500">
                  <span className="font-medium">{project.dateLabel}: </span>
                  {project.date}
                </AppText>
              </>
            ) : (
              <AppText type="span" className="text-xs text-gray-500">
                {project.dateLabel && `${project.dateLabel}: `}
                {project.date}
              </AppText>
            )}
          </div>
        )}
        </div>

        {/* Additional Dates */}
        {project.additionalDates && project.additionalDates.length > 0 && (
          <div className="space-y-1 mt-2 mb-2">
            {project.additionalDates.map((dateInfo, index) => (
              <div key={index} className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-gray-500" />
                <AppText type="span" className="text-xs text-gray-500">
                  <span className="font-medium">{dateInfo.label}: </span>
                  {dateInfo.date}
                </AppText>
              </div>
            ))}
          </div>
        )}

              {/* Bottom Section - Image Placeholder */}
      <div className="h-32 bg-gray-100 rounded-b-lg flex items-center justify-center">
        <div className="grid grid-cols-4 gap-1 w-full h-full p-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="bg-gray-200 rounded" />
          ))}
        </div>
      </div>

        {/* Progress Bar */}
        {project.progress !== undefined ? (
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1">
              <AppText type="span" className="text-xs text-gray-600">
                Overall Progress
              </AppText>
              <AppText type="span" className="text-xs font-semibold text-gray-900">
                {project.progress}%
              </AppText>
            </div>
            <Progress value={project.progress} className="h-2 rounded-full" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;

