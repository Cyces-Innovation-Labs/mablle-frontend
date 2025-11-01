import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GreenTickCircle from "@/icons/GreenTickCircle";
import SkeletonExecutionTimeline from "@/components/loaders/skeletonLoaders/SkeletonExecutionTimeline";

interface ExecStep {
  id: string;
  title: string;
  date: string;
}

const steps: ExecStep[] = [
  { id: "s1", title: "Site protection", date: "15th Aug, 2025" },
  { id: "s2", title: "Hacking / Clear debris", date: "26th Aug, 2025" },
  { id: "s3", title: "Site Marking", date: "30th Aug, 2025" },
  { id: "s4", title: "Confirm materials", date: "1st Sep, 2025" },
  { id: "s5", title: "Masonry", date: "6th Sep, 2025" },
  { id: "s6", title: "Partition / Ceiling", date: "10th Sep, 2025" },
  { id: "s7", title: "Carpentry", date: "12th Sep, 2025" },
  { id: "s8", title: "Aircon", date: "15th Sep, 2025" },
  { id: "s9", title: "Wood floor", date: "20th Sep, 2025" },
  { id: "s10", title: "Polish floor (Staircase)", date: "20th Sep, 2025" },
  { id: "s11", title: "Table top", date: "20th Sep, 2025" },
  { id: "s12", title: "Plumbing", date: "20th Sep, 2025" },
  { id: "s13", title: "Electrical", date: "20th Sep, 2025" },
  { id: "s14", title: "Plumbing", date: "20th Sep, 2025" },
  { id: "s15", title: "Shutter / Awning", date: "20th Sep, 2025" },
  { id: "s16", title: "Painting", date: "20th Sep, 2025" },
  { id: "s17", title: "Wallpaper / Special paint", date: "20th Sep, 2025" },
  { id: "s18", title: "Glass", date: "20th Sep, 2025" },
  { id: "s19", title: "Door", date: "20th Sep, 2025" },
  { id: "s20", title: "Cleaning", date: "20th Sep, 2025" },
  { id: "s21", title: "Furniture / Curtain / Blind", date: "20th Sep, 2025" },
  { id: "s22", title: "Touch up", date: "20th Sep, 2025" },
  { id: "s23", title: "Cleaning", date: "20th Sep, 2025" },
  { id: "s24", title: "Cleaning", date: "20th Sep, 2025" },
  { id: "s25", title: "Handover", date: "20th Sep, 2025" },
];

const progress = 90;

interface ExecutionTimelineProps {
  isLoading?: boolean;
}

const ExecutionTimeline = ({ isLoading = false }: ExecutionTimelineProps) => {
  if (isLoading) {
    return <SkeletonExecutionTimeline />;
  }

  return (
    <div className="space-y-[27px] bg-white shadow-sm rounded-[8px] p-6">
      <Accordion type="single" collapsible defaultValue="open">
        <AccordionItem value="open" className="border-none">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-[#054D8B] rounded" />
              <span className="text-base font-semibold">Execution Timeline</span>
            </div>
            <AccordionTrigger className="!flex-none !w-auto !py-0 !h-auto text-[#054D8B] underline hover:no-underline [&>svg]:hidden">
              Close full timeline
            </AccordionTrigger>
          </div>

          {/* Content */}
          <AccordionContent className="pt-10">
            {/* Overall Progress */}
            <div>
              <div className="text-sm font-normal text-primary mb-1">Overall Progress</div>
              <div className="relative">
                <Progress value={progress} className="h-2 bg-[#E9E9E9]" color="#DAA14C" />
                <span className="absolute right-0 -top-5 text-sm font-bold text-primary">{progress}%</span>
              </div>
            </div>

            {/* Steps */}
            <div className="mt-6">
              {steps.map((step, idx) => {
                const isLast = idx === steps.length - 1;
                return (
                  <div key={step.id} className="grid grid-cols-[18px_1fr_auto] items-start gap-3">
                    {/* Marker + connector line */}
                    <div className="flex flex-col items-center">
                      <GreenTickCircle />
                      {!isLast && <div className="h-[42px] my-[8px] border-l border-[#9C6E61]" />}
                    </div>

                    {/* Title */}
                    <div>
                      <span className="text-sm text-[#23211D]">{step.title}</span>
                    </div>

                    {/* Date */}
                    <div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{step.date}</span>
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

export default ExecutionTimeline;

