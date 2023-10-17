import React from "react";
import Image from "next/image";
import Content from "./content";
import Card from "./card";
import { aboutUsCards } from "~/assets/data";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();

  return (
    <div
      id="fade-in"
      className="relative z-20 mb-8 mt-20 flex w-[100vw] justify-center max-md:mt-10"
    >
      {/* Circle gradients */}
      <div className="absolute top-[20px] -z-20 flex w-full justify-center opacity-50 blur-[30px]">
        <div className="flex w-[600px] max-w-[50%] max-md:flex-col">
          <div className="flex flex-1 justify-center">
            <div
              id="radial-gradient"
              className="absolute aspect-square w-[600px] max-w-full md:max-w-[50%]"
            ></div>
          </div>
          <div className="flex flex-1 justify-center">
            <div
              id="radial-gradient"
              className=" absolute aspect-square w-[600px] max-w-full max-md:mt-[200px] md:max-w-[50%]"
            ></div>
          </div>
          <div className="flex flex-1 justify-center md:hidden">
            <div
              id="radial-gradient"
              className=" absolute aspect-square w-[600px] max-w-full max-md:mt-[400px] md:max-w-[50%]"
            ></div>
          </div>
          <div className="flex flex-1 justify-center md:hidden">
            <div
              id="radial-gradient"
              className=" absolute aspect-square w-[600px] max-w-full max-md:mt-[600px] md:max-w-[50%]"
            ></div>
          </div>
        </div>
      </div>

      <div className="relative flex h-fit min-h-[700px] w-[1200px] max-w-full flex-col ">
        <Content />
        <div className="mt-10 flex w-full flex-1 flex-wrap items-stretch justify-stretch pl-5 md:pl-24 md:pr-12">
          <Card
            onPress={() => {
              window.scrollBy({
                top: 600,
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
              router.push("/projects");
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
          <Card
            onPress={() => {
              router.push("/events");
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
        </div>
      </div>
    </div>
  );
}
