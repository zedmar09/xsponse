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
import {Suspense} from 'react';
import ApplicationDealer from "../../../../dealer-application/page";


export default function Dealer() {
  return (
    <Suspense>
      <div className="mb-5">
        <div className="flex justify-between w-full">
          <div className="w-full">
            <PageHeading
              title="Dealer Profile"
              subtitle="This module allows you to manage the profile of a dealer."
            />
          </div>
          <div className="w-full flex justify-end">
            <Breadcrumbs>
              <BreadcrumbItem>Users Management</BreadcrumbItem>
              <BreadcrumbItem >Dealers</BreadcrumbItem>
              <BreadcrumbItem >Partially Approved</BreadcrumbItem>
              <BreadcrumbItem className="text-primary">Dealer Profile</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <ApplicationDealer />
    </Suspense>
  );
};


