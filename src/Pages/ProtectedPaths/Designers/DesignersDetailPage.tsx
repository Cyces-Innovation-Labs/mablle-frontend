import { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router";
import CommonDetailHeader from "@/components/Commmon/CommonDetailHeader";
import AppTabs from "@/components/Commmon/AppTabs";
import type { TabItem } from "@/components/Commmon/AppTabs";
import { DESIGNER_PAGE_URL } from "@/navigation/urls";
import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import { useQuery } from "@tanstack/react-query";
import { designerEndpoints } from "@/api/endpoints/endpoints";
import makeGetRequest from "@/api/makeGetRequest";

const DesignersDetailPage = () => {
  const { designerId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(true);
  
  // Get current tab from pathname
  const pathname = location.pathname;
  const currentTab = pathname.includes('/overview') ? 'overview' : 
                      pathname.includes('/projects') ? 'projects' : 
                      pathname.includes('/portfolio') ? 'portfolio' : 'overview';

  const [activeTab, setActiveTab] = useState(currentTab);

  // Update active tab when pathname changes
  useEffect(() => {
    setActiveTab(currentTab);
  }, [currentTab]);

  // Fetch designer details
  const { data: designerData } = useQuery({
    queryKey: ["designer", designerId],
    queryFn: () => makeGetRequest(designerEndpoints.detail(designerId || "")),
    enabled: !!designerId,
  });

  const designer = designerData?.data || {
    name: "Lincoln Aminoff",
    status: "Active",
    tag: "Seller",
    joinedDate: "23rd Sep, 2025",
    phone: "+91 98765 43210",
    email: "lincolnaminoff@gmail.com",
    avatar: "",
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === 'overview') {
      navigate(`/designers/${designerId}/overview`);
    } else if (value === 'projects') {
      navigate(`/designers/${designerId}/projects`);
    } else if (value === 'portfolio') {
      navigate(`/designers/${designerId}/portfolio`);
    }
  };

  const handleExport = () => {
    console.log("Export designer data");
  };

  const handleBackClick = () => {
    navigate(DESIGNER_PAGE_URL);
  };

  // Define tabs
  const tabs: TabItem[] = [
    { value: "overview", label: "Overview" },
    { value: "projects", label: "Projects" },
    { value: "portfolio", label: "Portfolio" },
  ];

  return (
    <AppPageWrapper>
      {/* Header Section */}
      <CommonDetailHeader
        backLinkText="Back to designers"
        onBackClick={handleBackClick}
        mainTitle={designer.name}
        mainStatusTag={{
          label: designer.tag,
          color: "bg-purple-100 text-purple-800",
        }}
        onExportClick={handleExport}
        exportButtonLabel="Export"
        showExportButton={true}
        showSwitch={true}
        switchLabel={isActive ? "Active" : "Inactive"}
        switchChecked={isActive}
        onSwitchChange={(checked) => setIsActive(checked)}
      />

      {/* Tabs Section */}
      <AppTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        activeTabBgColor="#DAA14C"
        className="!w-full"
        triggerClassName="w-fit max-w-[100px]"
      />

      {/* Tab Content */}
      <div className="mt-6">
        <Outlet context={designer} />
      </div>
    </AppPageWrapper>
  );
};

export default DesignersDetailPage;

