import { Fragment } from "react";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { PermissionTableColumn, Task } from "./permission-table-column";
import { useList } from "@refinedev/core";

export default function PermissionDataTable() {
  const { data, isLoading, error } = useList({
    resource: "/api/accounts/roles",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const SystemRoleList: Task[] = data?.data.map((permission): Task => ({
    permissionId: permission?.id?.toString(),
    noOfUser: 0,
    role: '',
    noOfPermissions: permission?.permissions?.length || 0,
  })) || [];
  

  return (
    <Fragment>
      <DataTable
        data={SystemRoleList}
        columns={PermissionTableColumn}
      />
    </Fragment>
  );
}
