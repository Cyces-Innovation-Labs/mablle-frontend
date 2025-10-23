import { Search, Bell, LogOut, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AppAvatar from "@/components/Commmon/AppAvatar";
import { WarningModal } from "@/components/Commmon/AppModal";
import useDisclosure from "@/hooks/useDisclosure";
import { clearTokenAndUserData } from "@/utils/tokenAndUserData";
import { LOGIN_PAGE_URL } from "@/navigation/urls";
import useAppStore from "@/store/authStore";

const AppNavbar = () => {
  const { userData } = useAppStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    clearTokenAndUserData();
    window.location.href = LOGIN_PAGE_URL;
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-[20px] pt-[13px] pb-[12px]">
        <div className="flex items-center justify-between">

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search"
                className="pl-10 pr-4 py-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DAA14C] focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side - Notifications and Profile */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <AppAvatar
                    src=""
                    fallback={userData?.first_name?.[0] || "U"}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{userData?.first_name} {userData?.last_name}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {userData?.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="cursor-pointer text-red-600 focus:text-red-600"
                  onClick={onOpen}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      <WarningModal
        isOpen={isOpen}
        onClose={onClose}
        title="Logout"
        description="Are you sure you want to logout? You will need to sign in again to access your account."
        confirmText="Logout"
        cancelText="Cancel"
        onConfirm={handleLogout}
        isLoading={false}
        size="sm"
      />
    </>
  );
};

export default AppNavbar;
