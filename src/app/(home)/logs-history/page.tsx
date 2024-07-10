"use client";
import PageHeading from "@/src/components/xsponse/text/page-heading";
import { Breadcrumbs, BreadcrumbItem } from "@/src/components/xsponse/ui/breadcrumbs";
import { Card } from "@/src/components/xsponse/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/xsponse/ui/tabs";

import { Suspense } from "react";
import EventLogsFilter from "./event-logs/event-logs-filters";
import EventLogsDataTable from "./event-logs/event-logs-data-table";
import DeviceStatusFilters from "./device-status/device-status-filters";
import DeviceStatusDataTable from "./device-status/device-status-data-table";


export default function UpdateManager() {
  return (
    <Suspense>
      <div className="mb-5">
        <div className="flex justify-between w-full">
          <div className="w-full">
            <PageHeading
              title="Logs and History"
              subtitle="This module allows you to manage logs and history"
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

      <Card className="p-4">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid md:w-full lg:w-1/2 grid-cols-4">
            <TabsTrigger value="active">
              Event Logs
            </TabsTrigger>
            <TabsTrigger value="inactive">
              Device Status Monitoring
            </TabsTrigger>
          </TabsList>
          <div className="border border-dashed border-default-200 my-5"></div>
          <TabsContent value="active">
           <EventLogsFilter />
           <EventLogsDataTable />
          </TabsContent>
          <TabsContent value="inactive">
            <DeviceStatusFilters />
            <DeviceStatusDataTable />
          </TabsContent>
        </Tabs>
      </Card>
    </Suspense>
  );
}
