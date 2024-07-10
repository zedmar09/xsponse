"use client";
import { useState } from "react";
import { Button } from "@/src/components/xsponse/ui/button";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import { Loader2 } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Icon } from "@iconify/react";
import { Checkbox } from "@/src/components/xsponse/ui/checkbox";
import { useMediaQuery } from "@/src/hooks/use-media-query";
import React from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useLogin } from "@refinedev/core";
import { FormEvent } from "react";
import Image from "next/image";
import XsponseLogo from "@/public/xsponse/xsponse_logo.svg";

type LoginProps = {
  onSignIn?: () => void;
};

const LoginForm: React.FC<LoginProps> = (props) => {
  const [isPending, startTransition] = React.useTransition();
  const { mutate: login, isLoading } = useLogin();
  const [passwordType, setPasswordType] = useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");

  const togglePasswordType = () => {
    setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    );

    console.log("Form Data: ", formData);

    login(formData, {
      onSuccess: (e) => {
        if (e.success) {
          toast.success("Login Successful");
          if (props.onSignIn) {
            props.onSignIn();
          } else {
            window.location.assign(e.redirectTo || "/dashboard");
          }
        } else {
          toast.error("Invalid email or password");
        }
      },
      onError: () => {
        toast.error("An unexpected error occurred.");
      },
    });
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        <XsponseLogo width="100%" height={100} />
      </div>

      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
        Hey, Hello 👋
      </div>
      <div className="2xl:text-lg text-base text-default-600 mt-2 leading-6">
        Enter the information you entered while registering.
      </div>

      <form onSubmit={onSubmit} className="2xl:mt-7 mt-8">
        <div className="relative">
          <Input
            removeWrapper
            type="email"
            id="email"
            name="email"
            size={!isDesktop2xl ? "xl" : "lg"}
            placeholder="Email"
            disabled={isLoading}
            className={cn("peer")}
          />
          <Label
            htmlFor="email"
            className={cn(
              "absolute text-base text-default-600 rounded-t duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1",
              {
                "text-sm": isDesktop2xl,
              }
            )}
          >
            Email
          </Label>
        </div>

        <div className="relative mt-6">
          <Input
            removeWrapper
            type={passwordType === "password" ? "password" : "text"}
            id="password"
            name="password"
            size={!isDesktop2xl ? "xl" : "lg"}
            placeholder="Password"
            disabled={isLoading}
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
            Password
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

        <div className="mt-5 mb-6 flex flex-wrap gap-2">
          <div className="flex-1 flex items-center gap-1.5">
            <Checkbox
              size="sm"
              className="border-default-300 mt-[1px]"
              id="isRemembered"
            />
            <Label
              htmlFor="isRemembered"
              className="text-sm text-default-600 cursor-pointer whitespace-nowrap"
            >
              Remember me
            </Label>
          </div>
          <Link href="#" className="flex-none text-sm text-primary">
            Forget Password?
          </Link>
        </div>
        <Button className="w-full mt-5" disabled={isLoading}>
          {isLoading && (
            <Loader2 className="ltr:mr-2 rtl:ml-2 h-4 w-4 animate-spin" />
          )}
          {isLoading ? "Loading..." : "Sign In"}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
