"use client";
import * as React from "react";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import { PhoneInput } from "@/src/components/xsponse/ui/phone-input";
import RequiredLabel from "@/src/components/xsponse/ui/required_label";
import { Separator } from "@/src/components/xsponse/ui/separator";
import { jobTitle } from "@/src/components/xsponse/data-table/data/job-title";
import ComboBox from "@/src/components/xsponse/ui/combo-box";

const ApplicationPrimary = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="2xl:text-xl text-xl text-default-900">
          Primary Contact Information
        </div>
      </div>

      <Separator className="my-4" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        <div className="col-span-1 lg:col-span-2 mb-2">
          <Label className="mb-2">
            Job Title <RequiredLabel />
          </Label>
          <ComboBox items={jobTitle} placeholder="Select Job Title" />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            First Name <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter First Name" required />
        </div>
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Last Name <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter Last Name" required />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Email <RequiredLabel />
          </Label>
          <Input type="email" placeholder="Enter Email" required />
        </div>
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Contact Number <RequiredLabel />
          </Label>
          <PhoneInput placeholder="Enter Contact Number" defaultCountry="US" />
        </div>

       
      </div>
    </>
  );
};

export default ApplicationPrimary;
