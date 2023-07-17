import Image from "next/image";
import React, { useState } from "react";
import planets1 from "../assets/images/planets1.png";
import planets2 from "../assets/images/planets2.png";
import heroImage from "../assets/images/hero-image.png";

export default function Bg() {
  const [isLoadedPlanets, setIsLoadedPlanets] = useState<boolean>(false);
  const [isLoadedBgGradient, setIsLoadedBgGradient] = useState<boolean>(false);

  return (
    <>
      {/* Planets */}
      <div className=" absolute right-0 top-[0px] -z-10 px-10 pt-20 md:hidden">
        <Image
          src={planets2}
          alt="hero-graphic"
          className={`${
            isLoadedPlanets ? "opacity-100" : "opacity-0"
          }  w-[100vw] object-contain transition-all duration-500 ease-in-out `}
          onLoadingComplete={() => {
            setIsLoadedPlanets(true);
          }}
        />
      </div>
      <div className=" absolute right-0 top-[0px] -z-10 pt-20 max-md:hidden">
        <Image
          src={planets1}
          alt="hero-graphic"
          className={`${
            isLoadedPlanets ? "opacity-100" : "opacity-0"
          }  w-[1000px] max-w-[100vw] object-contain transition-all duration-500 ease-in-out`}
          onLoadingComplete={() => {
            setIsLoadedPlanets(true);
          }}
        />
      </div>

      {/* Circle gradients */}
      <div className="absolute top-[750px] -z-20 flex w-full justify-center opacity-50 blur-[40px]">
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

      {/* BG Gradient */}
      <Image
        src={heroImage}
        id="hero-image"
        alt="hero-image"
        loading="lazy"
        className={`${
          isLoadedBgGradient ? "opacity-100" : "opacity-0"
        } absolute -z-30 h-[100vh]  w-[100vw] overflow-hidden   object-bottom transition-opacity duration-[1500ms] ease-in-out max-md:blur-[75px] md:blur-[100px] xl:blur-[300px]`}
        onLoadingComplete={() => {
          setIsLoadedBgGradient(true);
        }}
      />
    </>
  );
}
