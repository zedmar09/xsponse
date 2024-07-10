// data-table.tsx
import React from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import columns from "../roles-permission-table/columns";
import { dataTableTypes } from "../roles-permission-table/data-table-types";
import { sampleData } from "../roles-permission-table/sample-data";
import { DataTablePagination } from "./data-table-pagination";

const DataTable: React.FC<{
  columns: ColumnDef<dataTableTypes>[];
  data: dataTableTypes[];
}> = ({ columns, data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="text-left text-gray-600 uppercase tracking-wider"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  <span>
                    {header.column.getIsSorted()
                      ? header.column.getIsSorted() === "desc"
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-gray-700">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <DataTablePagination table={table} />
    </div>
  );
};

export default DataTable;
