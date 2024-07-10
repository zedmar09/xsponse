"use client";
import { DataTableColumnHeader } from "@/src/components/xsponse/data-table/components/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/src/components/xsponse/ui/button";

interface Task {
    deviceNumber: string;
    deviceName?: string;
    status?: string;
}

export const CustomerDeviceTableColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "deviceNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Device Number" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("deviceNumber")}
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "deviceName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Device Name" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("deviceName")}
        </div>
      </div>
    ),
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
    id: "actions",
    cell: ({ row }) => (
      <div>
        <Button size="xs" color="dark">
          View
        </Button>
      </div>
    ),
  },
];
