"use client";
import {
  Breadcrumbs,
  BreadcrumbItem,
} from "@/src/components/xsponse/ui/breadcrumbs";
import { Button } from "@/src/components/xsponse/ui/button";
import PageHeading from "@/src/components/xsponse/text/page-heading";
import { Icon } from "@iconify/react";
import CompanyInformation from "./company-information";
import ContactInformation from "./contact-information";

const BasicTabs = () => {
  return (
    <>
      <div className="mb-5">
        <div className="flex justify-between w-full">
          <div className="w-full">
            <PageHeading
              title="Add Dealer"
              subtitle="This module allows you to add a dealer."
            />
          </div>
          <div className="w-full flex justify-end">
            <Breadcrumbs>
              <BreadcrumbItem>Users Management</BreadcrumbItem>
              <BreadcrumbItem>Dealer List</BreadcrumbItem>
              <BreadcrumbItem className="text-primary">Add New Dealer</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      {/* <div className="w-full flex justify-end mb-5">
        <Button className="mr-3" color="success">
          <Icon icon="flowbite:check-circle-solid" className="w-6 h-6 mr-2  " />
          Accept
        </Button>

        <Button>
          <Icon icon="bxs:x-circle" className="w-6 h-6 mr-2  " color = 'destructive' />
          Decline
        </Button>
      </div> */}

<form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  <div className="col-span-1">
    <CompanyInformation />
  </div>
  <div className="col-span-1">
    <ContactInformation />
  </div>
  <div className="col-span-full w-full flex justify-end mb-5">
    <Button className="mr-3" color="success" type="submit">
      <Icon icon="flowbite:check-circle-solid" className="w-6 h-6 mr-2" />
      Save
    </Button>
    <Button>
      <Icon icon="bxs:x-circle" className="w-6 h-6 mr-2" color='destructive' />
      Cancel
    </Button>
  </div>
</form>

    </>
  );
};

export default BasicTabs;