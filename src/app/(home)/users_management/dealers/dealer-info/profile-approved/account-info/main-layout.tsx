"use client";
import * as React from "react";
import CompanyInfo from "./company-info";
import AddressInformation from "./address-info";
import PrimaryContact from "./primary-contact";
import SecondaryContact from "./secondary-contact";
import PartnerInfo from "./partner-info";
import VerticalSpecialty from "./vertical-specialty";
import OtherInfo from "./other-info";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
      <div className="col-span-1 lg:col-span-1">
        <CompanyInfo />
      </div>

      <div className="col-span-1 lg:col-span-1">
        <AddressInformation />
      </div>

      <div className="col-span-1 lg:col-span-1">
        <PrimaryContact />
      </div>

      <div className="col-span-1 lg:col-span-1">
        <SecondaryContact />
      </div>

      <div className="col-span-1 lg:col-span-1">
        <PartnerInfo />
      </div>

      <div className="col-span-1 lg:col-span-1">
       <VerticalSpecialty />
      </div>

      <div className="col-span-1 lg:col-span-2">
       <OtherInfo />
      </div>
     
    </div>
  );
};

export default MainLayout;
