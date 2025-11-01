import { Skeleton } from "@/components/ui/skeleton";

const SkeletonQuotations = () => (
  <div className="space-y-[27px]">
    <div className="bg-white rounded-[8px] shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Skeleton className="w-1 h-5 rounded" />
          <Skeleton className="h-5 w-32" />
        </div>
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="rounded-[8px] overflow-hidden border border-[#ECECEC]">
            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <Skeleton className="h-5 w-32 mb-2" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Skeleton className="h-6 w-8" />
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-5 w-5 rounded" />
                </div>
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="grid grid-cols-6 gap-4 mb-4">
                <Skeleton className="col-span-3 h-4 w-24" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-20" />
              </div>
              {Array.from({ length: 2 }).map((_, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-6 gap-4 mb-2">
                  <Skeleton className="col-span-3 h-4 w-32" />
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkeletonQuotations;

