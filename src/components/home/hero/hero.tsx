import Image from "next/image";
import React, { useState } from "react";
import Button from "../../button";
import StarBorder from "./starBorder";
import { useAppContext } from "~/context/context";
import { assets, links } from "~/assets/data";
import sjsu from "public/trace.svg";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const [isLoadedLogo, setIsLoadedLogo] = useState<boolean>(false);
  const [isLoadedSubtitle, setIsLoadedSubtitle] = useState<boolean>(false);
  const { equipmentHeight } = useAppContext();

  return (
    <div
      id="fade-in"
      className="body-font z-[5]  mt-52 flex w-[100vw] flex-col items-center font-azo-sans  font-light text-[#E1E0E2] md:h-[1150px]"
    >
      <div className="flex w-[150px] max-w-full flex-col items-center">
        <Image
          src={assets.logoWhite}
          alt="hero-logo"
          width={150}
          height={150}
          className={`${
            isLoadedLogo ? "opacity-100" : "opacity-0"
          } h-[10.5rem]  drop-shadow-3xl transition-all duration-500 ease-in-out`}
          onLoadingComplete={() => setIsLoadedLogo(true)}
        />
        <Image
          src={sjsu as string}
          alt="hero-text"
          width={100}
          height={100}
          className={`${
            isLoadedSubtitle ? "opacity-100" : "opacity-0"
          } mb-6 h-32 w-full flex-1  drop-shadow-3xl transition-all duration-500 ease-in-out`}
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
      </div>
      <div className="mt-52 flex w-full max-w-[1200px] overflow-hidden  max-md:flex-col  md:h-[400px] md:items-center">
        <Spline
          className="flex-1 drop-shadow-3xl"
          scene="https://prod.spline.design/2QufjIbz0TkJDOil/scene.splinecode"
        />
        <div className="flex-1  pb-16 pl-1 pt-6 max-md:px-[15%]">
          <h1 className="mb-2 text-[20pt] font-bold max-md:text-[15pt]">
            JOIN OUR
          </h1>
          <h1 className="mb-10 text-[75pt] font-black leading-[0.85] max-md:text-[50pt]">
            DISCORD SERVER
          </h1>
          <div
            className={`${
              isLoadedSubtitle ? "opacity-100" : "opacity-0"
            } flex w-[90%]  transition-all duration-500 ease-in-out max-md:w-full max-md:flex-col `}
          >
            <span className="flex-1 max-md:mt-3 ">
              <Button link={links.discord} text="JOIN" variant="glass" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
