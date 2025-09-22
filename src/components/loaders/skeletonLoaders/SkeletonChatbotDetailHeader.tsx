import { Skeleton } from "@/components/ui/skeleton";

const SkeletonChatbotDetailHeader = () => (
    <div className="bg-background pt-[26px] pb-[6px]">
      <div className="w-full max-w-[1160px] mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Skeleton className="h-4 w-40 mb-2" />
            <Skeleton className="h-8 w-64 mb-3" />
            <div className="flex items-center gap-2 mt-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
          <div>
            <Skeleton className="h-10 w-32 rounded-md" />
          </div>
        </div>
        <div className="mt-[23px] flex gap-4">
          <Skeleton className="h-8 w-24 rounded-md" />
          <Skeleton className="h-8 w-24 rounded-md" />
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );

export default SkeletonChatbotDetailHeader;