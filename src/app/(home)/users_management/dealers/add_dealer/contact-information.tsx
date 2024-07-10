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


const ContactInformation = () => {
  return (
    <>
       

      <Card className="mb-5">
        <CardHeader>
        <p className="mb-2 text-lg text-default-700  font-medium">
              Primary Contact Information
            </p>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

        <div className="col-span-1 lg:col-span-2 mb-2">
        <Label className="">
            Title <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter Title " required />
        </div>

       
        
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            First Name <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter  First Name" required />
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
          <Input type="email" placeholder="Enter Contact Number" required />
        </div>

        
      </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
        <p className="mb-2 text-lg text-default-700  font-medium">
              Secondary Contact Information
            </p>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        
        <div className="col-span-1 lg:col-span-2 mb-2">
        <Label className="">
            Title <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter Title " required />
        </div>

        

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            First Name <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter  First Name" required />
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
          <Input type="email" placeholder="Enter Contact Number" required />
        </div>

        
      </div>
        </CardContent>
      </Card>

    </>
  );
};

export default ContactInformation;

