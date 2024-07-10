"use client";
import { DataTableColumnHeader } from "@/src/components/xsponse/data-table/components/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/src/components/xsponse/ui/button";

import dayjs from "dayjs";

interface Task {
  invoiceNumber: string;
  status?: string;
  amount?: string;
  date?: string;
}

export const CustomerOverviewTableColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "invoiceNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice No." />
    ),
    cell: ({ row }) => 
    
    <div>
      <div className="text-sm font-medium text-default-600">{row.getValue("invoiceNumber")}</div>
   
      </div>,
    enableSorting: false,
    enableHiding: false,
  },

  

  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <div>
    
      <div className={`text-sm font-bold text-default-600 ${row.getValue("status") == "PENDING" ? 'text-yellow-500' : 'text-green-500'} `}>  {row.getValue("status")}</div>
   
      </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => <div>
    
      <div className="text-sm font-medium text-default-600">  {row.getValue("amount")}</div>
   
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
    id: "actions",
    cell: ({ row }) => (
      <div>
         <Button
                  size="xs"
               
                  color="dark"
                  >
                  View
                </Button>

        
      </div>
    ),
  },
];
