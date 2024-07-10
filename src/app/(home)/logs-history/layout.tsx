import DashboardPageView from "@/src/app/(home)/dashboard/page-view";
import { getDictionary } from "@/src/components/dictionaries";
import DashboardLayoutProvider from "@/src/provider/dashboard.layout.provider";
import { authProviderServer } from "@/src/providers/auth-provider";
import { redirect } from "next/navigation";
import React from "react";
import { Suspense } from "react";

export default async function Layout({ children }: React.PropsWithChildren) {
  const { authenticated, redirectTo } = await getData();

  if (!authenticated) {
    return redirect(redirectTo || "/login");
  }

  const trans = await getDictionary("en");

  return (
    <Suspense>
    <DashboardLayoutProvider trans={trans}>
      {children}
    </DashboardLayoutProvider>
    </Suspense>
  );
}

async function getData() {
  const { authenticated, redirectTo } = await authProviderServer.check();
  return {
    authenticated,
    redirectTo,
  };
}