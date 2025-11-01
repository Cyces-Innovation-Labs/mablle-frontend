import { Skeleton } from "@/components/ui/skeleton";

const SkeletonStatisticsCards = () => (
  <div className="mb-6">
    <div className="flex gap-[25px] items-center p-2 bg-[#FFFFFF] shadow-sm rounded-[16px]">
      <div className="flex flex-col pl-6">
        <Skeleton className="h-8 w-16 mb-1" />
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="bg-gradient-to-r from-[#9C6E61] to-[#DAA14C] rounded-lg p-4 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="rounded-lg p-4 bg-white/20 backdrop-blur-sm">
              <Skeleton className="h-8 w-12 mb-1 bg-white/30" />
              <div className="flex items-center justify-between mt-2">
                <Skeleton className="h-4 w-20 bg-white/30" />
                <Skeleton className="h-4 w-4 rounded bg-white/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SkeletonStatisticsCards;

