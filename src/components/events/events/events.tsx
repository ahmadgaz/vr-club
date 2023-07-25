import React, { useState } from "react";
import Content from "./content";
import Card from "./card";
import Button from "~/components/button";

import Image from "next/image";
import { assets, eventsCards } from "~/assets/data";

export default function Events() {
  const [isLoadedBgGradient, setIsLoadedBgGradient] = useState<boolean>(false);

  return (
    <div
      id="fade-in"
      className="body-font relative mb-8 flex w-[100vw] justify-center overflow-visible font-azo-sans"
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
        } absolute -z-30 h-full  w-[100vw] overflow-hidden  object-bottom transition-opacity duration-[1500ms] ease-in-out max-md:blur-[75px] md:blur-[100px] xl:blur-[300px]`}
        onLoadingComplete={() => {
          setIsLoadedBgGradient(true);
        }}
      />
      <div className="relative z-10 flex h-fit min-h-[400px] w-[1200px] max-w-full flex-col ">
        <Content />
        <div className="mt-10 flex  max-md:flex-col max-md:items-center md:flex-wrap md:justify-center md:px-20">
          {eventsCards.map((card, index) => {
            return (
              <Card
                key={index}
                variant={index % 3}
                title={card.title}
                desc={card.description}
                location={card.location}
                date={new Date(card.date).getTime()}
                link={card.link}
              />
            );
          })}
        </div>
        <div className="flex w-full flex-1 flex-col flex-wrap items-center justify-stretch px-10 md:px-20 ">
          <div className="body-font mt-5 max-w-full text-center font-azo-sans text-[12pt] font-bold italic text-[#E1E0E2]">
            <p>
              Sign up to our <b className="text-[#d87575]">newsletter</b> and
              stay up to date on the latest news and events!
            </p>
          </div>
          <div className="mt-4 flex h-[60px] w-[600px] max-w-full max-md:h-[130px] max-md:flex-col">
            <input
              placeholder="email@example.com"
              className="flex-1 rounded-xl p-4"
            />{" "}
            <div className="max-md:mt-4 md:ml-4 md:w-40">
              <Button link="" text="SIGN UP" color="#d87575" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
