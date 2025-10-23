import AppLink from "@/components/Commmon/AppLink";
import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTableWithSearchAndFilter from "@/components/Commmon/AppTable/AppTableWithSearchAndFilter";
import AppText from "@/components/Commmon/AppText";
import AppAvatar from "@/components/Commmon/AppAvatar";
import { Button } from "@/components/ui/button";
import useGetTableData from "@/hooks/useGetTableData";
import { MAKE_DESIGNER_DETAIL_FORM_PAGE_URL } from "@/navigation/make-url";
import { Download } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import { designerEndpoints } from "@/api/endpoints/endpoints";
import { filterListForUsers } from "../Users/UsersFormHelpers";

const DesignersPage = () => {
  const formUtils = useForm();
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const { setPage, setSearch, page, metaData, tableData, isLoading } =
    useGetTableData({
      endpoint: designerEndpoints.list,
      metaEndpoint: designerEndpoints.meta,
      filters: {
        specialization: formUtils.getValues("specialization") || "",
        status: formUtils.watch("status"),
        date_range: formUtils.watch("date_range"),
      },
    });

  const navigate = useNavigate();

  const customValueRender = {
    designer_name: (row: any) => {
      return (
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={selectedRows.includes(row.id)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedRows([...selectedRows, row.id]);
              } else {
                setSelectedRows(selectedRows.filter((id) => id !== row.id));
              }
            }}
            className="rounded border-gray-300"
          />
          <AppAvatar
            src={row.avatar}
            fallback={row.designer_name?.charAt(0) || "D"}
          />
          <AppText type="span" className="font-medium">
            {row.designer_name}
          </AppText>
        </div>
      );
    },
    designer_id: (row: any) => {
      return (
        <AppText type="span" className="text-sm font-mono">
          {row.designer_id}
        </AppText>
      );
    },
    specialization: (row: any) => {
      return (
        <AppText type="span" className="text-sm">
          {row.specialization}
        </AppText>
      );
    },
    joined_date: (row: any) => {
      return (
        <AppText type="span" className="text-sm text-gray-600">
          {row.joined_date}
        </AppText>
      );
    },
    email: (row: any) => {
      return (
        <AppText type="span" className="text-sm">
          {row.email}
        </AppText>
      );
    },
    phone: (row: any) => {
      return (
        <AppText type="span" className="text-sm">
          {row.phone}
        </AppText>
      );
    },
    status: (row: any) => {
      const statusColors: Record<string, string> = {
        Active: "bg-green-100 text-green-800",
        Inactive: "bg-red-100 text-red-800",
        OnLeave: "bg-yellow-100 text-yellow-800",
        Busy: "bg-orange-100 text-orange-800"
      };
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[row.status] || 'bg-gray-100 text-gray-800'}`}>
          {row.status}
        </span>
      );
    },
    projects_count: (row: any) => {
      return (
        <AppText type="span" className="text-sm font-medium">
          {row.projects_count}
        </AppText>
      );
    },
  };

  const customActions = [
    {
      label: "",
      render: (row: any) => {
        return (
          <AppLink
            className="font-medium py-1 px-3 hover:underline"
            to={MAKE_DESIGNER_DETAIL_FORM_PAGE_URL(row.id)}
          >
            View
          </AppLink>
        );
      },
    },
  ];

  const handleExport = () => {
    // Implement export functionality
    console.log("Exporting designers data...");
  };

  const asideComp = (
    <div className="flex gap-3">
      <Button
        variant="outline"
        onClick={handleExport}
        className="flex items-center gap-2 text-primary"
      >
        <Download className="w-4 h-4" />
        Export
      </Button>
    </div>
  );

  return (
    <AppPageWrapper>
      {/* Header Section */}
      <AppTitleWithBackButton
        asideComp={asideComp}
        hideBackButton
        title="Designers"
        description="Manage your design team and their projects."
      />

      {/* Table with Search and Filters */}
      <AppTableWithSearchAndFilter
        handleSearch={setSearch}
        formUtils={formUtils}
        filterInputArr={filterListForUsers()}
        headers={metaData?.data?.columns}
        body={tableData?.data?.results || []}
        page={page}
        total={tableData?.data?.count || 0}
        setPage={setPage}
        customValueRender={customValueRender}
        actions={customActions}
        searchPlaceholder="Enter designer name, specialization..."
        isLoading={isLoading}
      />
    </AppPageWrapper>
  );
};

export default DesignersPage;
