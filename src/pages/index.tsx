import Head from "next/head";
import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const Bg = lazy(() => import("~/components/bg"));
const Hero = lazy(() => import("~/components/home/hero"));
const AboutUs = lazy(() => import("~/components/about/aboutUs"));
const Equipment = lazy(() => import("~/components/about/equipment"));
const Footer = lazy(() => import("~/components/footer"));

// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const equipmentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState<number>(2000);
  const [aboutUsHeight, setAboutUsHeight] = useState<number>(2000);
  const [equipmentHeight, setEquipmentHeight] = useState<number>(2000);
  const [footerHeight, setFooterHeight] = useState<number>(2000);

  const handleSetHeroHeight = useCallback((node: HTMLDivElement) => {
    if (node) {
      console.log(node?.offsetHeight);
      setHeroHeight(node?.offsetHeight);
    }
  }, []);
  const handleSetAboutUsHeight = useCallback((node: HTMLDivElement) => {
    if (node) {
      console.log(node?.offsetHeight);
      setAboutUsHeight(node?.offsetHeight);
    }
  }, []);
  const handleSetEquipmentHeight = useCallback((node: HTMLDivElement) => {
    if (node) {
      console.log(node?.offsetHeight);
      setEquipmentHeight(node?.offsetHeight);
    }
  }, []);

  const listenToScroll = useCallback(() => {
    setScrollPosition(window.scrollY + 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [listenToScroll]);

  return (
    <>
      <Head>
        <title>VR Club SJSU</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="relative flex min-h-[100dvh] min-w-full flex-col">
        <Suspense>
          <Bg />
          <div ref={handleSetHeroHeight}>
            <Hero />
          </div>
          {scrollPosition > heroHeight &&
          scrollPosition < heroHeight + aboutUsHeight ? (
            <div ref={handleSetAboutUsHeight}>
              <AboutUs />
            </div>
          ) : (
            <div style={{ height: `${aboutUsHeight}px` }}></div>
          )}
          {scrollPosition > heroHeight + aboutUsHeight &&
          scrollPosition < heroHeight + aboutUsHeight + equipmentHeight ? (
            <div ref={handleSetEquipmentHeight}>
              <Equipment />
            </div>
          ) : (
            <div style={{ height: `${equipmentHeight}px` }}></div>
          )}
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
