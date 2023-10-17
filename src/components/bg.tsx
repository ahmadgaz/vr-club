import Image from "next/image";
import React, { useState } from "react";
import { assets } from "~/assets/data";
import gradient from "public/gradient.png";

export default function Bg() {
  const [isLoadedPlanets, setIsLoadedPlanets] = useState<boolean>(false);
  const [isLoadedBgGradient, setIsLoadedBgGradient] = useState<boolean>(false);

  return (
    <>
      {/* Planets */}
      <div className=" absolute right-0 top-[0px] -z-10 px-10 pt-20 md:hidden">
        <Image
          src={assets.heroBgImageMobile}
          alt="hero-graphic-mobile"
          width={100}
          height={100}
          unoptimized
          className={`${
            isLoadedPlanets ? "opacity-100" : "opacity-0"
          }  w-[100vw] object-contain transition-all duration-500 ease-in-out `}
          onLoadingComplete={() => {
            setIsLoadedPlanets(true);
          }}
        />
      </div>
      <div className=" absolute right-0 top-[0px] -z-10 pt-20 max-md:hidden">
        <Image
          src={assets.heroBgImage}
          alt="hero-graphic"
          width={100}
          height={100}
          unoptimized
          className={`${
            isLoadedPlanets ? "opacity-100" : "opacity-0"
          }  w-[1000px] max-w-[100vw] object-contain transition-all duration-500 ease-in-out`}
          onLoadingComplete={() => {
            setIsLoadedPlanets(true);
          }}
        />
      </div>

      {/* BG Gradient */}
      <Image
        src={gradient}
        id="hero-image"
        alt="hero-image"
        width={100}
        height={100}
        loading="lazy"
        className={`${
          isLoadedBgGradient ? "opacity-100" : "opacity-0"
        } absolute top-0 -z-30 h-[100vh] max-h-[100vh]  w-[100vw] overflow-hidden   object-bottom blur-[75px] brightness-125 transition-opacity duration-[1500ms] ease-in-out `}
        onLoadingComplete={() => {
          setIsLoadedBgGradient(true);
        }}
      />
    </>
  );
}
