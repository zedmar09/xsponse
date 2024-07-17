"use client";
import { Fragment } from "react";
import { DataTable } from "@/src/components/xsponse/data-table/components/data-table";
import { DealerList } from "@/src/components/xsponse/data-table/data/dealer/dealer-list";
import { PartialApproved } from "../data-table-columns/partial-approved-dealer";

export default function PartialApproveDealerDataTable() {

  return (
    <Fragment>
      <DataTable
        data={DealerList}
        columns={PartialApproved}
      />
    </Fragment>
  );
}
