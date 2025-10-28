import { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router";
import CommonDetailHeader from "@/components/Commmon/CommonDetailHeader";
import AppTabs from "@/components/Commmon/AppTabs";
import type { TabItem } from "@/components/Commmon/AppTabs";
import AppText from "@/components/Commmon/AppText";
import { CLIENT_PAGE_URL } from "@/navigation/urls";
import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import { useQuery } from "@tanstack/react-query";
import { clientEndpoints } from "@/api/endpoints/endpoints";
import makeGetRequest from "@/api/makeGetRequest";

const ClientDetailPage = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get current tab from pathname
  const pathname = location.pathname;
  const currentTab = pathname.includes('/project-timeline') ? 'project-timeline' : 
                      pathname.includes('/execution-images') ? 'execution-images' : 
                      pathname.includes('/execution-timeline') ? 'execution-timeline' :
                      pathname.includes('/design-starts-with-you') ? 'design-starts-with-you' :
                      pathname.includes('/design-renders') ? 'design-renders' :
                      pathname.includes('/quotations') ? 'quotations' :
                      pathname.includes('/contract') ? 'contract' :
                      pathname.includes('/payments') ? 'payments' :
                      'personal-details';

  const [activeTab, setActiveTab] = useState(currentTab);

  // Update active tab when pathname changes
  useEffect(() => {
    setActiveTab(currentTab);
  }, [currentTab]);

  // Fetch client details
  const { data: clientData } = useQuery({
    queryKey: ["client", clientId],
    queryFn: () => makeGetRequest(clientEndpoints.detail(clientId || "")),
    enabled: !!clientId,
  });

  const client = clientData?.data || {
    id: "MID385626",
    project: "3BHK Interior - Prestige Lakes",
    clientName: "Randy Dorwart",
    status: "FC",
    clientStatus: "Active",
    phone: "+91 98765 43210",
    email: "Randydorwart@gmail.com",
    address: "Prestige Lakes, Bangalore",
    location: "Bangalore, India",
    profileImage: undefined,
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === 'personal-details') {
      navigate(`/clients/${clientId}`);
    } else {
      navigate(`/clients/${clientId}/${value}`);
    }
  };

  const handleExport = () => {
    console.log("Export client data");
  };

  const handleBackClick = () => {
    navigate(CLIENT_PAGE_URL);
  };

  // Define tabs
  const tabs: TabItem[] = [
    { value: "personal-details", label: "Personal Details" },
    { value: "project-timeline", label: "Project Timeline" },
    { value: "execution-images", label: "Execution Images" },
    { value: "execution-timeline", label: "Execution Timeline" },
    { value: "design-starts-with-you", label: "Design Starts with You Form" },
    { value: "design-renders", label: "Design Renders" },
    { value: "quotations", label: "Quotations" },
    { value: "contract", label: "Contract" },
    { value: "payments", label: "Payments" },
  ];

  return (
    <AppPageWrapper>
      {/* Header Section */}
      <div className="mb-6">
        <CommonDetailHeader
          backLinkText="Back to clients"
          onBackClick={handleBackClick}
          mainTitle={`${client.id} / ${client.project}`}
          mainStatusTag={{
            label: client.status,
            color: "bg-green-100 text-green-800",
            hasDropdown: true,
          }}
          subTitle={
            <div className="flex items-center space-x-2">
              <AppText type="span" className="text-sm text-gray-600">
                {client.clientName}
              </AppText>
              <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                {client.clientStatus}
              </span>
            </div>
          }
          onExportClick={handleExport}
          exportButtonLabel="Design Workspace"
          showExportButton={true}
        />
      </div>

      {/* Tabs Section */}
      <AppTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        activeTabBgColor="#23211D"
        className="w-full max-w-[80vw]"
        triggerClassName="w-fit"
      />

      {/* Tab Content */}
      <div className="mt-6">
        <Outlet context={client} />
      </div>
    </AppPageWrapper>
  );
};

export default ClientDetailPage;