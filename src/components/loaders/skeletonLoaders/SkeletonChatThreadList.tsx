import { Skeleton } from "@/components/ui/skeleton";

const SkeletonChatThreadList = () => (
  <div className="p-2">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="mb-3 last:mb-0">
        <Skeleton className="h-14 rounded-md mb-1 w-full" style={{opacity: `${100 - (i*30)}%` }} />
      </div>
    ))}
  </div>
);

export default SkeletonChatThreadList; 