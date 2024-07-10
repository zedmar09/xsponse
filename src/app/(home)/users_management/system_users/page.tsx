"use client";
import Link from "next/link";
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
import { Button } from "@/src/components/xsponse/ui/button";
import { Icon } from "@iconify/react";
import PageHeading from "@/src/components/xsponse/text/page-heading";
import SystemUserDataTable from "./system-user-data-table";
import PermissionDataTable from "../roles_and_permission/permission-data-table";
import SystemUsersFilters from "./system-users-filters";
import PermissionFilters from "../roles_and_permission/permission-filters";

const SystemUsers = () => {
  return (
    <>
      <div className="mb-5">
        <div className="flex justify-between w-full">
          <div className="w-full">
            <PageHeading
              title="System Users"
              subtitle="This module allows you to manage system users."
            />
          </div>
          <div className="w-full flex justify-end">
            <Breadcrumbs>
              <BreadcrumbItem>Users Management</BreadcrumbItem>
              <BreadcrumbItem className="text-primary">
                System Users
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <Card className="p-4">
        <Tabs defaultValue="systemusers" className="w-full">
          <TabsList className="grid md:w-full lg:w-1/2 grid-cols-2">
            <TabsTrigger value="systemusers">System Users</TabsTrigger>
            <TabsTrigger value="rolespermissions">
              System Roles/Permissions
            </TabsTrigger>
          </TabsList>

          <div className="border border-dashed border-default-200 my-5"></div>
          <TabsContent value="systemusers">
            <SystemUsersFilters />
            <SystemUserDataTable />
          </TabsContent>
          <TabsContent value="rolespermissions">
            <PermissionFilters />
            <PermissionDataTable />
          </TabsContent>
        </Tabs>
      </Card>
    </>
  );
};

export default SystemUsers;
