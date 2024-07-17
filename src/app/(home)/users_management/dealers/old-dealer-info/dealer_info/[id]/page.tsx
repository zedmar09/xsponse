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
import CustomerOverviewDataTable from "@/src/app/(home)/users_management/customers/customer_info/overview-data-table";
import UserCard from "./user_card";
import {useOne} from "@refinedev/core"
import { Suspense } from "react";

const DealerInformation = ({
  params: {id},
}: {params: {id: number}}) => {

  const {data, isLoading} = useOne({
    resource: `/api/accounts/dealer`,
    id: id.toString()
  })

  console.log(data)
  return (
    <Suspense>
      <div className="mb-5">
        <div className="w-full flex flex-wrap">
          <div className="lg:w-1/2 md:w-full sm:w-full xs:w-full">
            <PageHeading
              title="Dealer Information"
              subtitle="This module allows you to manage a dealer."
            />
          </div>
          <div className="lg:w-1/2 md:w-full sm:w-full xs:w-full flex justify-end">
            <Breadcrumbs>
              <BreadcrumbItem>Users Management</BreadcrumbItem>
              <BreadcrumbItem>Dealer List</BreadcrumbItem>
              <BreadcrumbItem className="text-primary">
                Dealer Profile
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap">
        <div className="lg:w-1/3 md:w-full sm:w-full xs:w-full p-2">
          <UserCard data={data?.data?.data} />
        </div>
        <div className="lg:w-2/3 md:w-full sm:w-full xs:w-full p-2">
          <Card className="p-4 w-full">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid md:w-full  grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="shippinginfo">Shipping Information</TabsTrigger>
                <TabsTrigger value="paymentmethods">Payment Methods</TabsTrigger>
                  <TabsTrigger value="accountinformation">
                  Account Information
                </TabsTrigger>
                <TabsTrigger value="device">Logs</TabsTrigger>
              </TabsList>

              <div className="border border-dashed border-default-200 my-5"></div>       
              <TabsContent value="overview">
                <CustomerOverviewDataTable />
              </TabsContent>
              <TabsContent value="shippinginfo">
                List of All Shipping Address Options
              </TabsContent>
              <TabsContent value="paymentmethods">
                List of All Payment Method Options
              </TabsContent>
              <TabsContent value="accountinformation" className="p-5">
                Dealer Account Information
              </TabsContent>
              <TabsContent value="logs" className="p-5">
                List of All Event Logs
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </Suspense>
  );
};

export default DealerInformation;