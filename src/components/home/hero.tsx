import Image from "next/image";
import React, { useState } from "react";
import heroGraphic from "../../assets/images/hero-graphic.svg";
import starBorder from "../../assets/images/star-border-home.svg";
import Button from "../button";

export default function Hero() {
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  return (
    <div id="fade-in" className="h-[875px] pt-32 max-md:hidden">
      {/* Gradients */}
      <div className="absolute left-[-25dvw] min-w-[150dvw] overflow-hidden  blur-[60px] ">
        <div>
          <div className="from-26% h-52 w-full bg-gradient-to-r from-[#401E27] to-[#F05A26] to-100%"></div>
          <div className="via-26% to-81% h-52 w-full bg-gradient-to-r from-[#131028] from-0% via-[#5373D4]  to-[#F05A26]"></div>
          <div className="from-18% h-52 w-full bg-gradient-to-r from-[#430000] to-[#EC1E27] to-100%"></div>
        </div>
      </div>
      {/* Image */}
      <div className="absolute right-0">
        {" "}
        <Image
          src={heroGraphic as string}
          alt="hero-graphic"
          className={`${
            isLoadedImage ? "opacity-100" : "opacity-0"
          } w-[1100px] transition-all duration-200 ease-in-out`}
          onLoadingComplete={() => {
            setIsLoadedImage(true);
          }}
        />
      </div>
      {/* Conditional backdrop */}
      <div className="absolute min-w-[100dvw] overflow-hidden opacity-30 blur-[60px]  xl:hidden  ">
        <div>
          <div className="h-52 w-full bg-black"></div>
          <div className="h-52 w-full bg-black"></div>
          <div className="h-52 w-full bg-black"></div>
        </div>
      </div>
      {/* Text */}
      <div className="body-font absolute  w-full pl-32 pt-20 font-azo-sans font-light tracking-tight text-[#E1E0E2] ">
        <div className="relative">
          <div className="text-[96px]">
            <p>Imagination</p>
            <p className="leading-[3rem]">Meets</p>
            <p className="leading-[8rem]">
              <b className="font-black">Innovation.</b>
            </p>
          </div>
          <Image
            src={starBorder as string}
            alt="star-border-home"
            className="absolute -left-14 -top-2 min-w-[721px]"
          />
          <div className="w-[550px] pl-2 pt-10 text-[24px]">
            <p>
              Welcome to the official website of the AR/VR club at San Jose
              State University.
            </p>
          </div>
          <div className="pl-2 pt-6">
            <span>
              <Button text="EXPLORE" />
            </span>
            <span className="ml-7">
              <Button text="JOIN" variant="glass" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
