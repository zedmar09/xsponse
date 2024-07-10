"use client";
import PageHeading from "@/src/components/xsponse/text/page-heading";
import {
  Breadcrumbs,
  BreadcrumbItem,
} from "@/src/components/xsponse/ui/breadcrumbs";
import { Card, CardContent, CardHeader } from "@/src/components/xsponse/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/xsponse/ui/tabs";
import UserCard from "./user_card";
import AccountInfo from "../account_info";
import CustomerOverviewDataTable from "../overview-data-table";
import EventAndLogsDataTable from "../event-and-logs-data-table";
import CustomerDeviceDataTable from "../device-data-table";
import {useOne} from "@refinedev/core"
import { Suspense } from "react";


const CustomerInfo = ({
  params: {id},
}: {params: {id: number}}) => {
  const {data, isLoading} = useOne({
    resource: `/api/accounts/customer`,
    id: id.toString()
  })


  return (
    <Suspense>
      <div className="mb-5">
        <div className="w-full flex flex-wrap">
          <div className="lg:w-1/2 md:w-full sm:w-full xs:w-full">
            <PageHeading
              title="Customer Information"
              subtitle="This module allows you to manage a customer"
            />
          </div>
          <div className="lg:w-1/2 md:w-full sm:w-full xs:w-full flex justify-end">
            <Breadcrumbs>
              <BreadcrumbItem>Users Management</BreadcrumbItem>
              <BreadcrumbItem>Customers</BreadcrumbItem>
              <BreadcrumbItem className="text-primary">
                Customer Profile
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap">
        <div className="lg:w-1/3 md:w-full sm:w-full xs:w-full p-2">
          <UserCard data={data?.data?.data}/>
        </div>
        <div className="lg:w-2/3 md:w-full sm:w-full xs:w-full p-2">
          <Card className="p-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid md:w-full lg:w-2/3 grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="eventandlog">Event and Log</TabsTrigger>
                <TabsTrigger value="device">Device</TabsTrigger>
                <TabsTrigger value="accountinformation">
                  Account Information
                </TabsTrigger>
              </TabsList>

              <div className="border border-dashed border-default-200 my-5"></div>       
              <TabsContent value="overview">
                <CustomerOverviewDataTable />
              </TabsContent>
              <TabsContent value="eventandlog">
                <EventAndLogsDataTable />
              </TabsContent>
              <TabsContent value="device">
                <CustomerDeviceDataTable />
              </TabsContent>
              <TabsContent value="accountinformation" className="p-5">
                <AccountInfo customerData={data?.data?.data} />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </Suspense>
  );
};

export default CustomerInfo;
