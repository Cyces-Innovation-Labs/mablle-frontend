import AppText from "@/components/Commmon/AppText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GreenTickCircle from "@/icons/GreenTickCircle";
import { Download, Share2 } from "lucide-react";

interface PaymentLineItem {
  label: string;
  amount: string;
}

interface PaymentSectionData {
  id: string;
  title: string;
  status: "PAID" | "DUE" | "PENDING";
  items: PaymentLineItem[];
  subtotal: string;
}

const paidBadge = (
  <Badge className="bg-white hover:bg-white rounded-full px-2 py-0 text-[10px]">
    <div className="flex items-center gap-1">
    <GreenTickCircle /> <AppText className="text-[#17A34A] text-sm font-bold">PAID</AppText>
    </div>
  </Badge>
);

const sections: PaymentSectionData[] = [
  {
    id: "initial",
    title: "Initial Payment",
    status: "PAID",
    items: [
      { label: "Total Charges", amount: "$350" },
      { label: "GST", amount: "$1,260" },
    ],
    subtotal: "$ 50,000",
  },
  {
    id: "second",
    title: "Second-Part Payment",
    status: "PAID",
    items: [
      { label: "Total Charges", amount: "$350" },
      { label: "GST", amount: "$1,260" },
    ],
    subtotal: "$ 50,000",
  },
  {
    id: "final",
    title: "Final Payment",
    status: "PAID",
    items: [
      { label: "Total Charges", amount: "$350" },
      { label: "GST", amount: "$1,260" },
    ],
    subtotal: "$ 50,000",
  },
];

const Payments = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-[8px] p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-[#054D8B] rounded" />
          <span className="text-base font-semibold">Payments</span>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="rounded-[8px] overflow-hidden border border-[#ECECEC]">
              {/* Header bar */}
              <div className="bg-[#1E1E1E] text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-md font-semibold">{section.title}</span>
                  {section.status === "PAID" && paidBadge}
                </div>
                <div className="flex items-center text-sm font-semibold">
                  <Button variant="ghost" className="inline-flex items-center gap-2 px-0 hover:bg-primary/90 hover:text-white"><Share2 className="w-3.5 h-3.5" /> Share Invoice</Button>
                  <Button variant="ghost" className="inline-flex items-center gap-2 px-0 hover:bg-primary/90 hover:text-white"><Download className="w-3.5 h-3.5" /> Download Invoice</Button>
                </div>
              </div>

              {/* Table */}
              <div className="divide-y">
                <div className="grid grid-cols-2 text-sm font-bold text-primary bg-[#E9EBEF80] px-4 py-3">
                  <span>Item</span>
                  <span className="text-right pr-2">Charge</span>
                </div>
                {section.items.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-2 px-4 py-3 text-sm bg-[#FFFFFF80] text-primary">
                    <span>{row.label}</span>
                    <span className="text-right text-md font-bold pr-2">{row.amount}</span>
                  </div>
                ))}
                <div className="bg-[#00A63E1A] px-4 py-3 font-semibold text-sm flex items-center justify-between text-[#00A63E]">
                  <span>Subtotal</span>
                  <span className="pr-2">{section.subtotal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payments;

