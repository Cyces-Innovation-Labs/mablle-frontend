import { Skeleton } from "@/components/ui/skeleton";

const SkeletonPayments = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-[8px] p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="w-1 h-5 rounded" />
        <Skeleton className="h-5 w-24" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="rounded-[8px] overflow-hidden border border-[#ECECEC]">
            <div className="bg-[#1E1E1E] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
              <div className="flex items-center gap-4">
                <Skeleton className="h-6 w-28" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
            <div className="divide-y">
              <div className="grid grid-cols-2 gap-4 px-4 py-3">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16 ml-auto" />
              </div>
              {Array.from({ length: 2 }).map((_, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-2 gap-4 px-4 py-3">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-20 ml-auto" />
                </div>
              ))}
              <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkeletonPayments;

