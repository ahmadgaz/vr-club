import Image from "next/image";
import React, { useState } from "react";
import planets from "../assets/images/planets.png";
import heroImage from "../assets/images/hero-image.png";

export default function Bg() {
  const [isLoadedPlanets, setIsLoadedPlanets] = useState<boolean>(false);
  const [isLoadedBgGradient, setIsLoadedBgGradient] = useState<boolean>(false);

  return (
    <>
      {/* Mobile backdrop */}
      <div className="absolute h-[600px] w-full bg-gradient-to-b from-black to-transparent opacity-50 md:hidden"></div>

      {/* Planets */}
      <div className=" absolute right-0 top-[0px] -z-10 pt-20">
        <Image
          src={planets}
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
      <div className="absolute top-[700px] -z-20 flex w-full justify-center opacity-50 blur-[50px]">
        <div className="flex w-[300px] max-w-[50%] max-md:flex-col">
          <div className="flex flex-1 justify-center">
            <div
              id="radial-gradient"
              className="absolute aspect-square w-[600px] max-w-full"
            ></div>
          </div>
          <div className="flex flex-1 justify-center">
            <div
              id="radial-gradient"
              className=" absolute aspect-square w-[600px] max-w-full max-md:mt-[200px]"
            ></div>
          </div>
          <div className="flex flex-1 justify-center md:hidden">
            <div
              id="radial-gradient"
              className=" absolute aspect-square w-[600px] max-w-full max-md:mt-[400px]"
            ></div>
          </div>
          <div className="flex flex-1 justify-center md:hidden">
            <div
              id="radial-gradient"
              className=" absolute aspect-square w-[600px] max-w-full max-md:mt-[600px]"
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
        } absolute -z-30 h-[100vh] w-[100vw] object-cover object-bottom  blur-[150px]  transition-opacity duration-500  ease-in-out`}
        onLoadingComplete={() => {
          setIsLoadedBgGradient(true);
        }}
      />
    </>
  );
}
