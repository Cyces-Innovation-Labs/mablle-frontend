import { Skeleton } from "@/components/ui/skeleton";

const SkeletonClientReviewCard = () => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="flex items-start gap-10">
      {/* Profile Picture and Name */}
      <div className="flex-shrink-0">
        <Skeleton className="w-12 h-12 rounded-full mb-2" />
        <Skeleton className="h-4 w-24 mb-1" />
        <Skeleton className="h-3 w-20" />
      </div>

      {/* Review Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          {/* Star Rating and Date */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="w-4 h-4 rounded" />
              ))}
            </div>
            <Skeleton className="h-3 w-20" />
          </div>
          {/* Action Button */}
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>

        {/* Review Text */}
        <div className="space-y-2 mb-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  </div>
);

export default SkeletonClientReviewCard;

