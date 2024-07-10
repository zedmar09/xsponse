import { DevtoolsProvider } from "@/src/providers/devtools";
import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import React, { Suspense } from "react";

import { authProvider } from "@/src/providers/auth-provider";
import { dataProvider } from "@/src/providers/data-provider";

import "@/src/styles/scss/globals.scss";
import "@/src/styles/scss/theme.scss";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";


import { NavigateToResource } from "@refinedev/nextjs-router";
import TanstackProvider from "@/src/provider/providers.client";
import Providers from "@/src/provider/providers"
import DirectionProvider from "@/src/provider/direction.provider"

export const metadata: Metadata = {
  title: "XSPONSE",
  description: "On-Demand Project",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <Suspense>
        <TanstackProvider>
          <Providers>
            <DirectionProvider lang="en"> 
          <RefineKbarProvider>
            <Refine
              routerProvider={routerProvider}
              dataProvider={dataProvider}
              authProvider={authProvider}
              resources={[
                {
                  name: "dashboard",
                  show: "/dashboard",
                },
                {
                  name: "dealer",
                  list: "/users_management/dealers",
                  show: "/users_management/dealer/dealer_info/:id",
                  meta: {
                    canDelet: true,
                  },
                },
                {
                  name: "customers",
                  list: "/user_management/customers/customer_list",
                  show: "/user_management/customers/customer_info/:id"
                }
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "XyJHn5-c3hzle-tLfUfs",
              }}
            >
              {children}
              <RefineKbar />
            </Refine>
          </RefineKbarProvider>
          </DirectionProvider>
          </Providers>
          </TanstackProvider>
        </Suspense>
        
      </body>
    </html>
  );
}
