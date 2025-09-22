import { Skeleton } from "@/components/ui/skeleton";

const SkeletonFilesList = () => {
  return (
    <div className="mt-4">

      <div className="mt-[24px] flex flex-col gap-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="size-[38px] rounded-full" />
              <div>
                <Skeleton className="h-5 w-[200px] mb-1" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-[80px]" />
                  <Skeleton className="h-4 w-[60px]" />
                </div>
              </div>
            </div>
            <Skeleton className="size-8 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonFilesList;
