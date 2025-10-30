import { Link, useParams } from "react-router-dom";
import Notes from "@/Pages/ProtectedPaths/Clients/components/Notes";
import { Share2, Download } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MAKE_CLIENT_DETAIL_PAGE_URL } from "@/navigation/make-url";

interface Row {
  id: string;
  scope: string;
  margin: string;
  cost: string;
  selling: string;
}

const rows: Row[] = [
  { id: "1", scope: "Tiler", margin: "$350", cost: "$350", selling: "$350" },
  { id: "2", scope: "Plumber", margin: "100", cost: "$3.50", selling: "$350" },
  { id: "3", scope: "Electrician", margin: "360", cost: "$3.50", selling: "$1,260" },
  { id: "4", scope: "Carpenter", margin: "360", cost: "$3.50", selling: "$1,260" },
  { id: "5", scope: "Mason", margin: "120", cost: "$3.50", selling: "$420" },
  { id: "6", scope: "Roofer", margin: "100", cost: "$500.00", selling: "$500" },
  { id: "7", scope: "Tiler", margin: "100", cost: "$500.00", selling: "$500" },
];

const QuotationDetailPage = () => {
  const { clientId, quotationId } = useParams();

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
              <Link to={`/clients/${clientId}/quotations`} className="capitalize">quotations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{quotationId || "Quotation"}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-bold">{`Quotation ${quotationId || "-"}`}</div>
          <div className="text-xs text-muted-foreground mt-1">Uploaded on 23rd sep 2025</div>
        </div>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <button className="inline-flex items-center gap-2 text-[#054D8B]"><Share2 className="w-4 h-4" /> Share</button>
          <button className="inline-flex items-center gap-2 text-[#054D8B]"><Download className="w-4 h-4" /> Download</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          {/* Table */}
          <div className="rounded-[8px] overflow-hidden border border-[#ECECEC]">
            <div className="grid grid-cols-4 bg-[#9C6E61] text-white px-4 py-3 text-xs font-bold">
              <span>WORK SCOPE</span>
              <span>Margin</span>
              <span>Total Cost Price</span>
              <span className="font-bold">Total Selling Price</span>
            </div>
            {rows.map((r) => (
              <div key={r.id} className="grid grid-cols-4 px-4 py-3 text-xs bg-white border-b last:border-b-0">
                <span className="font-bold">{r.scope}</span>
                <span className="text-end">{r.margin}</span>
                <span className="text-end">{r.cost}</span>
                <span className="text-end font-bold">{r.selling}</span>
              </div>
            ))}
            <div className="bg-[#E6F2E9] px-4 py-3 flex items-center justify-between text-xs font-semibold text-[#00A63E]">
              <span>Subtotal</span>
              <span>$ 50,000</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 border border-[#D8DAD9] rounded-[16px] p-4 h-fit">
          <Notes placeholder="Add comment on this quotation..." />
        </div>
      </div>
    </div>
  );
};

export default QuotationDetailPage;
