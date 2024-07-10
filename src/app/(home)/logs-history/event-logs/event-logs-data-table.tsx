import { Fragment } from "react";

import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import EventLogsData from "@/src/components/xsponse/data-table/data/event-logs-data";
import { EventLogsTableColumn } from "./event-logs-table-column";

export default function EventLogsDataTable() {
 
  return (
    <Fragment>
      <DataTable
        data={EventLogsData}
        columns={EventLogsTableColumn}
      />
    </Fragment>
  );
}
