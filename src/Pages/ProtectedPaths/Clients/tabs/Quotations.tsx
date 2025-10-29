import AppText from "@/components/Commmon/AppText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Share2, Download } from "lucide-react";
import GreenTickCircle from "@/icons/GreenTickCircle";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkScopeRow {
  id: string;
  scope: string;
  margin: string;
  costPrice: string;
  sellingPrice: string;
}

interface QuotationData {
  id: string;
  title: string;
  uploadedOn: string;
  isFinal?: boolean;
  commentCount: number;
  workScope: WorkScopeRow[];
  subtotal: string;
}

const quotations: QuotationData[] = [
  {
    id: "q3",
    title: "Quotation 3",
    uploadedOn: "23rd sep 2025",
    isFinal: true,
    commentCount: 5,
    workScope: [
      { id: "1", scope: "Tiler", margin: "$350", costPrice: "$350", sellingPrice: "$350" },
      { id: "2", scope: "Plumber", margin: "100", costPrice: "$3.50", sellingPrice: "$350" },
    ],
    subtotal: "$ 50,000",
  },
  {
    id: "q2",
    title: "Quotation 2",
    uploadedOn: "23rd sep 2025",
    commentCount: 1,
    workScope: [
      { id: "1", scope: "Tiler", margin: "$350", costPrice: "$350", sellingPrice: "$350" },
      { id: "2", scope: "Plumber", margin: "100", costPrice: "$3.50", sellingPrice: "$350" },
      { id: "3", scope: "Electrician", margin: "360", costPrice: "$3.50", sellingPrice: "$1,260" },
      { id: "4", scope: "Carpenter", margin: "360", costPrice: "$3.50", sellingPrice: "$1,260" },
      { id: "5", scope: "Mason", margin: "120", costPrice: "$3.50", sellingPrice: "$420" },
      { id: "6", scope: "Roofer", margin: "100", costPrice: "$500.00", sellingPrice: "$500" },
      { id: "7", scope: "Tiler", margin: "100", costPrice: "$500.00", sellingPrice: "$500" },
    ],
    subtotal: "$ 50,000",
  },
  {
    id: "q1",
    title: "Quotation 1",
    uploadedOn: "23rd sep 2025",
    commentCount: 10,
    workScope: [
      { id: "1", scope: "Tiler", margin: "$350", costPrice: "$350", sellingPrice: "$350" },
      { id: "2", scope: "Plumber", margin: "100", costPrice: "$3.50", sellingPrice: "$350" },
    ],
    subtotal: "$ 50,000",
  },
];

const Quotations = () => {
  return (
    <div className="space-y-[27px]">
      <div className="bg-white rounded-[8px] shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#054D8B] rounded" />
            <span className="text-base font-semibold">Quotations</span>
          </div>
          <span className="text-sm text-muted-foreground">3 revisions</span>
        </div>

        {/* Accordion list */}
        <Accordion type="single" collapsible>
          {quotations.map((q) => (
            <AccordionItem key={q.id} value={q.id} className="border-none mb-4 last:mb-0">
              <div className="rounded-[8px] overflow-hidden border border-[#ECECEC]">
                {/* Header */}
                <div className={`${q.isFinal ? "bg-[#0DA0001A]" : "bg-[#9C6E611A]"} px-4 py-3`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-md text-[#9C6E61]">{q.title}</span>
                          {q.isFinal && (
                            <span className="flex items-center gap-1">
                              <span className="font-bold text-[13px] text-[#00A63E]">FINAL</span>
                              <GreenTickCircle />
                            </span>
                          )}
                        </div>
                        <AppText type="span" className="text-sm text-[#717182]">
                          Uploaded on {q.uploadedOn}
                        </AppText>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant={"ghost"} className="flex items-center gap-1 text-[#054D8B] !px-0">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-xs">{q.commentCount}</span>
                      </Button>
                      <Button variant={"ghost"} className="text-xs flex items-center gap-1 text-[#054D8B] !px-0 hover:underline">
                        <Share2 className="w-3 h-3" /> Share
                      </Button>
                      <Button variant={"ghost"} className="text-xs flex items-center gap-1 text-[#054D8B] !px-0 hover:underline">
                        <Download className="w-3 h-3" /> Download
                      </Button>
                      <AccordionTrigger className="!flex-none inline-flex items-center justify-center p-0 h-5 w-5 [&>svg]:size-4" />
                    </div>
                  </div>
                </div>
                

                {/* Content table */}
                <AccordionContent className={`${q.isFinal ? "bg-[#E6F2E9]" : "bg-[#9C6E611A]"} px-4`}>
                  <div>
                    {/* Table Header */}
                    <div className="grid grid-cols-6 bg-[#9C6E61] text-white px-4 py-3 text-xs font-bold rounded-t-[8px]">
                      <span className="col-span-3">WORK SCOPE</span>
                      <span className="text-end">Margin</span>
                      <span className="text-end">Total Cost Price</span>
                      <span className="font-bold text-end">Total Selling Price</span>
                    </div>

                    {/* Table Rows */}
                    {q.workScope.map((row) => (
                      <div key={row.id} className="grid grid-cols-6 px-4 py-3 text-xs bg-white border-b last:border-b-0">
                        <span className="col-span-3 font-bold">{row.scope}</span>
                        <span className="text-end font-normal">{row.margin}</span>
                        <span className="text-end font-normal">{row.costPrice}</span>
                        <span className="font-bold text-end">{row.sellingPrice}</span>
                      </div>
                    ))}

                    {/* Subtotal Row */}
                    <div className="bg-[#E6F2E9] px-4 py-3 border flex items-center justify-between text-xs font-semibold text-[#00A63E] rounded-b-[8px]">
                      <span>Subtotal</span>
                      <span>{q.subtotal}</span>
                    </div>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Quotations;
