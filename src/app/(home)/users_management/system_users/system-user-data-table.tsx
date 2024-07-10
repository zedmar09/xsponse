import { Fragment } from "react";
import { SystemUserList } from "@/src/components/xsponse/data-table/data/system-user-list";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { SystemUserTableColumns, Task } from "./system-user-table-column";
import { useList } from "@refinedev/core";

export default function SystemUserDataTable() {
  const { data, isLoading, error } = useList({
    resource: "/api/accounts",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const userList: Task[] = data?.data.map((user): Task => ({
    userId: user?.id?.toString(),
    user: `${user?.first_name} ${user?.last_name}`,
    username: user?.user_name,
    role: user?.role,
    status: user?.status,
  })) || [];

  
  return (
    <Fragment>
      <DataTable
        data={userList}
        columns={SystemUserTableColumns}
      />
    </Fragment>
  );
}
