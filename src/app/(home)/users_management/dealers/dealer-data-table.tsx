"use client";
import { Fragment } from "react";
import { DealerTableColumns, Task } from "./dealer-table-columns";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { useList } from "@refinedev/core";

export default function DealerDataTable() {
  const { data, isLoading, error } = useList({
    resource: "/api/accounts/dealer",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const dealerList: Task[] = data?.data.map((dealer): Task => ({
    dealerId: dealer?.id?.toString(),
    dealerName: dealer?.company_name,
    dealerEmail: dealer?.email,
    keyInterest: dealer?.key_interest,
    primaryContact: dealer?.primary_contact_title,
    secondaryContact: dealer?.secondary_contact_title,
    //applicationDate: "NO BACKEND", // or convert to Date if needed
    pricingLevel: "DIAMOND",
  })) || [];

  return (
    <Fragment>
      <DataTable
        data={dealerList}
        columns={DealerTableColumns}
      />
    </Fragment>
  );
}
