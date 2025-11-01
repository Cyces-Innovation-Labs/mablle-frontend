import { Skeleton } from "@/components/ui/skeleton";

const SkeletonExecutionImages = () => (
  <div className="space-y-4 bg-white shadow-sm rounded-[8px] p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Skeleton className="w-1 h-5 rounded" />
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-8 w-24" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Skeleton key={idx} className="w-full aspect-square rounded-[16px]" />
      ))}
    </div>
  </div>
);

export default SkeletonExecutionImages;

