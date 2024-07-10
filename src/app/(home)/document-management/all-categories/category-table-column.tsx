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
  CategoryName: string;
  CategoryDescription: string;
}

export const CategoryTableColumn: ColumnDef<Details>[] = [
  {
    accessorKey: "CategoryName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category Name" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("CategoryName")}
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "CategoryDescription",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CategoryDescription" />
    ),
    cell: ({ row }) => (
      <div>
        <div className="text-sm font-medium text-default-600">
          {row.getValue("CategoryDescription")}
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
                color="secondary"
              >
                <Icon icon="ant-design:edit-filled" className="h-4 w-4 text-dark" />
              </Button>
            </TooltipTrigger>
            <TooltipContent color="secondary">
              <p>Update Category</p>
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
              <p>Delete Category</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
