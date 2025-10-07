import { TableCell, TableRow, TableBody } from "@/components/ui/table";
import type { IAppTableBody, IAppTableAction } from "../types";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const NoData: React.FC<{ colSpan: number }> = ({ colSpan }) => (
  <TableRow>
    <TableCell colSpan={colSpan} className="py-6 text-center">
      <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
        {/* <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="12" fill="#f3f4f6"/><path d="M16 32h16M20 20v4m8-4v4m-12 8V18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2z" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> */}
        <span className="text-[16px] font-medium">No data found</span>
      </div>
    </TableCell>
  </TableRow>
);

const AppTableBody = ({
  body,
  keysToAccessObjects,
  selectedRows,
  actions,
  colSpan = 1,
  customValueRender,
  addIndex = false
}: {
  body: IAppTableBody[];
  keysToAccessObjects: string[];
  selectedRows?: object[];
  actions?: IAppTableAction[];
  colSpan?: number;
  addIndex?: boolean
  customValueRender?: {
    [key: string]: (row: IAppTableBody, header: string) => React.ReactNode;
  };
}) => {

  const getRowValueFromHeader = (row: IAppTableBody, header: string) => {

    if(customValueRender?.[header as keyof typeof customValueRender]){
      return customValueRender?.[header](row, header);
    }
    
    let value = '';
    const splittedHeader = header.split("__");
    //@ts-expect-error - this is a temporary fix to get the row value from the header
    value = splittedHeader.reduce((acc, curr) => acc[curr], row);
    if(!value) {
      return <span className="flex items-center justify-start"> - </span>;
    }
    return value;
  }
  
  if (!body || body.length === 0) {
    return (
      <TableBody>
        <NoData colSpan={colSpan} />
      </TableBody>
    );
  }

  return (
    <TableBody>
      {body?.map((row, ind) => (
        <TableRow key={`${row?.id || row?.uuid || ind}`}>
          {addIndex && <TableCell className="px-[10px]">{ind + 1}</TableCell>}  
          {!!selectedRows && (
            <TableCell
            className="px-[10px]"
            >
              <Checkbox
                checked={selectedRows?.some(
                  (selectedRow: any) =>
                    selectedRow?.id === row?.id ||
                    selectedRow?.uuid === row?.uuid
                )}
              />
            </TableCell>
          )}
          {keysToAccessObjects?.map((key, ind) => (
            <TableCell
            className="p-[17px] py-3 text-[13px]"
            key={key + `${ind}`}>
              {getRowValueFromHeader(row, key)}
            </TableCell>
          ))}
          {!!actions && (
            <TableCell 
            className="px-[10px]"
            >
              {actions?.map((action) => action.render(row))}
            </TableCell>
          )}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default AppTableBody;
