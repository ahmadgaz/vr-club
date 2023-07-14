import Image from "next/image";
import React, { useState } from "react";
import star from "../../assets/images/star.svg";
import heroText from "../../assets/images/hero-text.svg";
import heroLogo from "../../../public/logo-white.svg";
import Button from "../button";

export default function Hero() {
  const [isLoadedLogo, setIsLoadedLogo] = useState<boolean>(false);
  const [isLoadedSubtitle, setIsLoadedSubtitle] = useState<boolean>(false);
  const [isLoadedStarBorder, setIsLoadedStarBorder] = useState<boolean>(false);

  return (
    <>
      {/* Landing pg */}
      <div
        id="fade-in"
        className="body-font z-[5]  flex h-[650px] w-[100dvw] flex-col items-center justify-center font-azo-sans font-light text-[#E1E0E2]"
      >
        <Image
          src={heroLogo as string}
          alt="hero-logo"
          className={`${
            isLoadedLogo ? "opacity-100" : "opacity-0"
          } mb-4 mt-20 w-44 max-w-full drop-shadow-xl transition-all duration-500 ease-in-out`}
          onLoadingComplete={() => setIsLoadedLogo(true)}
        />
        <Image
          src={heroText as string}
          alt="hero-logo"
          className={`${
            isLoadedSubtitle ? "opacity-100" : "opacity-0"
          } mb-5 w-44 max-w-full drop-shadow-xl transition-all duration-500 ease-in-out`}
          onLoadingComplete={() => setIsLoadedSubtitle(true)}
        />
        <div
          className={`${
            isLoadedSubtitle ? "opacity-100" : "opacity-0"
          } min-h-[35px] w-[500px] max-w-full px-10  transition-all duration-500 ease-in-out`}
        >
          <StarBorder />
        </div>
        <div
          className={`${
            isLoadedSubtitle ? "opacity-100" : "opacity-0"
          } w-[500px] max-w-full px-10 text-center text-[14pt] transition-all duration-500 ease-in-out`}
        >
          <p>
            Welcome to the official website of the AR/VR club at San Jose State
            University.
          </p>
        </div>
        <div
          className={`${
            isLoadedSubtitle ? "opacity-100" : "opacity-0"
          } flex w-[500px] pl-1 pt-6 transition-all duration-500 ease-in-out max-md:w-[70%] max-md:flex-col`}
        >
          <span className="flex-1">
            <Button link="/about" text="EXPLORE" />
          </span>
          <span className="flex-1 max-md:mt-3 md:ml-7">
            <Button
              link="https://discord.gg/gSbpSzZ2uG"
              text="JOIN"
              variant="glass"
            />
          </span>
        </div>
      </div>
    </>
  );
}

function StarBorder() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute h-full w-full">
        <div className="absolute left-1 top-0 h-[2px] w-[95%] border-t-[1px] border-[#E1E0E2]"></div>
        <div className="absolute top-2 h-[2px] w-full border-t-[1px] border-[#E1E0E2]"></div>
      </div>
      <div className="absolute"></div>
      <Image
        src={star as string}
        alt="star"
        className="absolute top-2 w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500  ease-in-out"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute left-2 top-0 w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500  ease-in-out"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute right-8 top-4 w-4  transition-all duration-500  ease-in-out"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute right-4 top-4 w-4  transition-all duration-500  ease-in-out"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute right-0 top-4 w-4  transition-all duration-500  ease-in-out"
      />
    </div>
  );
}
