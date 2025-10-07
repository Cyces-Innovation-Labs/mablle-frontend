import AppLink from "@/components/Commmon/AppLink";
import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTableWithSearchAndFilter from "@/components/Commmon/AppTable/AppTableWithSearchAndFilter";
import AppText from "@/components/Commmon/AppText";
import AppAvatar from "@/components/Commmon/AppAvatar";
import { Button } from "@/components/ui/button";
import useGetTableData from "@/hooks/useGetTableData";
import { MAKE_USER_DETAIL_FORM_PAGE_URL } from "@/navigation/make-url";
import { Plus, Upload, User } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { filterListForUsers } from "./UsersFormHelpers";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import { userEndpoints } from "@/api/endpoints/endpoints";

const UsersPage = () => {
  const formUtils = useForm();
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const { setPage, setSearch, page, metaData, tableData, isLoading } =
    useGetTableData({
      endpoint: userEndpoints.list,
      metaEndpoint: userEndpoints.meta,
      filters: {
        care_manager: formUtils.getValues("care_manager") || "All",
        last_call_date: formUtils.watch("last_call_date"),
      },
    });

  const navigate = useNavigate();

  const customValueRender = {
    full_name: (row: any) => {
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
            fallback={row.full_name?.charAt(0) || "U"}
          />
          <AppText type="span" className="font-medium">
            {row.full_name}
          </AppText>
        </div>
      );
    },
    sentiment_score: (row: any) => {
      return (
        <div className="flex items-center">
          <AppText type="span" className="text-sm">
            {row.sentiment_score}/5
          </AppText>
        </div>
      );
    },
    last_call: (row: any) => {
      return (
        <AppText type="span" className="text-sm text-gray-600">
          {row.last_call}
        </AppText>
      );
    },
    next_followup: (row: any) => {
      return (
        <div className="flex items-center gap-2">
          <AppText type="span" className="text-sm">
            {row.next_followup}
          </AppText>
          <button className="text-gray-400 hover:text-gray-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="19" cy="12" r="1" fill="currentColor" />
              <circle cx="5" cy="12" r="1" fill="currentColor" />
            </svg>
          </button>
        </div>
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
            to={MAKE_USER_DETAIL_FORM_PAGE_URL(row.id)}
          >
            View
          </AppLink>
        );
      },
    },
  ];

  const handleExport = () => {
    // Implement export functionality
    console.log("Exporting data...");
  };

  const handleAssignCareManager = () => {
    // Implement assign care manager functionality
    console.log("Assigning care manager to selected rows:", selectedRows);
  };

  const asideComp = (
    <div className="flex gap-3">
      <Button
        variant="outline"
        onClick={handleExport}
        className="flex items-center gap-2 text-[#821a52] border-[#821a52] hover:bg-[#821a52] hover:text-white"
      >
        <Upload className="w-4 h-4" />
        Export
      </Button>
      <Button
        onClick={() => navigate(MAKE_USER_DETAIL_FORM_PAGE_URL("create"))}
        className="flex items-center gap-2 bg-[#821a52] hover:bg-[#6b1441] text-white"
      >
        <Plus className="w-4 h-4" />
        Add New
      </Button>
    </div>
  );

  return (
    <AppPageWrapper>
      {/* Header Section */}
      <AppTitleWithBackButton
        asideComp={asideComp}
        hideBackButton
        title="Users"
        description="Manage your users and voice recordings."
      />

      {/* Table with Search and Filters */}
      <AppTableWithSearchAndFilter
        handleSearch={setSearch}
        asideComp={
          <Button
            onClick={handleAssignCareManager}
            disabled={selectedRows.length === 0}
            className="flex items-center gap-2 bg-pink-100 text-[#821a52] hover:bg-pink-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <User className="w-4 h-4" />
            Assign Care Manager
          </Button>
        }
        formUtils={formUtils}
        filterInputArr={filterListForUsers()}
        headers={metaData?.data?.columns}
        body={tableData?.data?.results || []}
        page={page}
        total={tableData?.data?.total || 0}
        setPage={setPage}
        customValueRender={customValueRender}
        actions={customActions}
        searchPlaceholder="Search users by name, phone or care ma..."
        isLoading={isLoading}
      />
    </AppPageWrapper>
  );
};

export default UsersPage;
