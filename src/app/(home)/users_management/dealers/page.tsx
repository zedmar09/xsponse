"use client";
import { Card } from "@/src/components/xsponse/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/xsponse/ui/tabs";
import {
  Breadcrumbs,
  BreadcrumbItem,
} from "@/src/components/xsponse/ui/breadcrumbs";
import PageHeading from "@/src/components/xsponse/text/page-heading";
import DealerDataTable from "./dealer-data-table";
import DealerFilters from "./dealer-filters";
import {Suspense} from 'react';

export default async function Dealer() {
  return (
    <Suspense>
      <div className="mb-5">
        <div className="flex justify-between w-full">
          <div className="w-full">
            <PageHeading
              title="All Dealers"
              subtitle="This module allows you to manage a dealer."
            />
          </div>
          <div className="w-full flex justify-end">
            <Breadcrumbs>
              <BreadcrumbItem>Users Management</BreadcrumbItem>
              <BreadcrumbItem className="text-primary">Dealers</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <Card className="p-4">
        <Tabs defaultValue="Dealer_List" className="w-full">
          <TabsList className="grid md:w-full lg:w-1/2 grid-cols-4">
            <TabsTrigger value="Dealer_List">Dealer List</TabsTrigger>
            <TabsTrigger value="Partially_Approved">
              Partially Approved
            </TabsTrigger>
            <TabsTrigger value="Pending_Application">
              Pending Application
            </TabsTrigger>
            <TabsTrigger value="Declined_Application">
              Declined Application
            </TabsTrigger>
          </TabsList>

          <div className="border border-dashed border-default-200 my-5"></div>       
          <TabsContent value="Dealer_List">
            <DealerFilters />
            <DealerDataTable />
          </TabsContent>
          <TabsContent value="Partially_Approved">
          <DealerFilters />
            <DealerDataTable />
          </TabsContent>
          <TabsContent value="Pending_Application">
          <DealerFilters />
            <DealerDataTable />
          </TabsContent>
          <TabsContent value="Declined_Application">
          <DealerFilters />
            <DealerDataTable />
          </TabsContent>
        </Tabs>
      </Card>
    </Suspense>
  );
};


