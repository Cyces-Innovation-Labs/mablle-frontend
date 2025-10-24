import AppListFilter from "../AppListFilter";
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
  // searchPlaceholder = "Search Contact",
  actions,
  customValueRender,
  asideComp,
  formUtils,
  filterInputArr,
  handleRowClick,
}: IAppTableWithSearchAndFilter) => {
  return (
    <div className="flex-1">
      <div className="flex justify-between mb-[13px]">
        <AppListFilter
          handleSearch={handleSearch}
          formUtils={formUtils}
          inputArr={filterInputArr}
        />

        <div>{asideComp && asideComp}</div>
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
        handleRowClick={handleRowClick}
      />
    </div>
  );
};

export default AppTableWithSearchAndFilter;
