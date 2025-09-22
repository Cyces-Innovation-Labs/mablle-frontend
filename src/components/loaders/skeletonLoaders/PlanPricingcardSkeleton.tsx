import { Skeleton } from '@/components/ui/skeleton'

interface PlanPricingcardSkeletonProps {
  count?: number
}

const PlanPricingcardSkeleton = ({ count = 3 }: PlanPricingcardSkeletonProps) => {
  const SingleCardSkeleton = () => (
    <div className="bg-[#F9FAFB] px-[28px] py-[30px] rounded-[17.7px] flex-1">
      <div className="flex justify-between flex-col h-full">
        <div className="mb-8">
          {/* Plan title and price section */}
          <div className="flex justify-center items-center flex-col gap-[1px]">
            {/* Plan title skeleton */}
            <Skeleton className="h-[26px] w-[120px] mb-1" />
            {/* Price skeleton */}
            <Skeleton className="h-[53px] w-[140px] mb-1" />
            {/* Description skeleton */}
            <Skeleton className="h-[21px] w-[200px]" />
          </div>
          
          {/* Features section */}
          <div className="flex justify-start items-start flex-col gap-[14px] mt-[28px]">
            {/* Feature rows skeleton - showing 4-5 features */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="grid grid-cols-[24px_1fr] gap-[10px] items-center">
                {/* Checkmark icon skeleton */}
                <Skeleton className="h-[16px] w-[16px] rounded-full" />
                {/* Feature text skeleton */}
                <Skeleton className="h-[14px] w-[180px]" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Button skeleton */}
        <div>
          <Skeleton className="h-[40px] w-full rounded-md" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <SingleCardSkeleton key={index} />
      ))}
    </div>
  )
}

export default PlanPricingcardSkeleton