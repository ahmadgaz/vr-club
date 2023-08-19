import React, { useState } from "react";
import Content from "./content";
import Carousel from "./carousel";

import Image from "next/image";
import { assets } from "~/assets/data";

export default function Projects() {
  const [isLoadedBgGradient, setIsLoadedBgGradient] = useState<boolean>(false);

  return (
    <div id="fade-in" className=" relative mb-8 flex w-[100vw] justify-center ">
      <Image
        src={assets.bgImageBlurGradient}
        width={100}
        height={100}
        id="hero-image"
        alt="hero-image"
        loading="lazy"
        className={`${
          isLoadedBgGradient ? "opacity-100" : "opacity-0"
        } absolute -z-30 h-full  w-[100vw] overflow-hidden   object-bottom transition-opacity duration-[1500ms] ease-in-out max-md:blur-[75px] md:blur-[100px] xl:blur-[300px]`}
        onLoadingComplete={() => {
          setIsLoadedBgGradient(true);
        }}
      />
      <div className="relative z-10 flex h-fit min-h-[700px] w-[1200px] max-w-full flex-col ">
        <Content />
        <div className="mt-10 flex w-full flex-1 flex-col flex-wrap items-center justify-stretch px-5 md:px-20 ">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
