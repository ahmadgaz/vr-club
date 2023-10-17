import React, { useEffect, useState } from "react";
import Content from "./content";
import Card from "./card";

import Image from "next/image";
import { assets, links } from "~/assets/data";
import { api } from "~/utils/api";

export default function Events() {
  const [isLoadedBgGradient, setIsLoadedBgGradient] = useState<boolean>(false);
  const { data, error, isLoading } = api.events.getAll.useQuery();

  return (
    <div
      id="fade-in"
      className="body-font relative mb-8  mt-36 flex w-[100vw] justify-center  overflow-visible font-azo-sans max-md:mt-24"
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
          {!isLoading &&
            !error &&
            data &&
            (data?.length > 0 ? (
              <>
                {data.map((card, index) => {
                  return (
                    <Card
                      key={index}
                      variant={index % 3}
                      title={card.title}
                      desc={card.description ? card.description : ""}
                      location={card.location ? card.location : ""}
                      date={new Date(card.date).getTime()}
                      link={card.link ? card.link : links.discord}
                    />
                  );
                })}
              </>
            ) : (
              <div className="body-font mt-5 max-w-full text-center font-azo-sans text-[12pt] font-bold  text-[#E1E0E2]">
                No upcoming events.
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
