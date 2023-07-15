import Image from "next/image";
import React, { useState } from "react";
import heroText from "../../../assets/images/hero-text.svg";
import heroLogo from "../../../../public/logo-white.svg";
import Button from "../../button";
import StarBorder from "./starBorder";

export default function Hero() {
  const [isLoadedLogo, setIsLoadedLogo] = useState<boolean>(false);
  const [isLoadedSubtitle, setIsLoadedSubtitle] = useState<boolean>(false);

  return (
    <div
      id="fade-in"
      className="body-font z-[5] mb-20 flex h-[650px] w-[100vw] flex-col items-center justify-center font-azo-sans font-light text-[#E1E0E2]"
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
  );
}
