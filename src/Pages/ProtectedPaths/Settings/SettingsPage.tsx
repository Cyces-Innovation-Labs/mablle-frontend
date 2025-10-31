import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import AppTabs from "@/components/Commmon/AppTabs";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { useEffect, useState } from "react";



const SettingsPage = () => {
  const location = useLocation();
  
  // Get current tab from pathname
  const pathname = location.pathname;
  const currentTab = pathname.includes('/settings/roles') ? 'roles' : 
                     pathname.includes('/settings/users') ? 'users' : 
                     pathname.includes('/settings/notifications') ? 'notifications' :
                     pathname.includes('/settings/logs') ? 'logs' :
                     'profile';
  const [activeTab, setActiveTab] = useState(currentTab);
  const navigate = useNavigate();
  useEffect(() => {
    setActiveTab(currentTab);
  }, [currentTab]);


  const tabs = [
    { value: "profile", label: "Profile" },
    { value: "roles", label: "Roles & Permissions" },
    { value: "users", label: "Users" },
    { value: "notifications", label: "Notifications" },
    { value: "logs", label: "System Logs" },
  ];

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        hideBackButton
        title="Settings"
        description="Manage your account settings and application preferences."
        asideComp={
          ["roles", "users"].includes(activeTab)
            ? (
              <div className="flex items-center gap-3">
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
                <Button
                  className="gap-2 bg-[#9C6E61] hover:bg-[#8b5e50]"
                  onClick={() => {
                    if (activeTab === "users") navigate("/settings/users/create");
                    if (activeTab === "roles") navigate("/settings/roles/create");
                  }}
                >
                  <Plus className="w-4 h-4" />
                  {activeTab === "roles" ? "Create Role" : "Create User"}
                </Button>
              </div>
            )
            : undefined
        }
      />

      <AppTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(value) => {
          setActiveTab(value);
          if (value === 'profile') navigate('/settings');
          else navigate(`/settings/${value}`);
        }} activeTabBgColor="#DAA14C"
        className="mt-4"
      />
      <div className="mt-4">
        <Outlet />
      </div>
    </AppPageWrapper>
  );
};

export default SettingsPage;
