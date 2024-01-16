import Head from "next/head";
import React from "react";
import Hero from "~/components/home/hero/hero";

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
        <Hero />
      </main>
    </>
  );
}
