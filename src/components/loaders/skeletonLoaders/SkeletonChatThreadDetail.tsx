import { Skeleton } from "@/components/ui/skeleton";

const SkeletonChatThreadDetail = () => (
  <div className="p-6 space-y-6">
    {/* User bubble */}
    <div className="flex justify-end">
      <div className="max-w-[70%] bg-white border rounded-xl px-5 py-4 shadow-sm">
        <Skeleton className="h-4 w-32 mb-2 rounded" />
        <Skeleton className="h-4 w-24 rounded" />
      </div>
    </div>
    {/* Bot bubble */}
    <div className="flex justify-start">
      <div className="w-[60%] bg-indigo-100 rounded-xl px-5 py-4 shadow-sm">
        <Skeleton className="h-4 w-40 mb-2 rounded" />
        <Skeleton className="h-4 w-28 rounded" />
        {/* <div className="flex items-center gap-3 mt-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-12 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div> */}
      </div>
    </div>
    {/* User bubble */}
    <div className="flex justify-end">
      <div className="max-w-[70%] bg-white border rounded-xl px-5 py-4 shadow-sm">
        <Skeleton className="h-4 w-28 mb-2 rounded" />
        <Skeleton className="h-4 w-20 rounded" />
      </div>
    </div>
    {/* Bot bubble */}
    <div className="flex justify-start">
      <div className="max-w-[70%] bg-indigo-100 rounded-xl px-5 py-4 shadow-sm">
        <Skeleton className="h-4 w-36 mb-2 rounded" />
        <Skeleton className="h-4 w-32 rounded" />
        <div className="flex items-center gap-3 mt-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-12 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

export default SkeletonChatThreadDetail; 