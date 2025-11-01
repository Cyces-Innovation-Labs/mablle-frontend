import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import SkeletonProjectTimeline from "@/components/loaders/skeletonLoaders/SkeletonProjectTimeline";
import GreenTickCircle from "@/icons/GreenTickCircle";
import SessionCircle from "@/icons/SessionCircle";
import BrownTickCircle from "@/icons/BrownTickCircle";
import ProjectHandover from "@/icons/ProjectHandover";
import ImageCropped from "@/icons/ImageCropped";
import QuotationIcon from "@/icons/QuotationIcon";
import ContractIcon from "@/icons/ContractIcon";
import PaymentRecieved from "@/icons/PaymentRecieved";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


type TimelineAction = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export type TimelineStatus = "completed" | "current" | "pending";

export type TimelineStep = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  status: TimelineStatus;
  date?: string;
  action?: TimelineAction;
};

interface ProjectTimelineProps {
  estCompletion?: string;
  steps?: TimelineStep[];
  isLoading?: boolean;
}

const LeftMarker = ({ status, icon }: { status: TimelineStatus; icon?: React.ReactNode }) => {
  if (status === "completed") return <GreenTickCircle />;
  const baseColor = status === "current" ? "text-green-600" : "text-muted-foreground";
  const opacity = status === "pending" ? "opacity-40" : "";
  if (icon) return <span className={`${baseColor} ${opacity}`}>{icon}</span>;
  return <Circle className={`w-4 h-4 ${baseColor} ${opacity}`} />;
};

const ProjectTimeline = ({ estCompletion = "Dec 30, 2025", steps = [], isLoading = false }: ProjectTimelineProps) => {
  if (isLoading) {
    return <SkeletonProjectTimeline />;
  }

  const effectiveSteps: TimelineStep[] = steps.length ? steps : [
    { id: "init", title: "Initial Design Consultation Session", status: "completed",icon: <SessionCircle />, date: "15th Aug, 2025" },
    { id: "design", title: "3D Design Approved", status: "completed", date: "25th Aug, 2025", icon: <ImageCropped />, action: { label: "View Design" } },
    { id: "quote", title: "Quotation Approved", status: "completed", date: "30th Aug, 2025", icon: <QuotationIcon />, action: { label: "View Quote" } },
    { id: "contract", title: "Contract Signed", status: "completed", date: "1st Sep, 2025", icon: <ContractIcon />, action: { label: "View Contract" } },
    { id: "confirmPay", title: "Confirmation Payment Received", status: "current", date: "6th Sep, 2025", icon: <PaymentRecieved />, action: { label: "Download Invoice" } },
    { id: "booking", title: "Booking Confirmed", status: "pending", icon: <BrownTickCircle />, date: "10th Sep, 2025" },
    { id: "secondPay", title: "Second–Part Payment Received", status: "pending", date: "12th Sep, 2025", icon: <PaymentRecieved />, action: { label: "Download Invoice" } },
    { id: "confirmed", title: "Project Confirmed", status: "pending", icon: <BrownTickCircle />, date: "15th Sep, 2025" },
    { id: "finalPay", title: "Final Payment Received", status: "pending", date: "20th Sep, 2025", icon: <PaymentRecieved />, action: { label: "Download Invoice" } },
    { id: "handover", title: "Project Handover", status: "pending", icon: <ProjectHandover /> },
  ];

  return (
    <div className="space-y-[27px] p-6 bg-white shadow-sm rounded-[8px]">
          <Accordion type="single" collapsible defaultValue="open">
            <AccordionItem value="open" className="border-none">
            <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#054D8B] rounded" />
            <span className="text-base font-semibold">Project timeline</span>
          </div>
              <AccordionTrigger className="text-[#054D8B] flex items-center gap-2 p-0 h-auto cursor-pointer">Close full timeline</AccordionTrigger>
              </div>
              <AccordionContent className="pt-[27px]">
                <Badge variant="secondary" className="mb-[27px] bg-gradient-to-r from-[#9C6E61] to-[#C6982B] text-[#FFFFFF] w-fit">
                  Est. Completion <span className="ml-1 font-bold">{estCompletion}</span>
                </Badge>

                <div className="mt-2">
                  {effectiveSteps.map((step, idx) => {
                    const isLast = idx === effectiveSteps.length - 1;
                    const isCompleted = step.status === "completed";
                    const isCurrent = step.status === "current";

                    const connectorClass = isCompleted || isCurrent
                      ? "border-[#9C6E61] border-solid"
                      : "border-muted-foreground/50 border-dashed";

                    return (
                      <div key={step.id} className="grid grid-cols-[28px_1fr_auto] gap-3 items-start">
                        <div className="flex flex-col items-center">
                          <LeftMarker status={step.status} icon={step.icon} />
                          {!isLast && (
                            <div className={`h-[50px] my-[10px] border-l ${connectorClass}`} />
                          )}
                        </div>

                        <div className="py-0">
                          <div className="flex items-center gap-2">
                            <span className={`${isCompleted || isCurrent ? "text-primary" : "text-muted-foreground"} font-bold text-md`}>
                              {step.title}
                            </span>
                            {isCompleted && step.icon && <span className="text-gray-400">{step.icon}</span>}
                          </div>
                          {step.action && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-1 h-4 px-0 text-xs text-[#5978A9] inline-flex items-center gap-1"
                              onClick={step.action.onClick as (() => void) | undefined}
                            >
                              {step.action.label}
                            </Button>
                          )}
                        </div>

                        <div className="py-0">
                          {isCurrent ? (
                            <span className="text-sm font-medium text-primary whitespace-nowrap inline-flex items-center gap-1">
                              Current Status <div className="border border-[#0DA000] rounded-full p-1">
                              <Circle className="w-2 h-2 text-[#0DA000] fill-current" />
                              </div>
                            </span>
                          ) : step.date ? (
                            <span className="text-sm font-medium text-primary whitespace-nowrap">{step.date}</span>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
    </div>
  );
};

export default ProjectTimeline;
