import { EllipsisVertical, LogOut, Logs } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import NavbarList from "./NavbarList";
import AppAvatar from "@/components/Commmon/AppAvatar";
import { WarningModal } from "@/components/Commmon/AppModal";
import { useState } from "react";
import { clearTokenAndUserData } from "@/utils/tokenAndUserData";
import { LOGIN_PAGE_URL } from "@/navigation/urls";

const supportLinks = {
  heading: "Support",
  list: ({ handleLogout }: { handleLogout: () => void }) => [
    {
      title: "Changelog",
      url: "#",
      icon: Logs,
    },
    {
      title: "Logout",
      url: "#",
      icon: LogOut,
      className: "text-logout-link",
      onClick: handleLogout,
    },
  ],
};

export function NavProfileComp({
  profile,
}: {
  profile: {
    email: string;
    first_name: string;
    last_name: string;
    user_type: string;
    profile_image?: string;
    uuid: string;
  };
}) {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { isMobile } = useSidebar();
  const _supportLinksList = supportLinks?.list({
    handleLogout: ()=>setIsLogoutModalOpen(true)
  });

  const handleLogout = () => {
    clearTokenAndUserData()
    window.location.href = LOGIN_PAGE_URL;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-10 items-center justify-center rounded-[200px] border  overflow-hidden">
                <AppAvatar
                  src={profile?.profile_image || ""}
                  fallback={profile?.first_name?.[0]}
                />
              </div>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {profile?.first_name}
                </span>
                <span className="truncate text-xs">{profile?.email}</span>
              </div>

              <EllipsisVertical className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <NavbarList items={_supportLinksList} />
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
      <WarningModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        title="Logout"
        description="Are you sure you want to logout?"
        onConfirm={handleLogout}
        isLoading={false}
      />
    </SidebarMenu>
  );
}
