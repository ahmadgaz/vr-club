import Head from "next/head";
import React, { lazy, Suspense } from "react";
import AboutUs from "~/components/about/aboutUs/aboutUs";

const Equipment = lazy(() => import("~/components/about/equipment/equipment"));
const MeetOurTeam = lazy(
  () => import("~/components/about/meetOurTeam/meetOurTeam")
);

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="VR-Club - About Us" />
      </Head>
      <main className="relative flex min-h-[95vh] min-w-full flex-col">
        <Suspense>
          <AboutUs />
          <Equipment />
          <MeetOurTeam />
        </Suspense>
      </main>
    </>
  );
}
