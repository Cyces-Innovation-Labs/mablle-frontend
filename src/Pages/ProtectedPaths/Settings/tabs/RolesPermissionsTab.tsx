import { clientEndpoints } from "@/api/endpoints/endpoints";
import AppAvatar from "@/components/Commmon/AppAvatar";
import AppTableWithSearchAndFilter from "@/components/Commmon/AppTable/AppTableWithSearchAndFilter";
import AppText from "@/components/Commmon/AppText";
import type { InputGroup } from "@/components/Commmon/types";
import { dummyClientsData, dummyTableHeaders } from "@/constants/dummy-data";
import useGetTableData from "@/hooks/useGetTableData";
import { MAKE_CLIENT_DETAIL_PAGE_URL } from "@/navigation/make-url";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const RolesPermissionsTab = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const formUtils = useForm<{ role?: string; status?: string; start?: string; end?: string }>({
    defaultValues: { role: "", status: "", start: "", end: "" },
  });

  const { setPage, setSearch, page, metaData, tableData, isLoading } =
    useGetTableData({
      endpoint: clientEndpoints.list,
      metaEndpoint: clientEndpoints.meta,
      filters: {
        designer: formUtils.getValues("role") || "",
        project_status: formUtils.watch("status"),
      },
    });

  const navigate = useNavigate();

  const customValueRender = {
    client_name: (row: any) => {
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
            fallback={row.client_name?.charAt(0) || "C"}
          />
          <AppText type="span" className="font-medium">
            {row.client_name}
          </AppText>
        </div>
      );
    },
    project_number: (row: any) => {
      return (
        <AppText type="span" className="text-sm font-mono">
          {row.project_number}
        </AppText>
      );
    },
    designer: (row: any) => {
      return (
        <AppText type="span" className="text-sm">
          {row.designer}
        </AppText>
      );
    },
    project_started: (row: any) => {
      return (
        <AppText type="span" className="text-sm text-gray-600">
          {row.project_started}
        </AppText>
      );
    },
    mobile: (row: any) => {
      return (
        <AppText type="span" className="text-sm">
          {row.mobile}
        </AppText>
      );
    },
    status: (row: any) => {
      const statusColors: Record<string, string> = {
        FC: "bg-green-100 text-green-800",
        HO: "bg-blue-100 text-blue-800", 
        QL: "bg-purple-100 text-purple-800",
        CF: "bg-orange-100 text-orange-800"
      };
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[row.status] || 'bg-gray-100 text-gray-800'}`}>
          {row.status}
        </span>
      );
    },
    project_status: (row: any) => {
      const projectStatusColors: Record<string, string> = {
        Active: "bg-green-100 text-green-800",
        Closed: "bg-red-100 text-red-800",
        Pending: "bg-yellow-100 text-yellow-800"
      };
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${projectStatusColors[row.project_status] || 'bg-gray-100 text-gray-800'}`}>
          {row.project_status}
        </span>
      );
    },
  };

  const filterInputs: InputGroup[] = [
    {
      wrapperClassName: "grid grid-cols-3 gap-2",
      render: [
        {
          type: "select",
          name: "role" as any,
          label: "",
          placeholder: "Role",
          options: [
            { label: "Super Admin", value: "Super Admin" },
            { label: "Admin", value: "Admin" },
            { label: "Viewer", value: "Viewer" },
          ],
        },
        {
          type: "select",
          name: "status" as any,
          label: "",
          placeholder: "Status",
          options: [
            { label: "Active", value: "Active" },
            { label: "In-Active", value: "In-Active" },
          ],
        },
        {
          type: "custom-comp",
          name: "date" as any,
          customComp: (
            <div className="px-3 py-2 rounded-[11px] border text-sm text-muted-foreground cursor-default bg-background">
              Date Range
            </div>
          ),
        },
      ],
    },
  ];

  const handleRowClick = (row: any) => {
    navigate(MAKE_CLIENT_DETAIL_PAGE_URL(row.id));
  };

  return (
    <div className="">
      <AppTableWithSearchAndFilter
        handleSearch={setSearch}
        formUtils={formUtils}
        headers={metaData?.data?.columns || dummyTableHeaders.columns}
        body={tableData?.data?.results || dummyClientsData}
        page={page}
        total={tableData?.data?.count || 0}
        setPage={setPage}
        customValueRender={customValueRender}
        searchPlaceholder="Enter project number, designer..."
        isLoading={isLoading}
        handleRowClick={handleRowClick}
        filterInputArr={filterInputs}
      />
    </div>
  );
};

export default RolesPermissionsTab;

