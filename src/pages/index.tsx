import Head from "next/head";
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
      <main
        id="home-bg"
        className="from-80 to-80 duration-5000 opacity colors flex min-h-screen flex-col items-center justify-center opacity-80"
      ></main>
    </>
  );
}
