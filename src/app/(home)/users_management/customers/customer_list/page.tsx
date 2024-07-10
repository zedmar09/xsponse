"use client";
import PageHeading from "@/src/components/xsponse/text/page-heading";
import { Breadcrumbs, BreadcrumbItem} from "@/src/components/xsponse/ui/breadcrumbs";
import { Card} from "@/src/components/xsponse/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/xsponse/ui/tabs";
import CustomerDataTable from "./customer-data-table";
import CustomerFilters from "./customer-filters";
import { Suspense } from "react";

export default async function CustomerList() {
  return (
    <Suspense>
      <div className="mb-5">
        <div className="flex justify-between w-full">
          <div className="w-full">
            <PageHeading
              title="Customer List"
              subtitle="This module allows you to manage customers"
            />
          </div>
          <div className="w-full flex justify-end">
            <Breadcrumbs>
              <BreadcrumbItem>Users Management</BreadcrumbItem>
              <BreadcrumbItem className="text-primary">Customers</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <Card className="p-4">
      <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid md:w-full lg:w-1/2 grid-cols-4">
               <TabsTrigger value="active">
                Active
              </TabsTrigger>
              <TabsTrigger value="inactive">
                In-Active
              </TabsTrigger>
            </TabsList>  
            <div className="border border-dashed border-default-200 my-5"></div>       
            <TabsContent value="active">
             <CustomerFilters />
             <CustomerDataTable />
            </TabsContent>
            <TabsContent value="inactive">
            <CustomerFilters />
            <CustomerDataTable />
            </TabsContent>
          </Tabs>
      </Card>
    </Suspense>
  );
};