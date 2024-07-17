"use client";
import { Fragment } from "react";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { DealerList } from "@/src/components/xsponse/data-table/data/dealer/dealer-list";
import { PendingDealer } from "../data-table-columns/pending-dealer";

export default function PendingDealerDataTable() {

  return (
    <Fragment>
      <DataTable
        data={DealerList}
        columns={PendingDealer}
      />
    </Fragment>
  );
}
