import { Skeleton } from "@/components/ui/skeleton";

const SkeletonPortfolioProjectCard = () => (
  <div className="bg-white rounded-[16px] shadow-sm border border-gray-200 overflow-hidden">
    {/* Image */}
    <div className="relative h-[300px] bg-gradient-to-br from-gray-100 to-gray-200">
      <Skeleton className="w-full h-full" />
      {/* Badge */}
      <div className="absolute top-2 right-2">
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
    </div>

    {/* Content */}
    <div className="p-4">
      {/* Project Name */}
      <Skeleton className="h-5 w-3/4 mb-2" />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Skeleton className="h-6 w-16 rounded-[8px]" />
        <Skeleton className="h-6 w-20 rounded-[8px]" />
        <Skeleton className="h-6 w-14 rounded-[8px]" />
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-7 gap-2">
        <Skeleton className="h-9 col-span-3 rounded-md" />
        <Skeleton className="h-9 col-span-3 rounded-md" />
        <Skeleton className="h-9 rounded-md" />
      </div>
    </div>
  </div>
);

export default SkeletonPortfolioProjectCard;

