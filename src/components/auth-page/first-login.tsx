"use client";
import { useState } from "react";
import { Button } from "@/src/components/xsponse/ui/button";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import { cn } from "@/src/lib/utils";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "@/src/hooks/use-media-query";
import React from "react";
import XsponseLogo from "@/public/xsponse/xsponse_logo.svg";

const FirstLoginChangePass = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");

  const togglePasswordType = () => {
    setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  const toggleConfirmPasswordType = () => {
    setConfirmPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        <XsponseLogo width="50%" height={50} />
      </div>

      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
        Change Password
      </div>
      <div className="text-base text-default-400 mt-2 leading-6">
        You need to change your password upon first login.
      </div>

      <form className="2xl:mt-3 mt-3">
        <div className="relative mt-6">
          <Input
            removeWrapper
            type={passwordType === "password" ? "password" : "text"}
            id="password"
            name="password"
            size={!isDesktop2xl ? "xl" : "lg"}
            placeholder="New Password"
            className={cn("peer")}
          />
          <Label
            htmlFor="password"
            className={cn(
              "absolute text-base rounded-t text-default-600 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1",
              {
                "text-sm": isDesktop2xl,
              }
            )}
          >
            Enter New Password
          </Label>
          <div
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
            onClick={togglePasswordType}
          >
            {passwordType === "password" ? (
              <Icon icon="heroicons:eye" className="w-4 h-4 text-default-400" />
            ) : (
              <Icon
                icon="heroicons:eye-slash"
                className="w-4 h-4 text-default-400"
              />
            )}
          </div>
        </div>
        <div className="relative mt-4">
          <Input
            removeWrapper
            type={confirmPasswordType === "password" ? "password" : "text"}
            id="confirm-password"
            name="confirm-password"
            size={!isDesktop2xl ? "xl" : "lg"}
            placeholder="Confirm Password"
            className={cn("peer")}
          />
          <Label
            htmlFor="confirm-password"
            className={cn(
              "absolute text-base rounded-t text-default-600 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1",
              {
                "text-sm": isDesktop2xl,
              }
            )}
          >
            Confirm New Password
          </Label>
          <div
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
            onClick={toggleConfirmPasswordType}
          >
            {confirmPasswordType === "password" ? (
              <Icon icon="heroicons:eye" className="w-4 h-4 text-default-400" />
            ) : (
              <Icon
                icon="heroicons:eye-slash"
                className="w-4 h-4 text-default-400"
              />
            )}
          </div>
        </div>
        <Button className="w-full mt-5">
            Change Password
        </Button>
      </form>
    </div>
  );
};

export default FirstLoginChangePass;