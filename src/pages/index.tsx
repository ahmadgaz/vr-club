import Head from "next/head";
import React, { lazy, Suspense } from "react";

const Hero = lazy(() => import("~/components/home/hero/hero"));

export default function Home() {
  return (
    <>
      <Head>
        <title>VR Club SJSU</title>
        <meta
          name="description"
          content="The Official AR/VR Club at San José State University"
        />
      </Head>
      <main className="relative flex min-h-[95vh] min-w-full flex-col">
        <Suspense>
          <Hero />
        </Suspense>
      </main>
    </>
  );
}
