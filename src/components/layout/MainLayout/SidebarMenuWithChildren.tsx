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
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import type { INavbarList } from "../layout-types";

const SidebarMenuWithChildren = ({
  sectionHeading,
  items,
  menuListContainerClassName = "",
}: {
  sectionHeading?: string;
  menuListContainerClassName?: string;
  items: INavbarList[];
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  // Auto-expand parent items and select children based on current URL
  useEffect(() => {
    const currentPath = location.pathname;
    const newExpandedItems: string[] = [];
    
    items.forEach(item => {
      if (item.children) {
        const hasActiveChild = item.children.some(child => 
          child.url === currentPath || currentPath.startsWith(child.url + '/')
        );
        if (hasActiveChild) {
          newExpandedItems.push(item.title);
        }
      }
    });
    
    setExpandedItems(newExpandedItems);
  }, [location.pathname, items]);

  const toggleExpanded = (itemTitle: string) => {
    setExpandedItems(prev => 
      prev.includes(itemTitle) 
        ? prev.filter(title => title !== itemTitle)
        : [...prev, itemTitle]
    );
  };

  const renderMenuItem = (item: INavbarList, isChild = false) => {
    const IconForNonImage = item?.icon;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.title);
    const currentPath = location.pathname;
    
    // Check if current item is selected based on URL
    const isCurrentItemSelected = item.url === currentPath || currentPath.startsWith(item.url + '/');
    
    // Check if any child is selected based on URL
    const hasSelectedChild = hasChildren && item.children?.some(child => 
      child.url === currentPath || currentPath.startsWith(child.url + '/')
    );
    
    const child = (
      <>
        {item?.isImage && item?.icon ? (
          <AppImage
            className="h-[17px] w-[17px] rounded-sm"
            src={item?.icon?.toString()}
            alt={item?.title}
          />
        ) : (
          IconForNonImage && <IconForNonImage width={17} height={17} />
        )}
        <span className={`text-black text-[14px] font-medium ${hasChildren ? "ml-2" : ""}`}>{item?.title}</span>
        {hasChildren && (
          <div className="ml-auto">
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
        )}
      </>
    );

    return (
      <div key={item.title}>
        <SidebarMenuItem>
          <SidebarMenuButton
            className={`navbar-padding-x py-[20px] ${hasChildren && isExpanded ? "rounded-t-[8px] rounded-b-none" : "rounded-[8px]"} hover:bg-navbar-link-active text-text-primary font-medium ${item?.className} ${
              isCurrentItemSelected ? "bg-navbar-link-active" : ""
            } ${hasSelectedChild ? "bg-navbar-link-active" : ""} ${isChild ? "ml-4" : ""}`}
            asChild={!hasChildren}
            onClick={hasChildren ? () => toggleExpanded(item.title) : undefined}
          >
            {hasChildren ? (
              <div className="flex items-center w-full cursor-pointer">
                {child}
              </div>
            ) : item?.onClick ? (
              <div onClick={item?.onClick}>{child}</div>
            ) : (
              <AppLink viewTransition to={item?.url}>{child}</AppLink>
            )}
          </SidebarMenuButton>
        </SidebarMenuItem>
        
        {/* Render children if expanded */}
        {hasChildren && isExpanded && (
          <div className={` ${hasSelectedChild ? "bg-navbar-link-active rounded-b-[8px] " : ""}`}>
            {item.children?.map((childItem, index) => (
              <div key={childItem.title} className="">
                <SidebarMenuItem>
                  <SidebarMenuButton
                  //@ts-expect-error ignore
                    className={`py-[12px] px-[12px] hover:bg-[#DAA14C] ${index === item?.children?.length - 1 ? "hover:rounded-b-[8px] rounded-b-[8px]" : ""} text-text-primary font-medium ${
                      (childItem?.url === currentPath || currentPath.startsWith(childItem?.url + '/')) ? "bg-[#DAA14C] text-primary" : ""
                    } ${hasSelectedChild && !(childItem?.url === currentPath || currentPath.startsWith(childItem?.url + '/')) ? "" : ""}`}
                    asChild
                  >
                    {childItem?.onClick ? (
                      <div onClick={childItem?.onClick} className="flex items-center gap-2 ">
                        {childItem?.isImage && childItem?.icon ? (
                          <AppImage
                            className="h-[14px] w-[14px] rounded-sm"
                            src={childItem?.icon?.toString()}
                            alt={childItem?.title}
                          />
                        ) : (
                          childItem?.icon && <childItem.icon width={14} height={14} />
                        )}
                        <span className="text-black text-[14px] font-medium">{childItem?.title}</span>
                      </div>
                    ) : (
                      <AppLink viewTransition to={childItem?.url} className="flex items-center gap-2 pl-10 rounded-none">
                        {childItem?.isImage && childItem?.icon ? (
                          <AppImage
                            className="h-[14px] w-[14px] rounded-sm"
                            src={childItem?.icon?.toString()}
                            alt={childItem?.title}
                          />
                        ) : (
                          childItem?.icon && <childItem.icon width={14} height={14} />
                        )}
                        <span className="text-black text-[14px] font-medium">{childItem?.title}</span>
                      </AppLink>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <SidebarGroup className="p-0">
      {sectionHeading && (
        <SidebarGroupLabel className="text-navbar-link-header flex-0 mb-[14px] uppercase navbar-padding-x">
          {sectionHeading}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent className={`${menuListContainerClassName}`}>
        <SidebarMenu >
          {items.map((item) => renderMenuItem(item))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarMenuWithChildren;
