import React, { useState } from "react";
import Content from "./content";
import Card from "./card";
import Image from "next/image";
import { assets, resourcesCards } from "~/assets/data";

export default function Resources() {
  const [isLoadedBgGradient, setIsLoadedBgGradient] = useState<boolean>(false);

  return (
    <div
      id="fade-in"
      className="body-font  relative mb-8 flex w-[100vw] justify-center overflow-visible font-azo-sans"
    >
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
      <div className="relative z-10 flex h-fit min-h-[400px] w-[1200px] max-w-full flex-col ">
        <Content />
        <div className="mt-10 flex  max-md:flex-col max-md:items-center md:flex-wrap md:justify-center md:px-20">
          {resourcesCards.map((card, index) => {
            return (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                desc={card.description}
                link={card.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
