import { Skeleton } from "@/components/ui/skeleton";

const SkeletonRenovationCalculator = () => (
  <div className="space-y-4">
    <div className="flex flex-col space-y-6 space-x-2 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <Skeleton className="w-1 h-6 rounded" />
        <Skeleton className="h-6 w-48" />
      </div>

      {/* Estimated Budget */}
      <div className="bg-green-100 border border-green-200 rounded-lg p-4">
        <Skeleton className="h-5 w-40" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Property Details Table Skeleton */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#8B6F64] text-center px-4 py-3 rounded-t-lg">
            <Skeleton className="h-5 w-24 mx-auto" />
          </div>
          <div className="bg-[#F5E8D7] px-4 py-3">
            <div className="grid grid-cols-4 gap-4">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
          <div className="bg-white px-4 py-3 rounded-b-lg">
            <div className="grid grid-cols-4 gap-4">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>

        {/* Rooms Renovating Table Skeleton */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#8B6F64] text-center px-4 py-3 rounded-t-lg">
            <Skeleton className="h-5 w-32 mx-auto" />
          </div>
          <div className="bg-[#F5E8D7] px-4 py-3">
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
          <div className="bg-white px-4 py-3 rounded-b-lg">
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>

        {/* Works Required Table Skeleton */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#8B6F64] text-center px-4 py-3 rounded-t-lg">
            <Skeleton className="h-5 w-28 mx-auto" />
          </div>
          <div className="bg-[#F5E8D7] px-4 py-3">
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
          <div className="bg-white px-4 py-3 rounded-b-lg">
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SkeletonRenovationCalculator;

