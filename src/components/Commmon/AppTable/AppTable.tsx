import { Table } from "@/components/ui/table";
import type { IAppTable } from "../types";
import AppTableBody from "./AppTableBody";
import AppTableHeaders from "./AppTableHeaders";
import SkeletonTable from "@/components/loaders/skeletonLoaders/SkeletonTable";
import AppPagination from "./AppPagination";

const AppTable = ({
  headers,
  body,
  selectedRows,
  actions,
  page,
  perPage = 24,
  total,
  setPage,
  isLoading,
  customValueRender,
  hidePagination,
  addIndex = false
}: IAppTable) => {
  if (isLoading) {
    return <SkeletonTable columns={5} rows={10} />;
  }

  const headersToMap = Object.values(headers || {});
  const keysToAccessObjects = Object.keys(headers || {});
  // Calculate colSpan: selection + data columns + actions
  let colSpan = headersToMap.length;
  if (selectedRows) colSpan += 1;
  if (actions) colSpan += 1;

  return (
    <div className="rounded-[8px] border">
      <Table className="rounded-[8px]">
        <AppTableHeaders
          selectedRows={selectedRows}
          actions={actions}
          headersToMap={headersToMap}
          addIndex={addIndex}
        />
        <AppTableBody
          keysToAccessObjects={keysToAccessObjects}
          body={body}
          selectedRows={selectedRows}
          actions={actions}
          colSpan={colSpan}
          customValueRender={customValueRender}
          addIndex={addIndex}
        />
      </Table>

      {!hidePagination && (
        <div className=" w-full">
          <AppPagination
            page={page}
            perPage={perPage}
            total={total}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default AppTable;
