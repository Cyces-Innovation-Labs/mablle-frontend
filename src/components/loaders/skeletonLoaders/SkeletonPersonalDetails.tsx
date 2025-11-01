import { Skeleton } from "@/components/ui/skeleton";

const SkeletonPersonalDetails = () => (
  <div className="space-y-4">
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton className="w-1 h-6 rounded" />
          <Skeleton className="h-6 w-32" />
        </div>
      </div>

      <div className="flex items-start space-x-6">
        {/* Profile Image Skeleton */}
        <div className="flex-shrink-0">
          <Skeleton className="w-20 h-20 rounded-full" />
        </div>

        {/* Contact Information Skeleton */}
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Full Name */}
            <div>
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-5 w-32" />
            </div>

            {/* Phone */}
            <div>
              <Skeleton className="h-4 w-16 mb-2" />
              <Skeleton className="h-5 w-28" />
            </div>

            {/* Email */}
            <div>
              <Skeleton className="h-4 w-16 mb-2" />
              <Skeleton className="h-5 w-40" />
            </div>

            {/* Address */}
            <div>
              <Skeleton className="h-4 w-16 mb-2" />
              <Skeleton className="h-5 w-36" />
            </div>

            {/* Location */}
            <div>
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-5 w-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SkeletonPersonalDetails;

