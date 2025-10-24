import AppText from "@/components/Commmon/AppText";
import { useMemo, memo } from "react";

interface UserStats {
  clientsOnboarded: number;
  designersOnboarded: number;
}

interface UsersContainerProps {
  data?: UserStats;
}

const UsersContainer = memo(({ data }: UsersContainerProps) => {
  const defaultData: UserStats = useMemo(() => ({
    clientsOnboarded: 50,
    designersOnboarded: 8,
  }), []);

  const userData = data || defaultData;

  return (
    <div>
        <AppText type="h3" className="text-sm font-semibold text-primary mb-4">
        Users
      </AppText>
    <div className="bg-white rounded-lg shadow-sm p-6">   
      <div className="space-y-3">
        {/* Clients Card */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 border-l border-l-[#DAA14C]">
          <div className="flex items-center gap-2">
            <AppText type="span" className="text-2xl font-bold text-primary">
              {userData.clientsOnboarded}
            </AppText>
            <AppText type="span" className="text-sm text-primary">
              Clients Onboarded
            </AppText>
          </div>
        </div>

        {/* Designers Card */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 border-l border-l-[#DAA14C]">
          <div className="flex items-center gap-2">
            <AppText type="span" className="text-2xl font-bold text-primary">
              {userData.designersOnboarded}
            </AppText>
            <AppText type="span" className="text-sm text-primary">
              Designers Onboarded
            </AppText>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
});

export default UsersContainer;
