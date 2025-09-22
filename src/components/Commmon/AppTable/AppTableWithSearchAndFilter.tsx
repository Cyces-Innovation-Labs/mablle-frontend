import AppSearchInput from "../AppSearchInput";
import type { IAppTableWithSearchAndFilter } from "../types";
import AppTable from "./AppTable";

const AppTableWithSearchAndFilter = ({
  headers,
  body,
  page,
  perPage,
  total,
  setPage,
  isLoading,
  handleSearch,
  searchPlaceholder = "Search Contact",
  actions,
  customValueRender,
  asideComp
}: IAppTableWithSearchAndFilter) => {
  return (
    <div className="flex-1">
      <div className="flex justify-between mb-[13px]">
        <AppSearchInput handleSearch={handleSearch} placeholder={searchPlaceholder} />
        <div>
          {asideComp && asideComp}
        </div>
      </div>
      <AppTable
        headers={headers}
        body={body}
        page={page}
        perPage={perPage}
        total={total}
        setPage={setPage}
        isLoading={isLoading}
        actions={actions}
        customValueRender={customValueRender}
      />
    </div>
  );
};

export default AppTableWithSearchAndFilter;
