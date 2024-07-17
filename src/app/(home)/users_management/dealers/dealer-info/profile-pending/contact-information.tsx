"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import RequiredLabel from "@/src/components/xsponse/ui/required_label";
import { Separator } from "@/src/components/xsponse/ui/separator";

import { PhoneInput } from "@/src/components/xsponse/ui/phone-input";
import { Textarea } from "@/src/components/xsponse/ui/textarea";

const ContactInformation: React.FC = () => {
  

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="2xl:text-xl text-xl text-default-900">
          Contact Information
        </div>
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Your Name <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Your Name" required />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Email Address <RequiredLabel />
          </Label>
          <Input type="email" placeholder="Email Address" required />
        </div>

        <div className="col-span-1 lg:col-span-2 mb-2">
        <Label className="mb-2">
                Contact Number <RequiredLabel />
              </Label>
              <PhoneInput
                placeholder="Enter Contact Number"
                defaultCountry="US"
              />
            </div>

     
            <div className="col-span-1 lg:col-span-2 mb-2">
          <Label className="mb-2">
            Message <RequiredLabel />
          </Label>
          <Textarea rows={8} placeholder="Message" required />
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
