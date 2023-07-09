import Head from "next/head";
import Footer from "~/components/footer";
import Hero from "~/components/home/hero";
// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>VR Club SJSU</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-[100dvh] min-w-full flex-col">
        <Hero />
        <Footer />
      </main>
    </>
  );
}
