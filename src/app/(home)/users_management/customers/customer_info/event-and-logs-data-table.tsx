import { Fragment } from "react";
import { EventAndLogsTableColumns } from "./event-and-logs-columns";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { customerOverviewAndEvents } from "@/src/components/xsponse/data-table/data/customer-overview-and-events";

export default function EventAndLogsDataTable() {
  return (
    <Fragment>
      <DataTable
        data={customerOverviewAndEvents}
        columns={EventAndLogsTableColumns}
      />
    </Fragment>
  );
}
