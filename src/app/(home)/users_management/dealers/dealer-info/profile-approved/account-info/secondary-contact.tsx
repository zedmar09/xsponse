"use client";
import * as React from "react";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import RequiredLabel from "@/src/components/xsponse/ui/required_label";
import { Separator } from "@/src/components/xsponse/ui/separator";
import { PhoneInput } from "@/src/components/xsponse/ui/phone-input";
import { Card, CardContent } from "@/src/components/ui/card";

import ComboBox from "@/src/components/xsponse/ui/combo-box";
import { jobTitle } from "@/src/components/xsponse/data-table/data/job-title";

const SecondaryContact = () => {
  return (
    <>
    <Card>
      <CardContent>
        <div className="w-full flex flex-col pt-5">
          <div className="2xl:text-xl text-xl text-default-900">
            Secondary Contact Information
          </div>
        </div>

        <Separator className="my-4" />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
          <div className="flex flex-col mb-2">
            <Label className="mb-2">
              Title <RequiredLabel />
            </Label>
            <Input type="text" placeholder="Enter Title " required />
          </div>

          <div className="flex flex-col mb-2">
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
            <PhoneInput
              placeholder="Enter Contact Number"
              defaultCountry="US"
            />
          </div>
        </div>
      </CardContent>
    </Card>
    </>
  );
};

export default SecondaryContact;
