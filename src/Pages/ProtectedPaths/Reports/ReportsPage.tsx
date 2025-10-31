import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import AppText from "@/components/Commmon/AppText";
import type { InputGroup, InputType } from "@/components/Commmon/types";
import { Download } from "lucide-react";
import { useMemo } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import makeGetRequest from "@/api/makeGetRequest";
import { reportEndpoints } from "@/api/endpoints/endpoints";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import AppListFilter from "@/components/Commmon/AppListFilter";

interface ReportItem {
  key: string;
  title: string;
  description: string;
}

const ReportsPage = () => {

  const formUtils = useForm();

  const { data, isLoading } = useQuery({
    queryKey: ["reports"],
    queryFn: () => makeGetRequest(reportEndpoints.list),
  });

  const reports: ReportItem[] = useMemo(() => {
    // Fallback to static suggestions if API returns nothing
    return (
      data?.results || [
        {
          key: "operations",
          title: "Operations Report",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        },
        {
          key: "payments",
          title: "Payment Report",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        },
        {
          key: "customer-trends",
          title: "Customer Trends Report",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        },
      ]
    );
  }, [data]);

  const { mutate: generateReport, isPending: isGenerating } = useMutation({
    mutationFn: async (key: string) =>
      makeGetRequest(reportEndpoints.generate(key)),
    onSuccess: (res: any) => {
      const url: string | undefined = res?.url || res?.fileUrl;
      if (url) {
        window.open(url, "_blank");
      } else {
        toast.success("Report generated successfully");
      }
    },
    onError: () => toast.error("Failed to generate the report"),
  });

  const inputArr: InputGroup[] = [
    {
      wrapperClassName: "grid grid-cols-1 gap-4",
      render: [
        {
          name: "date_range",
          type: "date" as InputType,
          placeholder: "Last call on",
          className: "max-w-[200px]",
        },
      ]}]


  return (
    <AppPageWrapper>
      <AppTitleWithBackButton
        hideBackButton
        title="Reports"
        description="Search, filter and download business reports."
      />

      <AppListFilter formUtils={formUtils} inputArr={inputArr} handleSearch={() => {}} searchPlaceholder="Search...." />

      <div className="mt-6 rounded-[8px] border bg-card">
        <div className="p-6">
          <AppText type="h4" className="font-semibold text-primary">Download</AppText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 pb-6">
          {reports?.map((r) => (
            <div key={r.key} className="rounded-[6px] border p-6 bg-background">
              <div className="flex items-center justify-between">
              <AppText type="h4" className="mb-2 text-[18px] font-semibold">{r.title}</AppText>
              <button
                aria-label={`Download ${r.title}`}
                className="text-[#9C6E61] hover:text-primary"
                onClick={() => generateReport(r.key)}
                disabled={isGenerating}
              >
                <Download className="w-5 h-5" />
              </button>
                </div>
              <AppText type="p" className="text-muted-foreground text-sm leading-6">{r.description}</AppText>
            </div>
          ))}
          {isLoading && (
            <div className="col-span-full">
              <AppText type="p" className="text-muted-foreground">Loading reports...</AppText>
            </div>
          )}
        </div>
      </div>
    </AppPageWrapper>
  );
};

export default ReportsPage;
