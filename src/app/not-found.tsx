"use client";

import { Authenticated, ErrorComponent } from "@refinedev/core";
import { Suspense } from "react";
import PageNotFound from "./page-not-found";

export default function NotFound() {
  return (
    <Suspense>
      <Authenticated key="not-found">
        {/* <ErrorComponent /> */}
        <PageNotFound />
      </Authenticated>
    </Suspense>
  );
}
