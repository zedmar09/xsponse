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
  dealerId?: string;
  dealerName?: string;
  dealerEmail?: string;
  keyInterest?: string;
  primaryContact?: string;
  secondaryContact?: string;
  pricingLevel?: string;
  applicationDate?: Date;
}

export const DealerTableColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "dealerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dealer Name" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">{row.getValue("dealerName")}</div>
        <div className="text-xs text-default-500">sampledealeremail@sample.com</div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "primaryContact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Primary Contact" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">{row.getValue("primaryContact")}</div>
        <div className="text-xs text-default-500">(0946) 0675 363</div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "secondaryContact",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Secondary Contact" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">{row.getValue("secondaryContact")}</div>
        <div className="text-xs text-default-500">(0946) 0675 363</div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "keyInterest",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Key Interest" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">{row.getValue("keyInterest")}</div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "pricingLevel",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pricing Level" />
    ),
    cell: ({ row }) => (
      <div className={`text-sm font-bold ${row.getValue("pricingLevel") === "GOLD" ? 'text-yellow-400' : row.getValue("pricingLevel") === "DIAMOND" ? 'text-info' : 'text-gray-600'}`}>
        {row.getValue("pricingLevel")}
      </div>
    ),
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
              <Link href={`/users_management/dealers/dealer_info/${row.original.dealerId}`}>
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
                color="secondary"
                variant="soft"
              >
                <Icon icon="mingcute:pencil-2-fill" className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>Update Dealer Information</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
