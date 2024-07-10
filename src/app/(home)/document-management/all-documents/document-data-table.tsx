import { Fragment } from "react";

import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import DocumentList from "@/src/components/xsponse/data-table/data/document-list";
import { DocumentTableColumn } from "./document-table-column";

export default function DocumentDataTable() {
 
  return (
    <Fragment>
      <DataTable
        data={DocumentList}
        columns={DocumentTableColumn}
      />
    </Fragment>
  );
}
