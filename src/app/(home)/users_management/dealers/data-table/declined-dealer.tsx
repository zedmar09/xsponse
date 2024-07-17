"use client";
import { Fragment } from "react";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { DealerList } from "@/src/components/xsponse/data-table/data/dealer/dealer-list";
import { Declined } from "../data-table-columns/declined-dealer";

export default function DeclinedDealerDataTable() {

  return (
    <Fragment>
      <DataTable
        data={DealerList}
        columns={Declined}
      />
    </Fragment>
  );
}
