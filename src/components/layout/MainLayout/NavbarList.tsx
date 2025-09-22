import AppImage from "@/components/Commmon/AppImage";
import AppLink from "@/components/Commmon/AppLink";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Bot, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { INavbarList } from "../layout-types";

const NavbarList = ({
  sectionHeading,
  items,
  menuListContainerClassName = "",
  initialCount,
  isLoading,
  skeletonLoader,
  triggerElementForInfiniteScroll
}: {
  sectionHeading?: string;
  menuListContainerClassName?: string;
  items: INavbarList[];
  initialCount?: number;
  isLoading?: boolean;
  skeletonLoader?: React.ReactNode;
  triggerElementForInfiniteScroll?: React.ReactNode;
}) => {
  const [showCount, setShowCount] = useState(initialCount);
  const dataToShow = items?.slice(0, showCount);

  const handleShowMore = () => {
    if (showCount === items?.length) setShowCount(initialCount);
    else setShowCount(items?.length);
  };

  return (
    <SidebarGroup className="p-0">
      {sectionHeading && (
        <SidebarGroupLabel className="text-navbar-link-header flex-0 mb-[14px] uppercase navbar-padding-x">
          {sectionHeading}
        </SidebarGroupLabel>
      )}
      {isLoading ? skeletonLoader : (
      <SidebarGroupContent className={`${menuListContainerClassName}`}>
        <SidebarMenu>
          {dataToShow?.map((item) => {
            const IconForNonImage = item?.icon || Bot;
            const child = (
              <>
                {item?.isImage && item?.icon ? (
                  <AppImage
                    className="h-[17px] w-[17px] rounded-sm"
                    src={item?.icon?.toString()}
                    alt={item?.title}
                  />
                ) : (
                  <IconForNonImage />
                )}
                <span>{item?.title}</span>
              </>
            );

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  className={`navbar-padding-x py-[20px] rounded-none hover:bg-navbar-link-active text-text-primary font-medium ${item?.className} ${item?.isSelected ? "bg-navbar-link-active" : ""}`}
                  asChild
                >
                  {item?.onClick ? (
                    <div onClick={item?.onClick}>{child}</div>
                  ) : (
                    <AppLink viewTransition to={item?.url}>{child}</AppLink>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
          {triggerElementForInfiniteScroll}
        </SidebarMenu>
        {initialCount && items?.length > initialCount && (
          <button
            className="navbar-padding-x text-blue-tag flex items-center gap-1 mt-[6px] cursor-pointer text-[12px]"
            onClick={handleShowMore}
          >
            {showCount === items?.length ? (
              <>
                <ChevronUp size={20} /> Show Less
              </>
            ) : (
              <>
                <ChevronDown size={20} />
                Show More
              </>
            )}
          </button>
        )}
      </SidebarGroupContent>
      )}
    </SidebarGroup>
  );
};

export default NavbarList;
