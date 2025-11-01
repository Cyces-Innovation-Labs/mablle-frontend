import { Skeleton } from "@/components/ui/skeleton";

const SkeletonClientNotesTab = () => (
  <div className="space-y-6 p-6 bg-white rounded-[8px] shadow-sm">
    <div className="flex items-center gap-2">
      <Skeleton className="w-1 h-5 rounded" />
      <Skeleton className="h-5 w-40" />
    </div>

    {/* Project Notes */}
    <div>
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx} className="flex gap-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
        <Skeleton className="h-20 w-full rounded-md" />
      </div>
    </div>

    {/* Floorplan */}
    <div>
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx} className="flex gap-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
        <Skeleton className="h-20 w-full rounded-md" />
      </div>
    </div>

    {/* 3D Designs */}
    <div>
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-4 w-24" />
      </div>
      {Array.from({ length: 2 }).map((_, idx) => (
        <div key={idx} className="rounded-[8px] grid grid-cols-10 border border-[#E5E7EB] p-3 mb-4">
          <Skeleton className="h-[100px] w-[100px] rounded-md" />
          <div className="col-span-9 ml-4">
            <div className="space-y-4">
              {Array.from({ length: 1 }).map((_, noteIdx) => (
                <div key={noteIdx} className="flex gap-3">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
              <Skeleton className="h-20 w-full rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkeletonClientNotesTab;

