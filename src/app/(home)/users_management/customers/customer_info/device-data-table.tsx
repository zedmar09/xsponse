import { Fragment } from "react";
import { CustomerDeviceTableColumns } from "./device-table-column";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { customerDeviceList } from "@/src/components/xsponse/data-table/data/customer-device";

export default function CustomerDeviceDataTable() {
  return (
    <Fragment>
      <DataTable
        data={customerDeviceList}
        columns={CustomerDeviceTableColumns}
      />
    </Fragment>
  );
}
