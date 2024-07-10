"use client";
import { DataTableColumnHeader } from "@/src/components/xsponse/data-table/components/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import { Button } from "@/src/components/xsponse/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/xsponse/ui/tooltip";
import dayjs from "dayjs";

export interface Task {
  userId?: string;
  user?: string;
  username?:string;
  role?: string;
  status?: string;
}

export const SystemUserTableColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "user",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Full Name" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("user")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("role")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Username" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("username")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div>
        <div
          className={`text-sm font-bold text-default-600 ${row.getValue("status") == "IN-ACTIVE" ? "text-destructive-700" : "text-green-500"} `}
        >
          {" "}
          {row.getValue("status")}
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
                <Button
                  size="xs"
                  className="!p-1 h-8 w-8 mr-3"
                  color="success"
                  variant="soft"
                >
                  <Icon icon="mdi:eye" className="h-4 w-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>View User Information</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* <TooltipProvider>
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
        </TooltipProvider> */}
      </div>
    ),
  },
];
