import React, { useState } from "react";
import Content from "./content";
import Card from "./card";
import Image from "next/image";
import heroImage from "../../../assets/images/hero-image.png";

export default function Resources() {
  const [isLoadedBgGradient, setIsLoadedBgGradient] = useState<boolean>(false);

  return (
    <div
      id="fade-in"
      className="body-font relative mb-8 flex w-[100vw] justify-center overflow-visible font-azo-sans"
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
          <Card
            title="KLEVR Lab"
            desc="During this meeting, we will go over the summer roadmap, you will meet fellow team members and we will begin working with unity."
            link=""
          />
          <Card
            title="JMC Storytelling Lab"
            desc="We will go over everything you need to know to create your first virtual reality game, from the basics of Unity all the way to porting your game into a headset (Headsets will be provided). The meeting will  be approximately 3 hours with an intermission in the middle."
            link=""
          />
          <Card
            title="Unity 3D Engine"
            desc="Experience the future of technology. Join the SJSU Virtual Reality Club to create, learn, and explore with like minded students. Don't miss out, become a part of the VR Club today!"
            link=""
          />
        </div>
      </div>
    </div>
  );
}
