import AppLink from "@/components/Commmon/AppLink";
import AppPageWrapper from "@/components/Commmon/AppPageWrapper";
import AppTableWithSearchAndFilter from "@/components/Commmon/AppTable/AppTableWithSearchAndFilter";
import AppTitleWithBackButton from "@/components/Commmon/AppTitleWithBackButton";
import { Button } from "@/components/ui/button";
import { dummyTableData, dummyTableHeaders } from "@/constants/dummy-data";
import useGetTableData from "@/hooks/useGetTableData";
import { milliToHumanize } from "@/lib/common-funnctions";
import { MAKE_USER_DETAIL_FORM_PAGE_URL } from "@/navigation/make-url";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { filterListForUsers } from "./UsersFormHelpers";
import { useForm } from "react-hook-form";

const UsersPage = () => {
  const { setPage, setSearch, page, metaData } = useGetTableData({
    endpoint: "",
    metaEndpoint: "",
  });
  const navigate = useNavigate();
  const formUtils = useForm();
  const customValueRender = {
    call_initiated: (row: any) => {
      return <span>{milliToHumanize(row.call_initiated)}</span>;
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

  const asideComp = (
    <div className="flex gap-2">
      <Button
        onClick={() => navigate(MAKE_USER_DETAIL_FORM_PAGE_URL("create"))}
      >
        <Plus />
        Add New User
      </Button>
    </div>
  );

  return (
    <AppPageWrapper>
      <AppTitleWithBackButton hideBackButton onClick={() => {}} title="Users" />
      <div className="mt-10">
        <AppTableWithSearchAndFilter
          handleSearch={setSearch}
          asideComp={asideComp}
          formUtils={formUtils}
          filterInputArr={filterListForUsers(metaData)}
          headers={dummyTableHeaders?.columns}
          body={dummyTableData?.data?.results}
          page={page}
          total={dummyTableData?.data?.total}
          setPage={setPage}
          customValueRender={customValueRender}
          actions={customActions}
          searchPlaceholder="Search user by email"
        />
      </div>
    </AppPageWrapper>
  );
};

export default UsersPage;
