"use client";
import * as React from "react";
import { Checkbox } from '@/src/components/xsponse/ui/checkbox';
import RequiredLabel from "@/src/components/xsponse/ui/required_label";
import { Separator } from "@/src/components/xsponse/ui/separator";



const ApplicationSpecialty = () => {

    const categories = [
        'Advertising/Marketing', 'Agriculture', 'Automotive', 'Banking & Finance',
        'Casino/Gaming', 'City Surveillance', 'Commercial', 'Commercial Real Estate',
        'Corrections', 'Data Centers', 'Defense/Military', 'Education', 'Federal Government - Non US',
        'Federal Government - US', 'Federal Healthcare', 'Healthcare', 'Highway/Traffic', 
        'Hospitality', 'Law Enforcement', 'Logistics & Freight', 'Manufacturing/Industrial/Technology',
        'Oil & Gas', 'Other', 'Pharmaceutical/Chemical & Bio Research', 'Residential', 'Retail', 
        'Sports & Leisure', 'State/Local Government', 'Stock', 'Transportation', 'Utilities/Energy/Mining'
      ];
      

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="2xl:text-xl text-xl text-default-900">
          Vertical Specialty <RequiredLabel />
        </div>
      </div>

      <Separator className="my-4" />       
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {categories.map((category, index) => (
        <div key={index} className="flex items-center">
          <Checkbox id={`checkbox_${index}`}>
            {category}
          </Checkbox>
        </div>
      ))}
    </div>
    </>
  );
};

export default ApplicationSpecialty;
