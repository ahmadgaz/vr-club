import React from "react";
import Button from "../../button";
import StarBorder from "./starBorder";
import Bg from "~/components/bg";
import Link from "next/link";
import { links } from "~/assets/data";

export default function Hero() {
  return (
    <div
      id="fade-in"
      className="  mt-52 flex w-[100vw] flex-col items-center font-azo-sans font-light  text-[#E1E0E2] max-md:mt-36 "
    >
      <Bg />
      <div className={`flex w-[150px] max-w-full flex-col items-center pb-5`}>
        <h1 className="  text-4xl  font-light leading-[3rem] tracking-tight md:text-6xl md:leading-[5rem]">
          Imagination
          <br />
          Meets
          <br />
          <b className="font-extrabold">Innovation.</b>
        </h1>
      </div>
      <div
        className={` min-h-[35px] w-[500px] max-w-full px-10  transition-all duration-500 ease-in-out`}
      >
        <StarBorder />
      </div>
      <div
        className={` w-[500px] max-w-full px-10 text-center text-[14pt] transition-all duration-500 ease-in-out`}
      >
        <p>
          Join the official Discord of the AR/VR club at San Jose State
          University.
        </p>
      </div>
      <div
        className={`flex w-[500px] gap-5 pl-1 pt-6 transition-all duration-500 ease-in-out max-md:w-[70%] max-md:flex-col`}
      >
        <span className="flex-1">
          <Link href="/about">
            <Button text="EXPLORE" />
          </Link>
        </span>
        <span className="flex-1">
          <Link href={links.discord} target="_blank">
            <Button text="JOIN" variant="glass" />
          </Link>
        </span>
      </div>
    </div>
  );
}
