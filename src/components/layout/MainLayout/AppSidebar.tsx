import type { ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  // SidebarTrigger,
} from "../../ui/sidebar";
import SidebarMenuWithChildren from "./SidebarMenuWithChildren";
import { 
  LayoutDashboard, 
  UsersRound, 
  Palette, 
  FileText, 
  Smartphone, 
  Headphones, 
  ClipboardList, 
  BarChart3, 
  Settings,
  CornerDownRight
} from "lucide-react";
import AppImage from "@/components/Commmon/AppImage";
import { AppLogo } from "@/assets";
import type { INavbarList } from "../layout-types";


const AppSidebar = ({ children }: { children: ReactNode }) => {

  const sidebarMenuItems: INavbarList[] = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Clients",
      url: "#",
      icon: UsersRound,
      isParent: true,
      children: [
        {
          title: "Clients",
          url: "/clients",
          icon: CornerDownRight,
        },
        {
          title: "Leads",
          url: "/leads",
          icon: CornerDownRight,
        },
      ],
    },
    {
      title: "Designers",
      url: "/designers",
      icon: Palette,
    },
    {
      title: "Project Notes",
      url: "/project-notes",
      icon: FileText,
    },
    {
      title: "Manage Client App",
      url: "/manage-client-app",
      icon: Smartphone,
    },
    {
      title: "Support Tickets",
      url: "/support-tickets",
      icon: Headphones,
    },
    {
      title: "Design Request Form",
      url: "/design-request-form",
      icon: ClipboardList,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: BarChart3,
    },
   
  ];

  const sidebarFooterItems: INavbarList[] = [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ];


  return (
    <SidebarProvider className="">
      <Sidebar className="max-w-[246px]">
        <SidebarHeader className="p-0 mb-[35px] mt-[24px]">
          {/* <TeamSwitcher teams={[teams]} /> */}
          <AppImage className="w-[70%] mx-auto h-full" src={AppLogo} />
        </SidebarHeader>
        <SidebarContent className="justify-between mx-[16px] no-scrollbar max-w-[214px]">
          <SidebarMenuWithChildren items={sidebarMenuItems} />
        </SidebarContent>
        <SidebarFooter className="mt-[16px] max-w-[214px] mx-[16px] mb-[16px] no-scrollbar">
        <SidebarMenuWithChildren items={sidebarFooterItems} />
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1">
        {children}
      </main>
    </SidebarProvider>
  );
};

export default AppSidebar;
