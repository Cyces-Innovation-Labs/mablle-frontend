import { Link, useParams } from "react-router-dom";
import AppSlider, { type SliderItem } from "@/components/Commmon/AppSlider";
import Notes from "@/Pages/ProtectedPaths/Clients/components/Notes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MAKE_CLIENT_DETAIL_DESIGN_RENDERS_URL, MAKE_CLIENT_DETAIL_PAGE_URL } from "@/navigation/make-url";
import WhiteTickCircle from "@/icons/WhiteTickCircle";

const toLabel = (s?: string) => (s ? s.replace(/-/g, " ").toUpperCase() : "");

const DesignRenderDetailPage = () => {
  const { clientId, category } = useParams();

  const items: SliderItem[] = Array.from({ length: 7 }).map((_, i) => ({ id: i + 1, src: "/project-sample.jpg" }));

  // dynamic status badge
  type RenderStatus = "finalized" | "clientApproved" | "shareWithClient";
  let status: RenderStatus = "clientApproved";

  const StatusBadge = () => {
    switch (status as string) {
      case "clientApproved":
        return (
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#D8DAD9] text-[#0DA000] rounded-[16px] px-[34.5px] py-[14px] text-sm font-bold">
            Client Approved
          </div>
        );
      case "shareWithClient":
        return (
          <div className="inline-flex items-center gap-2 border border-[#D8DAD9] text-[#0DA000] bg-white rounded-[16px] px-[34.5px] py-[14px] text-sm font-bold">
            Share With Client
          </div>
        );
      case "finalized":
      default:
        return (
          <div className="inline-flex items-center gap-2 bg-[#0DA000] text-[#FFFFFF] rounded-[16px] px-[34.5px] py-[14px] text-xs font-bold">
            FINALIZED <WhiteTickCircle />
          </div>
        );
    }
  };

  return (
    <div className="p-6 space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={MAKE_CLIENT_DETAIL_PAGE_URL(clientId || "")} className="capitalize">client</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={MAKE_CLIENT_DETAIL_DESIGN_RENDERS_URL(clientId || "")} className="capitalize">design renders</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{toLabel(category) || "DETAIL"}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-bold">{toLabel(category) || "DESIGN"}</div>
          <div className="text-xs text-muted-foreground mt-1">Uploaded on 23rd sep 2025</div>
        </div>
        <StatusBadge />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <AppSlider items={items} loop imageClassName="rounded-none" />
        </div>
        <div className="lg:col-span-5 border border-[#D8DAD9] rounded-[16px] p-4 h-fit">
          <Notes placeholder="Add Project Notes/ comments about this project..." />
        </div>
      </div>
    </div>
  );
};

export default DesignRenderDetailPage;
