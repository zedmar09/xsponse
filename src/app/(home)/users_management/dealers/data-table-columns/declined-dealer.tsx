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
import { Badge } from "@/src/components/xsponse/ui/badge";
import dayjs from "dayjs";

export interface Task {
    ID?: number;
    CompanyName?: string;
    PrimaryContact?: string;
    AddressLine?: string;
    ApplicationStatus?: string;
    ApplicationDate?: string;
    ApplicationDuration?: string;
    KeyInterest?:string;
}

export const Declined: ColumnDef<Task>[] = [
  {
    accessorKey: "CompanyName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
            {row.getValue("CompanyName")}
        </div>
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
    accessorKey: "ApplicationDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Application Date" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">{row.getValue("ApplicationDate")} <small className="text-default-400">{' '}({row.original.ApplicationDuration})</small></div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "ApplicationDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title=" Date Declined " />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("ApplicationDate")} <small className="text-default-400">{' '}({row.original.ApplicationDuration})</small></div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "ApplicationStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Current Application" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
            <Badge color={row.getValue("ApplicationStatus") == 'partially_approved_pending' ? 'success' :'secondary'}>
                 {row.getValue("ApplicationStatus") == 'partially_approved_pending' ? 'Partial Approved' :'Pending'}
            </Badge> 
        </div>
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
              <Link href={`/users_management/dealers/dealer-info/${row.original.ApplicationStatus == 'pending' ? 'profile-pending' : 'profile-partial-approved' }`}>
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
                className="!p-1 h-8 w-8 mr-3"
                color='success'
                variant="soft"
              >
                <Icon icon='material-symbols:check-circle' className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>Approve Application</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        
      </div>
    ),
  },

];
