"use client";
import { DataTableColumnHeader } from "@/src/components/xsponse/data-table/components/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";

interface Task {
  event: string;
  status?: string;
  date?: string;
}

export const EventAndLogsTableColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "event",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Activated Events" />
    ),
    cell: ({ row }) => 
    
    <div>
      <div className="text-sm font-medium text-default-600">{row.getValue("event")}</div>
   
      </div>,
    enableSorting: false,
    enableHiding: false,
  },

  

  

  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => <div>
    
      <div className="text-sm font-medium text-default-600">  {row.getValue("date")}</div>
   
      </div>,
    enableSorting: false,
    enableHiding: false,
  },


  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <div >
    
      <div className={`text-sm font-bold text-default-600 ${row.getValue("status") == "PENDING" ? 'text-yellow-500' : 'text-green-500'} `}>  {row.getValue("status")}</div>
   
      </div>,
    enableSorting: false,
    enableHiding: false,
  },

  
  
];
