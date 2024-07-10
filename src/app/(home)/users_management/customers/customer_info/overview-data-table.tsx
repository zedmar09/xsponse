import { Fragment } from "react";
import { CustomerOverviewTableColumns } from "./overview-table-columns";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { customerOverviewAndEvents } from "@/src/components/xsponse/data-table/data/customer-overview-and-events";

export default function CustomerOverviewDataTable() {
  return (
    <Fragment>
      <DataTable
        data={customerOverviewAndEvents}
        columns={CustomerOverviewTableColumns}
      />
    </Fragment>
  );
}
