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

export interface Details {
  ID: number;
  DocumentName: string;
  Category: string;
  DocumentType: string;
  UploadedDate: string;
  Viewers: string;
  FileSize: number;
  Status: string;
}

export const DocumentTableColumn: ColumnDef<Details>[] = [
  {
    accessorKey: "DocumentName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Name" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("DocumentName")}
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "Category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("Category")}
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "DocumentType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Document Type" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("DocumentType")}
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "UploadedDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Uploaded Date" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("UploadedDate")}
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "Viewers",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Viewers" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("Viewers")}
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "FileSize",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="File Size" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("FileSize")} MB
        </div>
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

<div
          className={`text-sm font-bold text-default-600 ${row.getValue("Status") == "Visible" ? "text-success" : "text-gray-400"} `}
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
                color="info"
                variant="soft"
              >
                <Icon icon="bxs:file" className="h-4 w-4 " />
              </Button>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>View Document</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="xs"
                className="!p-1 h-8 w-8 mr-3"
                color="secondary"
              >
                <Icon icon="ant-design:edit-filled" className="h-4 w-4 text-dark" />
              </Button>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>Update Document</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="xs"
                className="!p-1 h-8 w-8 mr-3"
                color="destructive"
                variant="soft"
              >
                <Icon icon="iconamoon:trash-bold" className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>Delete Document</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="xs"
                className="!p-1 h-8 w-8 mr-3"
                color={row.getValue("Status") == 'Visible' ? 'destructive' : 'success'}
                variant="soft"
              >
                <Icon icon={row.getValue("Status") == 'Visible' ? 'mdi:eye-off' : 'mdi:eye'} className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p> {row.getValue("Status") == 'Visible' ? 'Hide Document' : 'Show Document'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
