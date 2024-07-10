import { Fragment } from "react";

import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { UpdateManagerList } from "@/src/components/xsponse/data-table/data/update-manager-list";
import { UpdateManagerTableColumn } from "./update-manager-table-column";

export default function UpdateManagerDataTable() {
 
  return (
    <Fragment>
      <DataTable
        data={UpdateManagerList}
        columns={UpdateManagerTableColumn}
      />
    </Fragment>
  );
}
