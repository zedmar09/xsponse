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

export interface Details {
    ID: number;
    TimeStamp: string;
    EventID: number;
    DeviceID: number;
    Location: string;
    Status: string;
}

export const EventLogsTableColumn: ColumnDef<Details>[] = [
  {
    accessorKey: "TimeStamp",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time Stamp" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("TimeStamp")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "EventID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Event ID" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("EventID")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "EventName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Event Name" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">Activate Strobe Light</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "DeviceName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Device Name" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">X-Light Strobe</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "DeviceID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Device ID" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("DeviceID")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "ID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">Customer00{row.getValue("ID")}</div>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "Location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
    cell: ({ row }) => 
    <div>

<div className="text-sm font-medium text-default-600">{row.getValue("Location")}</div>
    </div>,
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
        <div
          className={`text-sm font-bold text-default-600 ${row.getValue("Status") == "ERROR" ? "text-destructive-700" : "text-green-500"} `}
        >
          {" "}
          {row.getValue("Status")}
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
              <p>View Logs Information</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
