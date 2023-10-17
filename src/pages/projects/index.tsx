import Head from "next/head";
import React, { lazy, Suspense } from "react";

const Projects = lazy(() => import("~/components/projects/projects/projects"));

export default function Home() {
  return (
    <>
      <Head>
        <title>VR Club SJSU</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="relative flex min-h-[95dvh] min-w-full flex-col">
        <Suspense>
          <Projects />
        </Suspense>
      </main>
    </>
  );
}
