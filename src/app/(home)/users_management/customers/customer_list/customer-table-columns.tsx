"use client";
import { DataTableColumnHeader } from "@/src/components/xsponse/data-table/components/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import { Button } from "@/src/components/xsponse/ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/xsponse/ui/tooltip";
import dayjs from "dayjs";

export interface Task {
  customerId?: string;
  customerName?: string;
  email?: string;
  dealerName?: string;
  applicationDate?: Date;
}

export const CustomerTableColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "customerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
    cell: ({ row }) => 
    
    <div>
      <div className="text-sm font-medium text-default-600">{row.getValue("customerName")}</div>
      <div className="text-xs text-default-500"> {row.getValue("email")}</div>

      </div>,
    enableSorting: false,
    enableHiding: false,
  },


  {
    accessorKey: "dealerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dealer" />
    ),
    cell: ({ row }) => <div>
    
      <div className="text-sm font-medium text-default-600">  {row.getValue("dealerName")}</div>
      <div className="text-xs text-default-500"> dealeremail@sample.com</div>
      </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "customerAddress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Address" />
    ),
    cell: ({ row }) => <div>
    
      <div className="text-sm font-medium text-default-600"> My Street New York, New York</div>
      <div className="text-xs text-default-500"> Zip: 12345</div>
      </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "applicationDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date Created" />
    ),
    cell: ({ row }) => (
      <div>{dayjs(row.getValue("applicationDate")).format("DD MMM YYYY")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "actions",
    cell: ({ row }) => (
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={`/users_management/customers/customer_info/${row.original.customerId}`}>
                <Button
                  size="xs"
                  className="!p-1 h-8 w-8 mr-3"
                  color="success"
                  variant="soft"
                >
                  <Icon icon="mdi:eye" className="h-4 w-4" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>View Customer Information</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="xs"
                className="!p-1 h-8 w-8"
                color="secondary"
                variant="soft"
              >
                <Icon icon="mingcute:pencil-2-fill" className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>Update Customer Information</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
