import type { ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  // SidebarTrigger,
} from "../../ui/sidebar";
import ChatbotListInNavbar from "./ChatbotListInNavbar";
// import NavbarList from "./NavbarList";
// import { BookOpenText, LifeBuoy, Settings } from "lucide-react";
// import { TeamSwitcher } from "./TeamSwitch";
import { NavProfileComp } from "./NavProfileComp";
import useAppStore from "@/store/authStore";
import AppImage from "@/components/Commmon/AppImage";
import { AppLogo } from "@/assets";

const AppSidebar = ({ children }: { children: ReactNode }) => {
  const { userData } = useAppStore();
  // const footerMetaNavList = [
  //   {
  //     title: "Docs",
  //     url: "#",
  //     icon: BookOpenText,
  //   },
  //   {
  //     title: "Help",
  //     url: "#",
  //     icon: LifeBuoy,
  //   },
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: Settings,
  //   },
  // ];

  // const teams = {
  //   identity: userData?.first_name || "",
  //   logo: "",
  //   plan: "",
  //   uuid: "892834329",
  //   id: 892
  // }

  const user = {
    email: userData?.email || "email@gmail.com",
    first_name: userData?.first_name || "First name",
    last_name: userData?.last_name || "Last name",
    user_type: "user",
    profile_image: "",
    uuid: userData?.id || "1231"
  }

  return (
    <SidebarProvider className="">
      <Sidebar>
        <SidebarHeader className="p-0 mb-[35px] mt-[10px]">
          {/* <TeamSwitcher teams={[teams]} /> */}
          <AppImage className="w-[70%] mx-auto h-full" src={AppLogo} />
        </SidebarHeader>
        <SidebarContent className="justify-between">
          <ChatbotListInNavbar />
        </SidebarContent>
        <SidebarFooter className="mt-[16px]">
          {/* <NavbarList
            menuListContainerClassName="max-h-[20dvh] overflow-y-auto"
            sectionHeading="Support"
            items={footerMetaNavList}
          /> */}
          {/* @ts-expect-error ignore */}
          <NavProfileComp profile={user} />
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1">
        {children}
      </main>
    </SidebarProvider>
  );
};

export default AppSidebar;
