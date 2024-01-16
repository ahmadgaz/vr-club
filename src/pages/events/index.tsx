import Head from "next/head";
import React from "react";
import EventsComponent from "~/components/events/events/events";

export default function Events() {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="VR-Club - Events" />
      </Head>
      <main className="relative flex min-h-[95vh] min-w-full flex-col">
        <EventsComponent />
      </main>
    </>
  );
}
