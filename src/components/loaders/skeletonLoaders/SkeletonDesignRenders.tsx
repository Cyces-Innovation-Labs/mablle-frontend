import { Skeleton } from "@/components/ui/skeleton";

const SkeletonDesignRenders = () => (
  <div className="space-y-6 bg-white shadow-sm rounded-[8px] p-6">
    <div className="flex items-center gap-2 mb-10">
      <Skeleton className="w-1 h-5 rounded" />
      <Skeleton className="h-5 w-32" />
    </div>
    
    {/* 3D Floorplan */}
    <div className="mb-4">
      <Skeleton className="h-5 w-32 mb-4" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Skeleton key={idx} className="w-full aspect-square rounded-[16px]" />
        ))}
      </div>
    </div>

    {/* Design Renders collection */}
    <div className="mb-4">
      <Skeleton className="h-5 w-40 mb-4" />
      <div className="space-y-6">
        {Array.from({ length: 3 }).map((_, catIdx) => (
          <div key={catIdx} className="rounded-[8px] border border-[#ECECEC] space-y-2">
            <div className="flex items-center justify-between px-4 py-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="px-4 pb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {Array.from({ length: 3 }).map((_, imgIdx) => (
                <Skeleton key={imgIdx} className="w-full aspect-square rounded-[16px]" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Walkthroughs */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="rounded-[8px] bg-[#F3F5F8] px-4 py-3 flex items-center justify-between">
            <div>
              <Skeleton className="h-4 w-48 mb-2" />
              <Skeleton className="h-3 w-32" />
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkeletonDesignRenders;

