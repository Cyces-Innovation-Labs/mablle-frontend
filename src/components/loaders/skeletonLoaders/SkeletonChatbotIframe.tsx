import { Skeleton } from "@/components/ui/skeleton";

const SkeletonChatbotIframe = () => (
  <div className="w-full max-w-[428px] h-full rounded-[24px] border-[1.5px] bg-background flex flex-col min-h-[520px] max-h-[520px]">
    {/* Header */}
    <div className="flex items-center gap-3 px-6 py-4 rounded-t-[24px]">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="flex flex-col">
        <Skeleton className="h-4 w-28 mb-1" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>

    {/* Chat Messages */}
    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
      {/* Bot Message */}
      <div className="flex items-start gap-2">
        <Skeleton className="h-7 w-7 rounded-full" />
        <div>
          <Skeleton className="h-4 w-40 rounded-2xl mb-2" />
          <Skeleton className="h-4 w-56 rounded-2xl" />
        </div>
      </div>
      {/* User Message */}
      <div className="flex items-start justify-end gap-2">
        <div>
          <Skeleton className="h-4 w-32 rounded-2xl mb-2" />
          <Skeleton className="h-4 w-24 rounded-2xl" />
        </div>
        <Skeleton className="h-7 w-7 rounded-full" />
      </div>
      {/* Another Bot Message */}
      <div className="flex items-start gap-2">
        <Skeleton className="h-7 w-7 rounded-full" />
        <div>
          <Skeleton className="h-4 w-48 rounded-2xl mb-2" />
          <Skeleton className="h-4 w-36 rounded-2xl" />
        </div>
      </div>
    </div>

    {/* Input Area */}
    <div className="px-6 py-4 border-t flex items-center gap-2 rounded-b-[24px]">
      <Skeleton className="h-10 flex-1 rounded-full" />
      <Skeleton className="h-10 w-10 rounded-full" />
    </div>
  </div>
);

export default SkeletonChatbotIframe; 