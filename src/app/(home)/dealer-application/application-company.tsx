"use client";
import * as React from "react";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import RequiredLabel from "@/src/components/xsponse/ui/required_label";
import { Separator } from "@/src/components/xsponse/ui/separator";
import { PhoneInput } from "@/src/components/xsponse/ui/phone-input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/src/components/xsponse/ui/select";


const ApplicationCompany = () => {

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="2xl:text-xl text-xl text-default-900">
          Company Information
        </div>
      </div>

      <Separator className="my-4" />
    
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        <div className="col-span-1 lg:col-span-2 mb-2">
        <Label className="mb-2">
            Company Name <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Company Name" required />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Company Phone <RequiredLabel />
          </Label>
          <PhoneInput placeholder="Enter Company Phone" defaultCountry="US" />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Business Type <RequiredLabel />
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Select Business Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Integrator">Integrator</SelectItem>
              <SelectItem value="Distributor">Distributor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Number of Employees <RequiredLabel />
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Select Business Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-24">1-24</SelectItem>
              <SelectItem value="25-49">25-49</SelectItem>
              <SelectItem value="50-99">50-99</SelectItem>
              <SelectItem value="100-249">100-249</SelectItem>
              <SelectItem value="Medium 250-500">Medium 250-500</SelectItem>
              <SelectItem value="Large 500-100">Large 500-100</SelectItem>
              <SelectItem value="Enterprise > 1000">Enterprise &gt; 1000</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Number of Technician <RequiredLabel />
          </Label>
          <Input type="number" placeholder="Enter Number of Technician" required />
        </div>
      </div>  
        
    
    </>
  );
};

export default ApplicationCompany;
