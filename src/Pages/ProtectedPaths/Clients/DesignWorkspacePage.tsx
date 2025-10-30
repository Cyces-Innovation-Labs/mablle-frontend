import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ChevronDown, NotepadText } from "lucide-react";
import Notes from "@/Pages/ProtectedPaths/Clients/components/Notes";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import { clientEndpoints } from "@/api/endpoints/endpoints";
import makeGetRequest from "@/api/makeGetRequest";
import { useNavigate, useParams } from "react-router";
import CommonDetailHeader from "@/components/Commmon/CommonDetailHeader";
import { MAKE_CLIENT_DETAIL_PAGE_URL } from "@/navigation/make-url";
import AppText from "@/components/Commmon/AppText";
import AppPageWrapper from "@/components/Commmon/AppPageWrapper";

const sampleImg = "/project-sample.jpg";

const floorplan = { name: "3D Floorplan", files: 4, images: [sampleImg, sampleImg, sampleImg, sampleImg] };

const renderGroups = [
  { id: "kitchen", name: "KITCHEN", files: 3, images: [sampleImg, sampleImg, sampleImg] },
  { id: "bedroom", name: "BEDROOM", files: 6, images: Array.from({ length: 6 }).map(() => sampleImg) },
  { id: "dining", name: "DINING ROOM", files: 4, images: Array.from({ length: 4 }).map(() => sampleImg) },
];

const DesignWorkspacePage = () => {
    const { clientId } = useParams();
    const navigate = useNavigate();
    
    const { data: clientData } = useQuery({
        queryKey: ["client", clientId],
        queryFn: () => makeGetRequest(clientEndpoints.detail(clientId || "")),
        enabled: !!clientId,
      });
    
      const client = clientData?.data || {
        id: "MID385626",
        project: "3BHK Interior - Prestige Lakes",
        clientName: "Randy Dorwart",
        status: "FC",
        clientStatus: "Active",
        phone: "+91 98765 43210",
        email: "Randydorwart@gmail.com",
        address: "Prestige Lakes, Bangalore",
        location: "Bangalore, India",
        profileImage: undefined,
      };

      const handleBackClick = () => {
        navigate(MAKE_CLIENT_DETAIL_PAGE_URL(clientId || ""));
      };
  return (
    <AppPageWrapper>
        {/* Header Section */}
      <div className="mb-6">
        <CommonDetailHeader
          backLinkText="Back to clients"
          onBackClick={handleBackClick}
          mainTitle={`${client.id} / ${client.project}`}
          mainStatusTag={{
            label: client.status,
            color: "bg-green-100 text-green-800",
            hasDropdown: true,
          }}
          subTitle={
            <div className="flex items-center space-x-2">
              <AppText type="span" className="text-sm text-gray-600">
                {client.clientName}
              </AppText>
              <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                {client.clientStatus}
              </span>
            </div>
          }
          showExportButton={false}
        />
      </div>
        <div className="p-6 space-y-6 shadow-sm rounded-[8px]">
      {/* Section title */}
      <div className="flex items-center gap-2 mb-10">
            <div className="w-1 h-5 bg-[#054D8B] rounded" />
            <span className="text-base font-semibold">Design Workspace</span>
          </div>

      {/* Design request form card */}
      <div className="rounded-[8px] border border-[#ECECEC] bg-[#E9EBEF80]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <NotepadText className="w-5 h-5 text-[#9C6E61]" />
            <div>
            <div className="text-sm font-semibold">Design Request Form</div>
            <div className="text-xs text-muted-foreground">Submitted on 23rd sep 2025</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <Button variant="ghost" className="text-[#054D8B] h-auto px-0 inline-flex items-center gap-2">View form</Button>
            <Button variant="ghost" className="text-[#054D8B] h-auto px-0 inline-flex items-center gap-2"><Download className="w-4 h-4" /> Download</Button>
          </div>
        </div>
      </div>
      <div className="">
          <div className="flex items-center justify-between">
            <div className="w-full rounded-[8px] border border-[#27AE60] text-[#27AE60] bg-[#27AE601A] px-4 py-3 text-sm font-semibold">
              Ready to share / Approved
            </div>
            <ChevronDown className="w-5 h-5 text-[#7A7A7A] ml-3" />
          </div>
        </div>

      {/* Top actions row */}
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">Version 2</div>
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Version 2" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="v1">Version 1</SelectItem>
            <SelectItem value="v2">Version 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Floorplan container */}
      <div className="rounded-[8px] border border-[#ECECEC]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-md font-semibold text-[#9C6E61]  ">{floorplan.name} <span className="text-[#717182] font-semibold text-sm ">({floorplan.files} files)</span></div>
        </div>
        <div className="px-4 pb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4">
          {floorplan.images.map((src, idx) => (
            <div key={idx} className="relative rounded-[12px] border border-[#E4E7EC] overflow-hidden">
              {idx === 0 && (
                <Badge className="absolute left-2 top-2 bg-white text-[#0DA000] border border-[#D8DAD9] rounded-[999px] px-3 py-1 text-[10px] font-semibold">
                  SHARED WITH CLIENT
                </Badge>
              )}
              {idx === 2 && (
                <Badge className="absolute left-2 top-2 bg-white text-[#0DA000] border border-[#0DA000] rounded-[999px] px-3 py-1 text-[10px] font-semibold">
                  APPROVED
                </Badge>
              )}
              {idx === 1 && (
                <div className="absolute right-2 top-2 bg-black/80 text-white text-[10px] rounded-full px-2 py-1">• 2 comments</div>
              )}
              <img src={src} alt={`floorplan-${idx}`} className="aspect-square w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Design Renders container with Accordion */}
      <div className="rounded-[8px] border border-[#ECECEC]">
        <div className="px-4 py-3 text-md font-semibold text-[#9C6E61]">Design Renders <span className="text-[#717182] font-semibold text-sm">({renderGroups.reduce((a,c)=>a+c.files,0)} files)</span></div>
        <div className="px-6 pb-3">
          <Accordion type="multiple" className="space-y-3">
            {renderGroups.map((g) => (
              <AccordionItem key={g.id} value={g.id} className="rounded-[8px] border border-[#ECECEC] bg-[#A6B3991A]">
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="text-sm font-bold text-primary">{g.name} <span className="text-[#717182] font-semibold text-sm">({g.files} files)</span></div>
                  <AccordionTrigger className="!flex-none inline-flex items-center justify-center p-0 h-5 w-5 [&>svg]:size-4" />
                </div>
                <AccordionContent className="px-4 pb-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {g.images.map((src, idx) => (
                      <div key={idx} className="relative rounded-[12px] border border-[#E4E7EC] overflow-hidden">
                        {idx === 0 && (
                          <Badge className="absolute left-2 top-2 bg-white text-[#0DA000] border border-[#D8DAD9] rounded-[999px] px-3 py-1 text-[10px] font-semibold">
                            SHARED WITH CLIENT
                          </Badge>
                        )}
                        {idx === 2 && (
                          <Badge className="absolute left-2 top-2 bg-white text-[#0DA000] border border-[#0DA000] rounded-[999px] px-3 py-1 text-[10px] font-semibold">
                            APPROVED
                          </Badge>
                        )}
                        {idx === 1 && (
                          <div className="absolute right-2 top-2 bg-black/80 text-white text-[10px] rounded-full px-2 py-1">• 2 comments</div>
                        )}
                        <img src={src} alt={`${g.name}-${idx}`} className="aspect-square w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Notes & Comments */}
      <div className="rounded-[8px] border border-[#ECECEC] p-4">
        <div className="text-sm font-semibold mb-3">Notes & Comments</div>
        <Notes placeholder="Add project notes/ comments about this project..." />
      </div>
    </div>
    </AppPageWrapper>
  );
};

export default DesignWorkspacePage;
