import React, { useState } from "react";
import Content from "./content";
import Card from "./card";
import Button from "~/components/button";
import heroImage from "../../../assets/images/hero-image.png";

import Image from "next/image";

export default function Events() {
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
        } absolute -z-30 h-full  w-[100vw] overflow-hidden  object-bottom transition-opacity duration-[1500ms] ease-in-out max-md:blur-[75px] md:blur-[100px] xl:blur-[300px]`}
        onLoadingComplete={() => {
          setIsLoadedBgGradient(true);
        }}
      />
      <div className="relative flex h-fit min-h-[400px] w-[1200px] max-w-full flex-col ">
        <Content />
        <div className="mt-10 flex  max-md:flex-col max-md:items-center md:flex-wrap md:justify-center md:px-20">
          <Card
            variant={0}
            title="AR/VR Club General Meeting"
            desc="During this meeting, we will go over the summer roadmap, you will meet fellow team members and we will begin working with unity."
            location="375 South 9th St San Jose, CA 95112"
            date={Date.now()}
            link=""
          />
          <Card
            variant={1}
            title="Unity workshop"
            desc="We will go over everything you need to know to create your first virtual reality game, from the basics of Unity all the way to porting your game into a headset (Headsets will be provided). The meeting will  be approximately 3 hours with an intermission in the middle."
            location="150 E San Fernando St San Jose, CA 95112 KLEVR Lab"
            date={Date.now()}
            link=""
          />
          <Card
            variant={2}
            title="AR/VR Social"
            desc="Experience the future of technology. Join the SJSU Virtual Reality Club to create, learn, and explore with like minded students. Don't miss out, become a part of the VR Club today!"
            location="375 South 9th St San Jose, CA 95112"
            date={Date.now()}
            link=""
          />
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
