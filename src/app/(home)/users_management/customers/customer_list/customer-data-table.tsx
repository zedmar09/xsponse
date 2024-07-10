import { Fragment } from "react";
import { CustomerTableColumns , Task} from "./customer-table-columns";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { customerList } from "@/src/components/xsponse/data-table/data/customer-list";
import { useList } from "@refinedev/core";

export default function CustomerDataTable() {
  const { data, isLoading, error } = useList({
    resource: "/api/accounts/customer",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const customerList: Task[] = data?.data.map((customer): Task => ({
    customerId: customer?.id?.toString(),
    customerName: `${customer?.user?.first_name} ${customer?.user?.last_name}`,
    email: customer?.user?.email,
    dealerName: customer?.dealer?.company_name,
    //applicationDate: "NO BACKEND", // or convert to Date if needed
  })) || [];

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Fragment>
      <DataTable
        data={customerList}
        columns={CustomerTableColumns}
      />
    </Fragment>
  );
}
