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
  permissionId?: string;
  noOfUser?: number;
  role?:string;
  noOfPermissions?: number;
}

export const PermissionTableColumn: ColumnDef<Task>[] = [
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role Name" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("role")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "noOfUser",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number of Users" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("noOfUser")} User(s)</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "noOfPermissions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number of Permissions" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("noOfPermissions")} Permission(s)</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    id: "actions",
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
              <p>View Roles and Permissions</p>
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
              <p>Update Roles and Permissions</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
