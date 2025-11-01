import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProjectTimeline = () => (
  <div className="space-y-[27px] p-6 bg-white shadow-sm rounded-[8px]">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Skeleton className="w-1 h-5 rounded" />
        <Skeleton className="h-5 w-32" />
      </div>
      <Skeleton className="h-4 w-32" />
    </div>
    <div className="mt-2 space-y-6">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="grid grid-cols-[28px_1fr_auto] gap-3 items-start">
          <div className="flex flex-col items-center">
            <Skeleton className="w-4 h-4 rounded-full" />
            {idx < 5 && <Skeleton className="h-[50px] w-0.5 my-[10px]" />}
          </div>
          <div className="py-0">
            <Skeleton className="h-5 w-48 mb-2" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="py-0">
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkeletonProjectTimeline;

