import AppText from "@/components/Commmon/AppText";
import { Trash2, PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkeletonPortfolioProjectCard from "@/components/loaders/skeletonLoaders/SkeletonPortfolioProjectCard";

export interface PortfolioProjectData {
  id: string;
  name: string;
  imageUrl?: string;
  badge: "Closed project" | "Own project" | "Featured";
  tags: string[];
  type: "featured" | "archived";
}

interface PortfolioProjectCardProps {
  project: PortfolioProjectData;
  onEdit?: () => void;
  onArchive?: () => void;
  onFeature?: () => void;
  onDelete?: () => void;
  isLoading?: boolean;
}

const PortfolioProjectCard = ({
  project,
  onEdit,
  onArchive,
  onFeature,
  onDelete,
  isLoading = false,
}: PortfolioProjectCardProps) => {
  if (isLoading) {
    return <SkeletonPortfolioProjectCard />;
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Closed project":
        return "bg-[#2DC4DB] text-white";
      case "Own project":
        return "bg-primary text-white";
      case "Featured":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-[16px] shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
      {/* Image */}
      <div className="relative h-[300px] bg-gradient-to-br from-gray-100 to-gray-200">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400">
              <span className="text-4xl">🏠</span>
            </div>
          </div>
        )}
        {/* Badge */}
        <div
          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(
            project.badge
          )}`}
        >
          {project.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Project Name */}
        <AppText type="h3" className="text-base font-bold text-gray-900 mb-2">
          {project.name}
        </AppText>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#DDCEB14D] text-[#9C6E61] text-xs rounded-[8px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-7 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onEdit}
            className="text-[#0A0A0A] hover:text-gray-900 !px-[37.5px] py-2 col-span-3 border-[#D8DAD9]"
          >
            <PencilLine className="w-4 h-4" />  Edit
          </Button>
          {project.type === "featured" ? (
            <Button
              variant="outline"
              size="sm"
              onClick={onArchive}
              className="text-[#0A0A0A] hover:text-gray-900 px-[37.5px] py-2 col-span-3 border-[#D8DAD9]"
            >
               Archive
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={onFeature}
              className="text-[#0A0A0A] hover:text-gray-900 px-[37.5px] py-2 col-span-3 border-[#D8DAD9]"
            >
              Feature
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onDelete}
            className="text-[#E7000B] bg-[#E7000B1A] hover:text-red-900"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectCard;
