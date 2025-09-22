import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export type BreadcrumbItemType = {
  label: string;
  link: string;
};

const AppBreadcrumbs = ({ items }: { items: BreadcrumbItemType[] }) => {
  if (!items || items.length === 0) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <div key={item.label} className="flex items-center">
            <BreadcrumbItem>
              <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
            {index !== items.length - 1 && (
              <BreadcrumbSeparator>
                <Slash className="w-3 h-3" />
              </BreadcrumbSeparator>
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumbs;
