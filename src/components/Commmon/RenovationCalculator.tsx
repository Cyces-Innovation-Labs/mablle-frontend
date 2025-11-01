import AppText from "@/components/Commmon/AppText";
import WorksRequired from "./WorksRequired";
import SkeletonRenovationCalculator from "@/components/loaders/skeletonLoaders/SkeletonRenovationCalculator";

interface PropertyDetail {
  type: string;
  condition: string;
  size: string;
  value: string;
}

interface RoomDetail {
  livingRoom: string;
  bedrooms: string;
}

interface RenovationCalculatorProps {
  estimatedBudget: string;
  propertyDetails: PropertyDetail;
  roomsRenovating: RoomDetail;
  worklivingRoom: string;
  workbedrooms: string;
  isLoading?: boolean;
}

const RenovationCalculator = ({
  estimatedBudget,
  propertyDetails,
  roomsRenovating, 
  worklivingRoom,
  workbedrooms,
  isLoading = false,
}: RenovationCalculatorProps) => {
  if (isLoading) {
    return <SkeletonRenovationCalculator />;
  }

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col space-y-6 space-x-2 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center space-x-2">
        <div className="w-1 h-6 bg-[#054D8B] rounded"></div>
        <AppText type="h3" className="text-lg font-semibold text-gray-900">
          Renovation Calculator
        </AppText>
        </div>
        
      {/* Estimated Budget */}
      <div className="bg-green-100 border border-green-200 rounded-lg p-4">
        <AppText type="p" className="text-green-800 font-semibold">
          {estimatedBudget}
        </AppText>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Property Details Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-[#8B6F64] text-center px-4 py-3 rounded-t-lg">
          <AppText type="span" className="text-white font-bold text-base">
            Property
          </AppText>
        </div>
        <div className="bg-[#F5E8D7] px-4 py-3">
          <div className="grid grid-cols-4 gap-4">
            <AppText type="span" className="text-sm font-bold text-gray-900">
              Type
            </AppText>
            <AppText type="span" className="text-sm font-bold text-gray-900 whitespace-nowrap">
              Property condition
            </AppText>
            <AppText type="span" className="text-sm font-bold text-gray-900">
              Property size
            </AppText>
            <AppText type="span" className="text-sm font-bold text-gray-900">
              Value
            </AppText>
          </div>
        </div>
        <div className="bg-white px-4 py-3 rounded-b-lg">
          <div className="grid grid-cols-4 gap-4">
            <AppText type="span" className="text-sm text-gray-900">
              {propertyDetails.type}
            </AppText>
            <AppText type="span" className="text-sm text-gray-900">
              {propertyDetails.condition}
            </AppText>
            <AppText type="span" className="text-sm text-gray-900">
              {propertyDetails.size}
            </AppText>
            <AppText type="span" className="text-sm text-gray-900">
              {propertyDetails.value}
            </AppText>
          </div>
        </div>
      </div>

      {/* Rooms Renovating Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-[#8B6F64] text-center px-4 py-3 rounded-t-lg">
          <AppText type="span" className="text-white font-bold text-base">
            Rooms Renovating
          </AppText>
        </div>
        <div className="bg-[#F5E8D7] px-4 py-3">
          <div className="grid grid-cols-2 gap-4">
            <AppText type="span" className="text-sm font-bold text-gray-900">
              Living Room
            </AppText>
            <AppText type="span" className="text-sm font-bold text-gray-900">
              Bedrooms
            </AppText>
          </div>
        </div>
        <div className="bg-white px-4 py-3 rounded-b-lg">
          <div className="grid grid-cols-2 gap-4">
            <AppText type="span" className="text-sm text-gray-900">
              {roomsRenovating.livingRoom}
            </AppText>
            <AppText type="span" className="text-sm text-gray-900">
              {roomsRenovating.bedrooms}
            </AppText>
          </div>
        </div>
      </div>
      <WorksRequired livingRoom={worklivingRoom} bedrooms={workbedrooms} />
      </div>
      </div>
      
    </div>
  );
};

export default RenovationCalculator;
