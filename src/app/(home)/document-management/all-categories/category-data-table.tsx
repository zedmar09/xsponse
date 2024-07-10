import { Fragment } from "react";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import DocumentCategoryList from "@/src/components/xsponse/data-table/data/document-category-list";
import { CategoryTableColumn } from "./category-table-column";

export default function CategoryDataTable() {
 
  return (
    <Fragment>
      <DataTable
        data={DocumentCategoryList}
        columns={CategoryTableColumn}
      />
    </Fragment>
  );
}
