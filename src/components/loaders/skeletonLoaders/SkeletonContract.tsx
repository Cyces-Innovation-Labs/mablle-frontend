import { Skeleton } from "@/components/ui/skeleton";

const SkeletonContract = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-[8px] p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="w-1 h-5 rounded" />
        <Skeleton className="h-5 w-24" />
      </div>

      <div className="rounded-[8px] bg-[#E9EBEF80] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-10" />
          <div>
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-3 w-40" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>
    </div>
  </div>
);

export default SkeletonContract;

