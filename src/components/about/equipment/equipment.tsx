import React, { useState } from "react";
import Button from "../../button";
import Content from "./content";
import Carousel from "./carousel";

import Image from "next/image";
import { assets, links } from "~/assets/data";

export default function Equipment() {
  const [isLoadedBgGradient, setIsLoadedBgGradient] = useState<boolean>(false);

  return (
    <div id="fade-in" className="relative mb-8 flex w-[100vw] justify-center">
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
      <div className="relative z-10 flex h-fit min-h-[700px] w-[1200px] max-w-full flex-col  ">
        <Content />
        <div className="mt-10 flex w-full flex-1 flex-col flex-wrap items-center justify-stretch px-5 md:px-20 ">
          <Carousel />
          <div className="body-font mt-5 max-w-full text-center font-azo-sans text-[12pt] font-bold italic text-[#E1E0E2]">
            <p>
              Get your hands on this and much more as a{" "}
              <b className="text-[#D3A309]">member</b> of the AR/VR Club @ SJSU!
            </p>
          </div>
          <div className="mt-4 h-[60px] w-96 max-w-full">
            <Button
              link={links.discord}
              text="JOIN OUR DISCORD"
              color="#D3A309"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
