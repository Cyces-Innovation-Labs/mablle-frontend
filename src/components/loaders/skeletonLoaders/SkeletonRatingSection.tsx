import { Skeleton } from "@/components/ui/skeleton";

const SkeletonRatingSection = () => (
  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
    {/* Header */}
    <div className="flex items-center mb-6">
      <Skeleton className="w-1 h-6 rounded mr-2" />
      <Skeleton className="h-6 w-40" />
    </div>

    {/* Content */}
    <div className="flex w-full gap-[22px]">
      {/* Average Rating Display */}
      <div className="flex items-center space-x-2">
        <Skeleton className="h-10 w-12" />
        <Skeleton className="h-8 w-8 rounded" />
      </div>

      {/* Rating Distribution */}
      <div className="space-y-3 w-full">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="flex items-center">
            <Skeleton className="h-4 w-8 mr-2" />
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <Skeleton className="h-full w-3/4 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <div className="flex justify-between items-center border-t border-[#D8DAD9] mt-4 pt-3">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-8 w-24" />
    </div>
  </div>
);

export default SkeletonRatingSection;

