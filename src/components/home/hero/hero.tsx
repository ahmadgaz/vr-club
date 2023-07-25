import Image from "next/image";
import React, { useState } from "react";
import Button from "../../button";
import StarBorder from "./starBorder";
import { useAppContext } from "~/context/context";
import { assets, links } from "~/assets/data";
import sjsu from "public/trace.svg";

export default function Hero() {
  const [isLoadedLogo, setIsLoadedLogo] = useState<boolean>(false);
  const [isLoadedSubtitle, setIsLoadedSubtitle] = useState<boolean>(false);
  const { equipmentHeight } = useAppContext();

  return (
    <div
      id="fade-in"
      className="body-font z-[5] mb-10 mt-10 flex h-[650px] w-[100vw] flex-col items-center justify-center font-azo-sans font-light text-[#E1E0E2]"
    >
      <div className="flex w-[300px] max-w-full items-center">
        <Image
          src={assets.logoWhite}
          alt="hero-logo"
          width={100}
          height={100}
          className={`${
            isLoadedLogo ? "opacity-100" : "opacity-0"
          } mb-4 h-32 drop-shadow-xl transition-all duration-500 ease-in-out`}
          onLoadingComplete={() => setIsLoadedLogo(true)}
        />
        <p className=" mb-8 ml-2 mr-4 text-[35pt]">@</p>
        <Image
          src={sjsu as string}
          alt="hero-text"
          width={100}
          height={100}
          className={`${
            isLoadedSubtitle ? "opacity-100" : "opacity-0"
          } mb-3 h-32 flex-1 drop-shadow-xl  transition-all duration-500 ease-in-out`}
          onLoadingComplete={() => setIsLoadedSubtitle(true)}
        />
      </div>
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
          <Button
            text="EXPLORE"
            onPress={() => {
              window.scrollTo({
                top: equipmentHeight.pos - 50,
                behavior: "smooth",
              });
            }}
          />
        </span>
        <span className="flex-1 max-md:mt-3 md:ml-7">
          <Button link={links.discord} text="JOIN" variant="glass" />
        </span>
      </div>
    </div>
  );
}
