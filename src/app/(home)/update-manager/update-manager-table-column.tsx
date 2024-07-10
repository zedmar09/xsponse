"use client";
import { DataTableColumnHeader } from "@/src/components/xsponse/data-table/components/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import { Button } from "@/src/components/xsponse/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/xsponse/ui/tooltip";
import dayjs from "dayjs";

export interface Details {
  deviceId: string;
  name: string;
  type: string;
  status: string;
  currentVersion: string;
  lastUpdate: string;
}

export const UpdateManagerTableColumn: ColumnDef<Details>[] = [

  {
    id: 'checkbox',
    cell: ({ row }) => (
      <div>
        <Checkbox size="md" id="ck-md" />
      </div>
    ),
  },

  {
    accessorKey: "deviceId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Device ID" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("deviceId")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Device Name" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("name")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Device Type" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("type")}</div>
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
          className={`text-sm font-bold text-default-600 ${row.getValue("status") == "Outdated" ? "text-destructive-700" : "text-success"} `}
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
    accessorKey: "currentVersion",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Current Version" />
    ), 
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("currentVersion")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "lastUpdate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Update" />
    ), 
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("lastUpdate")}</div>
    </div>,
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
              <p>View Update History</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
