"use client";
import PageHeading from "@/src/components/xsponse/text/page-heading";
import { Breadcrumbs, BreadcrumbItem } from "@/src/components/xsponse/ui/breadcrumbs";
import { Card } from "@/src/components/xsponse/ui/card";
import { Suspense } from "react";
import UpdateManagerFilters from "./update-manager-filters";
import UpdateManagerDataTable from "./update-manager-data-table";

export default function UpdateManager() {
  return (
    <Suspense>
      <div className="mb-5">
        <div className="flex justify-between w-full">
          <div className="w-full">
            <PageHeading
              title="Update Manager"
              subtitle="This module allows you to manage updates for each device"
            />
          </div>
          <div className="w-full flex justify-end">
            <Breadcrumbs>
              <BreadcrumbItem>Update Manager</BreadcrumbItem>
              <BreadcrumbItem className="text-primary">All Devices</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <Card className="p-5">
        
        <UpdateManagerFilters />
        <UpdateManagerDataTable />
      </Card>
    </Suspense>
  );
}
