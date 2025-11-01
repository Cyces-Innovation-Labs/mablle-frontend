import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProjectNotesList = () => (
  <div className="mb-8 rounded-sm">
    {Array.from({ length: 5 }).map((_, idx) => (
      <div key={idx} className="bg-white border p-6 mb-2">
        <div className="flex items-center gap-4">
          {/* Left side - Category and Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Skeleton className="h-5 w-24 rounded-full" />
            </div>
            
            <div className="flex items-center gap-3 mb-3">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
            
            <div className="space-y-2 mb-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
          
          {/* Right side - Attachments (randomly show for some items) */}
          {idx % 3 !== 0 && (
            <div className="flex-shrink-0">
              {idx % 3 === 1 ? (
                // PDF attachment skeleton
                <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                  <Skeleton className="w-8 h-8 rounded" />
                  <div>
                    <Skeleton className="h-4 w-32 mb-1" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
              ) : (
                // Image attachment skeleton
                <Skeleton className="w-20 h-20 rounded-lg" />
              )}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonProjectNotesList;

