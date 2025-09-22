import { Skeleton } from "@/components/ui/skeleton";

const SkeletonTeamSwitcher = () => (
  <div className="flex items-center gap-3 p-2">
    <Skeleton className="rounded-lg w-8 h-8" />
    <Skeleton className="h-6 w-1" />
    <div className="flex flex-col gap-1 flex-1">
      <Skeleton className="h-4 w-24 rounded" />
      <Skeleton className="h-3 w-16 rounded" />
    </div>
    <Skeleton className="h-5 w-5 rounded" />
  </div>
);

export default SkeletonTeamSwitcher;
