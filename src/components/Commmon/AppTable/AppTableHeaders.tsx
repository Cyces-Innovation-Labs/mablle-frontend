import { TableHead, TableRow } from "@/components/ui/table";
import { TableHeader } from "@/components/ui/table";
import type { IAppTableAction } from "../types";

const AppTableHeaders = ({
  headersToMap,
  selectedRows,
  actions,
  addIndex
}: {
  headersToMap: string[];
  selectedRows?: object[];
  actions?: IAppTableAction[];
  addIndex?: boolean
}) => {
  
  return (
    <TableHeader className={`bg-[#DAA14C33] rounded-t-[8px] ${""}`}>
      <TableRow>
        {addIndex && <TableHead className="text-[#64748B] px-[10px]">S.No</TableHead>}
        {!!selectedRows && <TableHead className="px-[10px]"></TableHead>}
        {headersToMap.map((header, ind) => (
          <TableHead className={`${ind == 0 ? 'rounded-tl-[8px]' : ''} p-[17px] py-3 text-primary font-[600]`} key={header?.toString() + `${ind}`}>
            {header}
          </TableHead>
        ))}
        {!!actions && <TableHead className="px-[10px] rounded-tr-[8px]"></TableHead>}
      </TableRow>
    </TableHeader>
  );
};

export default AppTableHeaders;
