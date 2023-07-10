import Image from "next/image";
import React, { useState } from "react";
import gradient from "../../assets/images/gradient.png";
import planets from "../../assets/images/planets.png";
import starBorder from "../../assets/images/star-border-home.png";
import starBorderMobile from "../../assets/images/star-border-home-mobile.png";
import heroGraphicMobile from "../../assets/images/hero-graphic-mobile.png";
import Button from "../button";

export default function Hero() {
  const [isLoadedGraphic, setIsLoadedGraphic] = useState(false);
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const [isLoadedGradient, setIsLoadedGradient] = useState(false);
  const [isLoadedStarBorder, setIsLoadedStarBorder] = useState(false);
  const [isLoadedStarBorderMobile, setIsLoadedStarBorderMobile] =
    useState(false);

  return (
    <>
      <div
        id="fade-in"
        className="relative flex w-[100dvw] justify-center max-md:hidden"
      >
        {/* Gradients
        <div className="absolute left-0 top-0 w-[100dvw] overflow-hidden blur-[120px] ">
          <div className="from-26% h-52 w-full bg-gradient-to-r from-[#863d50] to-[#F05A26] to-100%"></div>
          <div className="via-26% to-81% h-52 w-full bg-gradient-to-r from-[#4c4194] from-0% via-[#5373D4]  to-[#F05A26]"></div>
          <div className="from-18% h-52 w-full bg-gradient-to-r from-[#ac2a2a] to-[#EC1E27] to-100%"></div>
        </div> */}
        {/* Image */}
        <div className="absolute">
          {" "}
          <Image
            src={gradient}
            alt="hero-graphic"
            className={`${
              isLoadedGradient ? "opacity-100" : "opacity-0"
            } h-[800px] max-h-[100vh] w-[100dvw] blur-3xl  transition-all duration-500 ease-in-out`}
            onLoadingComplete={() => {
              setIsLoadedGradient(true);
            }}
          />
        </div>
        <div className="absolute right-0 pt-20">
          {" "}
          <Image
            src={planets}
            alt="hero-graphic"
            className={`${
              isLoadedImage ? "opacity-100" : "opacity-0"
            } o  bject-contain w-[900px] max-w-[100vw] transition-all duration-500 ease-in-out`}
            onLoadingComplete={() => {
              setIsLoadedImage(true);
            }}
          />
        </div>
        {/* Text */}
        <div className="body-font  w-[1000px]  pt-32 font-azo-sans font-light tracking-tight text-[#E1E0E2] ">
          <div className="relative flex flex-col items-center">
            <div className="text-center text-[48pt]">
              <p>Imagination</p>
              <p className="leading-[3.5rem]">Meets</p>
              <p className="leading-[5rem]">
                <b className="font-black">Innovation.</b>
              </p>
            </div>
            <Image
              src={starBorder}
              alt="star-border-home"
              className={`${
                isLoadedStarBorder ? "opacity-100" : "opacity-0"
              } w-[500px] min-w-[500px] transition-all duration-500 ease-in-out`}
              onLoadingComplete={() => {
                setIsLoadedStarBorder(true);
              }}
            />
            <div className="w-[550px] pl-1 text-center text-[16pt]">
              <p>
                Welcome to the official website of the AR/VR club at San Jose
                State University.
              </p>
            </div>
            <div className="pl-1 pt-6">
              <span>
                <Button link="/about" text="EXPLORE" />
              </span>
              <span className="ml-7">
                <Button
                  link="https://discord.gg/gSbpSzZ2uG"
                  text="JOIN"
                  variant="glass"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="fade-in"
        className="flex min-h-[100dvw] w-[100dvw] justify-center md:hidden"
      >
        <div className="absolute left-0 top-0 -z-10 ">
          <Image
            src={heroGraphicMobile}
            alt="hero-graphic"
            className={`${
              isLoadedGraphic ? "opacity-100" : "opacity-0"
            } min-h-[90vh] w-[900px] max-w-[100vw] object-cover transition-all duration-500 ease-in-out`}
            onLoadingComplete={() => {
              setIsLoadedGraphic(true);
            }}
          />
        </div>
        <div className="body-font relative mx-20 mt-44 h-fit w-64 rounded-[30px] border-[1px] border-[#E1E0E2] border-opacity-10 bg-gradient-to-t from-[rgba(83,115,212,0.3)] to-[rgba(255,255,255,0.3)] px-8 py-8 font-azo-sans font-light tracking-tight text-[#E1E0E2] drop-shadow-5xl backdrop-blur-[30px] transition-all duration-200  ease-in-out ">
          <Image
            src={starBorderMobile}
            alt="star-border-home"
            className={`${
              isLoadedStarBorderMobile ? "opacity-100" : "opacity-0"
            } absolute -left-10 -top-14 min-w-[310px]  object-contain transition-all duration-500 ease-in-out`}
            onLoadingComplete={() => {
              setIsLoadedStarBorderMobile(true);
            }}
          />
          <div className="text-[18pt]">
            <p>Imagination</p>
            <p className="leading-[1rem]">Meets</p>
            <p className="leading-[2rem]">
              <b className="font-black">Innovation.</b>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-4 max-w-full">
              <Button link="/about" text="EXPLORE" />
            </div>
            <div className="mt-2 max-w-full">
              <Button
                link="https://discord.gg/gSbpSzZ2uG"
                text="JOIN"
                variant="outline"
              />
            </div>
          </div>
          <div className="mt-4 w-full text-center text-[8pt] font-black">
            <p>
              THE OFFICIAL WEBSITE OF THE AR/VR CLUB AT SAN JOSE STATE
              UNIVERSITY
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
