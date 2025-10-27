import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface TabItem {
  value: string;
  label: string;
}

interface AppTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (value: string) => void;
  activeTabBgColor?: string;
  className?: string;
}

const AppTabs = ({
  tabs,
  activeTab,
  onTabChange,
  activeTabBgColor = "#9C6E61",
  className,
}: AppTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className={`${className}`}>
      <TabsList className="bg-[#FFFFFF] shadow-sm w-full flex justify-start gap-x-2 px-2 py-[12.5px] h-[52px] rounded-[24px] overflow-x-scroll no-scrollbar">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="h-auto data-[state=active]:text-white transition-colors rounded-[24px] px-3 py-2 cursor-pointer w-fit"
            data-active-bg={activeTabBgColor}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <style>{`
        button[data-state="active"][data-active-bg] {
          background-color: ${activeTabBgColor};
        }
      `}</style>
    </Tabs>
  );
};

export default AppTabs;
