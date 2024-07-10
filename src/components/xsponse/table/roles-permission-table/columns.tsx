// columns.tsx
import { ColumnDef } from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import { Button } from "@/src/components/xsponse/ui/button";
import { dataTableTypes } from "./data-table-types";
import { Badge } from "@/src/components/xsponse/ui/badge";

const columns: ColumnDef<dataTableTypes>[] = [
  {
    accessorKey: "fullname",
    header: "Full Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) =>
      getValue<string>() === "active" ? (
        <Badge color="success">{getValue<string>()}</Badge>
      ) : (
        <Badge color="destructive">{getValue<string>()}</Badge>
      ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="space-x-1">
        <Button size="icon" className="!p-1 bg-warning h-8 w-8">
          <Icon icon="heroicons:pencil-square-20-solid" className="h-4 w-4" />
        </Button>
        <Button size="icon" className="!p-1 bg-destructive h-8 w-8">
          <Icon icon="heroicons:trash-20-solid" className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

export default columns;
