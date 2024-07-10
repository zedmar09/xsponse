"use client";
import React from "react";
import columns from "./columns";
import { sampleData } from "./sample-data";
import DataTable from "../data-table/data-table";

const RolesAndPermissionsTable: React.FC = () => {
  return <DataTable columns={columns} data={sampleData} />;
};

export default RolesAndPermissionsTable;
