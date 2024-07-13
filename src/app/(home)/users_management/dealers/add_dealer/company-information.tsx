"use client";

import { Card, CardContent, CardHeader } from "@/src/components/xsponse/ui/card";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/src/components/xsponse/ui/select";
import RequiredLabel from "@/src/components/xsponse/ui/required_label";


const CompanyInformation = () => {
  return (
    <>
       <Card className="mb-5">
        <CardHeader>
        <p className="mb-2 text-lg text-default-700  font-medium">
              Company Information
            </p>
        </CardHeader>
        <CardContent>
        <div className="flex flex-col mb-5">
          <Label className="mb-2">
            Company Name <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter Company Name " required />
        </div>

        <div className="flex flex-col mb-5">
          <Label className="mb-2">
            Company Website <RequiredLabel />
          </Label>
          <Input type="url" placeholder="Enter Company Website" required />
        </div>

        <div className="flex flex-col">
          <Label className="mb-2">
            Key Offering Interested In <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter  Key Offering Interested In" required />
        </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
        <p className="mb-2 text-lg text-default-700  font-medium">
              Address Information
            </p>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

        <div className="col-span-1 lg:col-span-2 mb-2">
        <Label className="">
            Address Line 1 <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter Address Line 1 " required />
        </div>

        <div className="col-span-1 lg:col-span-2 mb-2">
        <Label className="">
            Address Line 2
          </Label>
          <Input type="text" placeholder="Enter Address Line 2 " />
        </div>


        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            State <RequiredLabel />
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Florida</SelectItem>
              <SelectItem value="2">California</SelectItem>
              <SelectItem value="3">Texas</SelectItem>
              <SelectItem value="4">Ohio</SelectItem>
              <SelectItem value="5">North Carolina</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            City <RequiredLabel />
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">New York</SelectItem>
              <SelectItem value="2">Yonkers</SelectItem>
              <SelectItem value="3">Buffalo</SelectItem>
              <SelectItem value="4">Albany</SelectItem>
              <SelectItem value="5">Utica</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Street Name <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter Street Name" required />
        </div>
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Zip Code <RequiredLabel />
          </Label>
          <Input type="email" placeholder="Enter Zip Code" required />
        </div>
      </div>
        </CardContent>
      </Card>

    </>
  );
};

export default CompanyInformation;

