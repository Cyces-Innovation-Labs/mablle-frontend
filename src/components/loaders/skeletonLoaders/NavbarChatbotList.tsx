import { Skeleton } from "@/components/ui/skeleton";

const SkeletonChatbotList = ({ count = 3 }: { count?: number }) => (
    <div className="flex flex-col gap-4 px-3 py-2">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <Skeleton className="rounded-lg w-6 h-6" />
          <Skeleton className="h-4 w-32 rounded" />
        </div>
      ))}
    </div>
  );    

export default SkeletonChatbotList;