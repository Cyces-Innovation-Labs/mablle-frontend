import { Skeleton } from "@/components/ui/skeleton";

const SkeletonExecutionTimeline = () => (
  <div className="space-y-[27px] bg-white shadow-sm rounded-[8px] p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Skeleton className="w-1 h-5 rounded" />
        <Skeleton className="h-5 w-40" />
      </div>
      <Skeleton className="h-4 w-32" />
    </div>
    <div className="pt-10">
      <div className="mb-6">
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-2 w-full" />
      </div>
      <div className="mt-6 space-y-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx} className="grid grid-cols-[18px_1fr_auto] items-start gap-3">
            <div className="flex flex-col items-center">
              <Skeleton className="w-4 h-4 rounded-full" />
              {idx < 7 && <Skeleton className="h-[42px] w-0.5 my-[8px]" />}
            </div>
            <div>
              <Skeleton className="h-4 w-48" />
            </div>
            <div>
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkeletonExecutionTimeline;

