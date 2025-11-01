import { Skeleton } from "@/components/ui/skeleton";

const SkeletonDesignStartsWithYouForm = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      <Skeleton className="h-6 w-48 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
);

export default SkeletonDesignStartsWithYouForm;

