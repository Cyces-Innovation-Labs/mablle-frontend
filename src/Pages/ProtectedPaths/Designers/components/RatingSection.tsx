import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import SkeletonRatingSection from "@/components/loaders/skeletonLoaders/SkeletonRatingSection";

interface RatingData {
  [key: string]: number;
}

interface RatingSectionProps {
  averageRating: number;
  ratingDistribution: RatingData;
  totalRatings: number;
  onAddReview?: () => void;
  isLoading?: boolean;
}

const RatingSection = ({
  averageRating,
  ratingDistribution,
  totalRatings,
  onAddReview,
  isLoading = false,
}: RatingSectionProps) => {
  if (isLoading) {
    return <SkeletonRatingSection />;
  }

  const getBarLength = (count: number, maxCount: number) => {
    if (maxCount === 0) return 0;
    return (count / maxCount) * 100;
  };

  const maxCount = Math.max(...Object.values(ratingDistribution));

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-1 h-6 bg-[#054D8B] rounded mr-2"></div>
        <AppText type="h3" className="text-lg font-semibold text-gray-900">
          Avg. Client Rating
        </AppText>
      </div>

      {/* Content */}
      <div className="flex w-full gap-[22px]">
        {/* Average Rating Display */}
        <div className="flex items-center space-x-2">
          <AppText type="h1" className="text-4xl font-bold text-gray-900">
            {averageRating}
          </AppText>
          <Star className="w-8 h-8 text-[#F4D03F] fill-current" />
        </div>

        {/* Rating Distribution */}
        <div className="space-y-3 w-full">
          {Object.entries(ratingDistribution)
            .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
            .map(([rating, count]) => {
              const barLength = getBarLength(count as number, maxCount);
              
              return (
                <div key={rating} className="flex items-center">
                  <AppText type="span" className="text-sm w-8 text-gray-600">
                    {rating}
                  </AppText>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all rounded-full
                         bg-[#DAA14C]
                      `}
                      style={{ width: `${barLength}%` }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div  className="flex justify-between items-center border-t border-[#D8DAD9] mt-4 pt-3">
        {/* Total Ratings */}
        <AppText type="span" className="text-sm text-primary font-normal">
          {totalRatings} Ratings
        </AppText>

        {/* Add Review Button */}
        <div>
          <Button
            variant="ghost"
            onClick={onAddReview}
            className="text-[#054D8B] hover:text-[#054D8B]/80"
          >
            <AppText type="span" className="text-sm font-semibold">
              + Add Review
            </AppText>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;

