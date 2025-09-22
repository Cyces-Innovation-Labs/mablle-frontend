"use client";
// import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  // DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "@/components/ui/sidebar";
import AppImage from "@/components/Commmon/AppImage";

export function TeamSwitcher({
  teams,
  wrapperClassName = "",
}: {
  teams: {
    identity: string;
    logo?: string;
    plan?: string;
    uuid: string
    id: number
  }[];
  wrapperClassName?: string;
}) {
  // const { isMobile } = useSidebar();

  return (
    <>
      <SidebarMenu className={` ${wrapperClassName}`}>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="navbar-padding-x" asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground gap-[12px]"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-background border text-sidebar-primary-foreground">
                  <AppImage
                    src={"https://cyces.co/favicon.ico"}
                    className="size-6 object-contain"
                  />
                </div>
                <div className="text-text-primary opacity-[20%] text-[24px]">
                  /
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {teams[0].identity}
                  </span>
                </div>
                {/* <ChevronsUpDown className="ml-auto" /> */}
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            {/* <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground text-navbar-link-header">
                Teams
              </DropdownMenuLabel>
              {teams.map((team, index) => (
                <DropdownMenuItem
                  key={team.identity}
                  // onClick={() => navigate(`/${team.uuid}/dashboard`)}
                  className="gap-2 p-2 "
                >
                  <div className="flex size-6 items-center justify-center rounded-sm border ">
                    <AppImage
                      src={ "/company-icon.svg"}
                      className="size-4 shrink-0 object-contain "
                    />
                  </div>
                  {team.identity}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 p-2" >
                <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">Add team</div>
              </DropdownMenuItem>
            </DropdownMenuContent> */}
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
