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
    ID?: number;
    CompanyName?: string;
    PrimaryContact?: string;
    AddressLine?: string;
    KeyInterest?: string;
    PricingLevel?: string;
    Status?: string;
}

export const ApprovedDealer: ColumnDef<Task>[] = [
  {
    accessorKey: "CompanyName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">{row.getValue("CompanyName")}</div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "PrimaryContact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Primary Contact" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">{row.getValue("PrimaryContact")}</div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "AddressLine",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">{row.getValue("AddressLine")}</div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },


  {
    accessorKey: "PricingLevel",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pricing Level" />
    ),
    cell: ({ row }) => (
        <div className={`text-sm font-bold ${row.getValue("PricingLevel") === "GOLD" ? 'text-yellow-400' : row.getValue("PricingLevel") === "DIAMOND" ? 'text-info' : 'text-gray-600'}`}>
        {row.getValue("PricingLevel")}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  
  {
    accessorKey: "KeyInterest",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Key Interest" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">{row.getValue("KeyInterest")}</div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  

  {
    accessorKey: "Status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div>
        <div className={`text-sm font-bold ${row.original.Status == 'ACTIVE' ? 'text-success' : 'text-destructive'}`}>{row.getValue("Status")}</div>
      </div>
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
              <Link href={`/users_management/dealers/dealer-info/profile-approved`}>
                <Button
                  size="xs"
                  className="!p-1 h-8 w-8 mr-3"
                  color="dark"
                  variant="soft"
                >
                  <Icon icon="mdi:eye" className="h-4 w-4 text-default-500" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>View Dealer Information</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="xs"
                className="!p-1 h-8 w-8"
                color={row.original.Status == 'ACTIVE' ? 'destructive' : 'success'}
                variant="soft"
              >
                <Icon icon={row.original.Status == 'ACTIVE' ? 'bxs:x-circle' : 'material-symbols:check-circle'} className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>{row.original.Status == 'ACTIVE' ? 'Set to Inactive' : 'Set to Active'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },

];
