import React from "react";
import Image from "next/image";
import Content from "./content";
import Card from "./card";
import { useAppContext } from "~/context/context";
import { aboutUsCards } from "~/assets/data";

export default function AboutUs() {
  const { equipmentHeight, eventsHeight, projectsHeight } = useAppContext();

  return (
    <div
      id="fade-in"
      className=" relative z-10 mb-8 flex w-[100vw] justify-center"
    >
      <div className="relative flex h-fit min-h-[700px] w-[1200px] max-w-full flex-col ">
        <Content />
        <div className="mt-10 flex w-full flex-1 flex-wrap items-stretch justify-stretch pl-5 md:pl-24 md:pr-12">
          <Card
            onPress={() => {
              window.scrollTo({
                top: equipmentHeight.pos - 50,
                behavior: "smooth",
              });
            }}
          >
            <Image
              src={aboutUsCards[0]?.icon as string}
              width={100}
              height={100}
              className="mb-1 h-10 w-10 object-contain"
              alt="puzzle-icon"
            />
            <div className="text-[12pt]">
              <p>Hands-on</p>
              <p className="leading-[1rem]">
                <b className="font-black">Experiences</b>
              </p>
              <p className="mt-2 text-[10pt] ">
                {aboutUsCards[0]?.description as string}
              </p>
            </div>
          </Card>
          <Card
            onPress={() => {
              window.scrollTo({
                top: eventsHeight.pos - 50,
                behavior: "smooth",
              });
            }}
          >
            <Image
              src={aboutUsCards[1]?.icon as string}
              width={100}
              height={100}
              className="mb-1 h-10 w-10 object-contain"
              alt="light-icon"
            />
            <div className="text-[12pt]">
              <p>Interactive</p>
              <p className="leading-[1rem]">
                <b className="font-black">Learning</b>
              </p>
              <p className="mt-2 text-[10pt] ">
                {aboutUsCards[1]?.description as string}
              </p>
            </div>
          </Card>
          <Card
            onPress={() => {
              window.scrollTo({
                top: projectsHeight.pos - 50,
                behavior: "smooth",
              });
            }}
          >
            <Image
              src={aboutUsCards[2]?.icon as string}
              width={100}
              height={100}
              className="mb-1 h-10 w-10 object-contain"
              alt="canvas-icon"
            />
            <div className="text-[12pt]">
              <p>Creative</p>
              <p className="leading-[1rem]">
                <b className="font-black">Projects</b>
              </p>
              <p className="mt-2 text-[10pt] ">
                {aboutUsCards[2]?.description as string}{" "}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
