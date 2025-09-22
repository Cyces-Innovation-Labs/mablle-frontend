import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AppStateBasedTabs = ({
  tabList,
  className,
}: {
  tabList: { id: string; label: string; content: React.ReactNode }[];
  className?: string;
}) => {
  return (
    <Tabs defaultValue={tabList?.[0]?.id} className={className}>
      <TabsList>
        {tabList?.map((tab) => (
          <TabsTrigger value={tab?.id}>{tab?.label}</TabsTrigger>
        ))}
      </TabsList>
      {tabList?.map((tab) => (
        <TabsContent value={tab?.id}>
          {tab?.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default AppStateBasedTabs;
