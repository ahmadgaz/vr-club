import Image from "next/image";
import React, { useState } from "react";
import heroGraphic from "../../assets/images/hero-graphic.svg";
import starBorder from "../../assets/images/star-border-home.svg";
import Button from "../button";

export default function Hero() {
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  return (
    <>
      <div id="fade-in" className="h-[875px] w-[100dvw] max-md:hidden">
        {/* Gradients
        <div className="absolute left-0 top-0 w-[100dvw] overflow-hidden blur-[120px] ">
          <div className="from-26% h-52 w-full bg-gradient-to-r from-[#863d50] to-[#F05A26] to-100%"></div>
          <div className="via-26% to-81% h-52 w-full bg-gradient-to-r from-[#4c4194] from-0% via-[#5373D4]  to-[#F05A26]"></div>
          <div className="from-18% h-52 w-full bg-gradient-to-r from-[#ac2a2a] to-[#EC1E27] to-100%"></div>
        </div> */}
        {/* Image */}
        <div className="absolute right-0 pt-32">
          {" "}
          <Image
            src={heroGraphic as string}
            alt="hero-graphic"
            className={`${
              isLoadedImage ? "opacity-100" : "opacity-0"
            } w-[800px] transition-all duration-200 ease-in-out`}
            onLoadingComplete={() => {
              setIsLoadedImage(true);
            }}
          />
        </div>
        {/* Text */}
        <div className="body-font absolute  w-full pl-32 pt-32 font-azo-sans font-light tracking-tight text-[#E1E0E2] max-lg:pl-20 ">
          <div className="relative">
            <div className="text-[48pt]">
              <p>Imagination</p>
              <p className="leading-[3rem]">Meets</p>
              <p className="leading-[5rem]">
                <b className="font-black">Innovation.</b>
              </p>
            </div>
            <Image
              src={starBorder as string}
              alt="star-border-home"
              className="absolute -left-14 -top-0 w-[500px] min-w-[500px]"
            />
            <div className="w-[550px] pl-1 pt-10 text-[16pt]">
              <p>
                Welcome to the official website of the AR/VR club at San Jose
                State University.
              </p>
            </div>
            <div className="pl-1 pt-6">
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
      <div id="fade-in" className="h-[875px] w-[100dvw] md:hidden">
        {/* Gradients
        <div className="absolute left-0 top-0 w-[100dvw] overflow-hidden blur-[120px] ">
          <div className="from-26% h-52 w-full bg-gradient-to-r from-[#863d50] to-[#F05A26] to-100%"></div>
          <div className="via-26% to-81% h-52 w-full bg-gradient-to-r from-[#4c4194] from-0% via-[#5373D4]  to-[#F05A26]"></div>
          <div className="from-18% h-52 w-full bg-gradient-to-r from-[#ac2a2a] to-[#EC1E27] to-100%"></div>
        </div> */}
      </div>
    </>
  );
}
