"use client";
import { Suspense } from "react";
import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";

import DashboardProvider from "@/src/provider/dashboard.layout.provider"
import { Inter } from "next/font/google";
import { siteConfig } from "@/src/config/site";
import { getDictionary } from "@/src/components/dictionaries";


export default async function IndexPage() {
  const trans = await getDictionary("en");
  return (
  <Suspense>
      <Authenticated key="home-page">
        <NavigateToResource />
      </Authenticated>
    </Suspense>
  );
}
