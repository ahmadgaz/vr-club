import Head from "next/head";
import React, { lazy, Suspense } from "react";

const ResourcesComponent = lazy(
  () => import("~/components/resources/resources/resources")
);

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources</title>
        <meta name="description" content="VR-Club - Resources" />
      </Head>
      <main className="relative flex min-h-[95vh] min-w-full flex-col">
        <Suspense>
          <ResourcesComponent />
        </Suspense>
      </main>
    </>
  );
}
