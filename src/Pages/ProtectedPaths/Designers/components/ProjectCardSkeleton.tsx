import { Skeleton } from "@/components/ui/skeleton";

const ProjectCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 space-y-3">
        {/* Top Section */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>

        {/* Status Indicator */}
        <Skeleton className="h-3 w-40" />

        {/* Main Status */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-32" />

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-12" />
          </div>
          <Skeleton className="h-2 w-full rounded-full" />
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="h-32 bg-gray-100 rounded-b-lg" />
    </div>
  );
};

export default ProjectCardSkeleton;

