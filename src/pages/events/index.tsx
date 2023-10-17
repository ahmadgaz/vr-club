import Head from "next/head";
import React, { lazy, Suspense } from "react";

const Events = lazy(() => import("~/components/events/events/events"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="relative flex min-h-[95dvh] min-w-full flex-col">
        <Suspense>
          <Events />
        </Suspense>
      </main>
    </>
  );
}
