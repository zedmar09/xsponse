"use client";
import React, { ReactNode } from "react";
import { Button } from "@/src/components/xsponse/ui/button";
import auth3Light from "@/public/images/auth/auth3-light.png";
import auth3Dark from "@/public/images/auth/auth3-dark.png";
import Image from "next/image";
import XsponseLogo from "@/public/xsponse/xsponse_logo.svg";
import ApplicationCompany from "./application-company";
import ContactInformation from "./contact-information";
import ApplicationTitle from "../../../../dealer-application/application-title";


interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => (
  <div className="w-full flex justify-center items-center z-10">
    <div className="bg-background py-5 w-full max-w-custom rounded-md relative 2xl:p-8 xl:p-5 p-5 m-4" style={{ maxWidth: "1500px" }}>
      {children}
    </div>
  </div>
);

export default function ProfilePending() {
  return (
    <div className="loginwrapper flex flex-col justify-center items-center relative overflow-hidden min-h-screen pb-10">
      <Image
        src={auth3Dark}
        alt="background image"
        className="absolute top-0 left-0 w-full h-full light:hidden object-cover"
      />
      <Image
        src={auth3Light}
        alt="background image"
        className="absolute top-0 left-0 w-full h-full dark:hidden object-cover"
      />
      <div className="w-full flex justify-center items-center z-10 mb-4 mt-10">
        <XsponseLogo width="50%" height={50} />
      </div>

      <form>

      <SectionWrapper>
         <ApplicationTitle />
        </SectionWrapper>

        <SectionWrapper>
         <ApplicationCompany />
        </SectionWrapper>

        <SectionWrapper>
        <ContactInformation />
        </SectionWrapper>

        <div className="w-full flex justify-center items-center z-10">
          <div className="w-full flex justify-end z-10">

          <Button className="mr-3" color="success" type="submit">
              Approve Application
            </Button>

          <Button className="mr-3" color="destructive">
              Decline Application
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
