import AppText from "@/components/Commmon/AppText";

interface WorksRequiredProps {
  livingRoom: string;
  bedrooms: string;
}

const WorksRequired = ({
  livingRoom,
  bedrooms,
}: WorksRequiredProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-[#8B6F64] text-center px-4 py-3 rounded-t-lg">
        <AppText type="span" className="text-white font-bold text-base">
          Works Required
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
            {livingRoom}
          </AppText>
          <AppText type="span" className="text-sm text-gray-900">
            {bedrooms}
          </AppText>
        </div>
      </div>
    </div>
  );
};

export default WorksRequired;
