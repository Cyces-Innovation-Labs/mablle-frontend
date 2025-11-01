import AppText from "@/components/Commmon/AppText";
import { ChevronDown } from "lucide-react";
import SkeletonStatisticsCards from "@/components/loaders/skeletonLoaders/SkeletonStatisticsCards";

interface StatCard {
  label: string;
  value: string | number;
  variant?: "primary" | "secondary" | "default";
  showDropdown?: boolean;
}

interface StatisticsCardsProps {
  stats: StatCard[];
  totalCount: number;
  isLoading?: boolean;
}

const StatisticsCards = ({ stats, totalCount = 50, isLoading = false }: StatisticsCardsProps) => {
  if (isLoading) {
    return <SkeletonStatisticsCards />;
  }

  const getVariantStyles = (variant: string = "default") => {
    switch (variant) {
      case "primary":
        return "bg-transparent text-white";
      case "secondary":
        return "bg-[#D4C4B8] text-gray-900";
      default:
        return "bg-white text-gray-900 shadow-sm";
    }
  };

  return (
    <div className="mb-6">
      {/* Outer container with gradient background */}
      <div className="flex gap-[25px] items-center p-2 bg-[#FFFFFF] shadow-sm rounded-[16px]">
        <div className="flex flex-col pl-6">
        <AppText type="h2" className="text-2xl font-bold mb-1">
          {totalCount}
        </AppText>
        <AppText type="span" className="text-sm">
          Total Projects
        </AppText>
        </div>

      <div className="bg-gradient-to-r from-[#9C6E61] to-[#DAA14C] rounded-lg p-4 w-full">
        {/* Inner grid for cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 flex flex-col justify-between ${getVariantStyles(stat.variant)}`}
            >
              {/* Value */}
              <AppText type="h2" className="text-2xl font-bold mb-1">
                {stat.value}
              </AppText>

              {/* Label and Icon */}
              <div className="flex items-center justify-between">
                <AppText type="span" className="text-sm">
                  {stat.label}
                </AppText>
                {stat.showDropdown && (
                  <ChevronDown 
                    className={`w-4 h-4 ${
                      stat.variant === "primary" || stat.variant === "secondary"
                        ? "text-white"
                        : "text-[#DAA14C]"
                    }`} 
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default StatisticsCards;

