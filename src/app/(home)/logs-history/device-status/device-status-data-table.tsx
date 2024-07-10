import { Fragment } from "react";

import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import DeviceStatusData from "@/src/components/xsponse/data-table/data/device-status-data";
import { DeviceStatusTableColumn } from "./device-status-table-column";

export default function DeviceStatusDataTable() {
 
  return (
    <Fragment>
      <DataTable
        data={DeviceStatusData}
        columns={DeviceStatusTableColumn}
      />
    </Fragment>
  );
}
