"use client";
import { Badge } from "@/src/components/xsponse/ui/badge";
import { Separator } from "@/src/components/xsponse/ui/separator";
import React from "react";

const ApplicationTitle = () => { 
  return (
    <>
  
    <div className="w-full flex flex-col">
      <div className="2xl:text-3xl text-2xl font-bold text-default-900">
       Dealer Application Form 
       <Badge color="warning" className="ml-3">Submitted: Waiting for Approval</Badge>
       {/* <Badge color="secondary" className="ml-3">Pending Application</Badge>
       <Badge color="destructive" className="ml-3">Submitted: Application Declined</Badge> */}
      </div>
      <div className="text-base text-default-400 mt-2 leading-6">
        Please fill out this form and wait for approval.
      </div>

      <Separator className="my-4" />

      <div className="text-base mt-2 leading-6">
       <span className="text-default-400">Dealer Email:</span> <span className="text-primary font-bold">dealersample@xsponse.com</span>
      </div>
    </div>
 
    </>
  );
};

export default ApplicationTitle;