import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";
import { Star, SquareCheck } from "lucide-react";
import SkeletonClientReviewCard from "@/components/loaders/skeletonLoaders/SkeletonClientReviewCard";

export interface ClientReviewData {
  id: string;
  clientName: string;
  affiliation: string;
  rating: number;
  date: string;
  reviewText: string;
  profileImage?: string;
  isPublished: boolean;
}

interface ClientReviewCardProps {
  review: ClientReviewData;
  onPublish?: () => void;
  isLoading?: boolean;
}

const ClientReviewCard = ({ review, onPublish, isLoading = false }: ClientReviewCardProps) => {
  if (isLoading) {
    return <SkeletonClientReviewCard />;
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-10">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          {review.profileImage ? (
            <img
              src={review.profileImage}
              alt={review.clientName}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <AppText type="span" className="text-gray-600 font-semibold">
                {review.clientName.charAt(0)}
              </AppText>
            </div>
          )}
          <div className="mt-2">
              <AppText type="p" className="font-semibold text-sm text-primary">
                {review.clientName}
              </AppText>
              <AppText type="span" className="text-xs font-medium text-[#717182]">
                {review.affiliation}
              </AppText>
            </div>
        </div>

        {/* Review Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            {/* Star Rating and Date */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <AppText type="span" className="text-xs text-gray-500">
                {review.date}
              </AppText>
            </div>
            {/* Action Button */}
          <div className="flex justify-end">
            {review.isPublished ? (
              <Button
                variant="outline"
                size="sm"
                className="bg-[#23211D1A] text-primary border-primary hover:bg-gray-100"
              >
                <SquareCheck className="w-4 h-4 mr-2" />
                Published
              </Button>
            ) : (
              <Button
                onClick={onPublish}
                size="sm"
                className="bg-gray-900 text-white hover:bg-gray-800 px-[32px] py-2"
              >
                Publish
              </Button>
            )}
          </div>
          </div>

          {/* Review Text */}
          <AppText type="p" className="text-sm text-gray-700 mb-3">
            {review.reviewText}
          </AppText>

          
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;

