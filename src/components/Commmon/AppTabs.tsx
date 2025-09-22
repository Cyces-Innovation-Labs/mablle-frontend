import { useLocation } from "react-router";
import AppLink from "./AppLink";
import type { ITabList } from "./types";

const AppTabs = ({
  tabList,
  className,
  viewTransition = false,
}: {
  tabList: ITabList[];
  className?: string;
  viewTransition?: boolean;
}) => {
  const location = useLocation();
  return (
    <div
      className={`flex gap-[32px] items-center border-b border-border-gray-200 px-[26px] ${className}`}
    >
      {tabList?.map((tab) => {
        const isSelected =
          location?.pathname === tab?.link ||
          (tab?.baseUrl && location?.pathname?.includes(tab?.baseUrl || ""));
        return (
          <AppLink
            viewTransition={viewTransition}
            className={`gap-[6px] text-sm flex items-center py-[8px] ${
              isSelected ? "app-tab-selected" : "app-tab-unselected"
            }`}
            to={tab?.link}
            key={tab?.label}
          >
            {tab?.icon}
            {tab?.label}
          </AppLink>
        );
      })}
    </div>
  );
};

export default AppTabs;
