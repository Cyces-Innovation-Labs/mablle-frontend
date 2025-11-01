import { Skeleton } from "@/components/ui/skeleton";

const SkeletonTasksUpdates = () => (
  <div className="space-y-4">
    {Array.from({ length: 3 }).map((_, idx) => (
      <div
        key={idx}
        className="flex items-center justify-between py-2 shadow-sm rounded-[8px] py-6 px-5"
      >
        <div className="flex items-center space-x-3">
          <Skeleton className="w-2 h-2 rounded-full" />
          <Skeleton className="h-5 w-32" />
        </div>
        <Skeleton className="h-4 w-8" />
      </div>
    ))}
  </div>
);

export default SkeletonTasksUpdates;

