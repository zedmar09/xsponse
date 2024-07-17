"use client";
import { Fragment } from "react";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { DealerList } from "@/src/components/xsponse/data-table/data/dealer/dealer-list";
import { ApprovedDealer } from "../data-table-columns/approved-dealer";

export default function PendingDealerDataTable() {

  return (
    <Fragment>
      <DataTable
        data={DealerList}
        columns={ApprovedDealer}
      />
    </Fragment>
  );
}
