import React, { useState } from "react";
import Content from "./content";
import Card from "./card";
import heroImage from "../../../assets/images/hero-image.png";
import Image from "next/image";

export default function MeetOurTeam() {
  const [isLoadedBgGradient, setIsLoadedBgGradient] = useState<boolean>(false);

  return (
    <div
      id="fade-in"
      className="body-font relative mb-8 flex w-[100vw] justify-center font-azo-sans"
    >
      <Image
        src={heroImage}
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
      <div className="relative flex h-fit min-h-[400px] w-[1200px] max-w-full flex-col ">
        <Content />
        <div className="mt-10 flex  max-md:flex-col max-md:items-center md:flex-wrap md:justify-center md:px-20">
          <Card name="Dexter Allen" title="President" />
          <Card name="Kyle Nguyen" title="Vice President" />
          <Card name="Cosmo Maddux" title="Treasurer" />
        </div>
      </div>
    </div>
  );
}
