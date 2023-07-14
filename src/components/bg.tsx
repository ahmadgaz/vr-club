import Image from "next/image";
import React, { useState } from "react";
import gradient from "../assets/images/gradient.png";
import planets from "../assets/images/planets.png";
import heroImage from "../assets/images/hero-image.png";

export default function Bg() {
  const [isLoadedImage, setIsLoadedImage] = useState<boolean>(false);
  const [isLoadedGradient, setIsLoadedGradient] = useState<boolean>(false);

  const [isLoadedHeroImage, setIsLoadedHeroImage] = useState<boolean>(false);

  return (
    <>
      <div className="absolute h-[600px] w-full bg-gradient-to-b from-black to-transparent opacity-50 md:hidden"></div>

      {/* Gradient */}
      {/* <Image
        src={gradient}
        alt="hero-graphic"
        className={`${
          isLoadedGradient ? "opacity-100" : "opacity-0"
        } absolute top-[50px] -z-40  h-[800px] w-[100vw]  blur-[100px] transition-all  duration-500 ease-in-out`}
        onLoadingComplete={() => {
          setIsLoadedGradient(true);
        }}
      /> */}

      {/* Planets */}
      <div className=" absolute right-0 top-[0px] -z-10 pt-20">
        <Image
          src={planets}
          alt="hero-graphic"
          className={`${
            isLoadedImage ? "opacity-100" : "opacity-0"
          }  w-[1000px] max-w-[100vw] object-contain transition-all duration-500 ease-in-out`}
          onLoadingComplete={() => {
            setIsLoadedImage(true);
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
      {/* BG Image */}
      <Image
        src={heroImage}
        id="hero-image"
        alt="hero-image"
        loading="lazy"
        className={`${
          isLoadedHeroImage ? "opacity-100" : "opacity-0"
        } absolute -z-30 w-[100vw] object-cover object-bottom  blur-[100px]  transition-opacity duration-500  ease-in-out`}
        onLoadingComplete={() => {
          setIsLoadedHeroImage(true);
        }}
      />
    </>
  );
}
