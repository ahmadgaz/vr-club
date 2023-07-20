import Image from "next/image";
import React from "react";
import { assets } from "~/assets/data";

export default function StarBorderText() {
  return (
    <div className="relative w-full">
      <div className="absolute -top-14 h-[670px] w-full md:-left-10">
        <div className="absolute h-full w-[2px] border-l-[1px] border-[#E1E0E2] max-md:hidden"></div>
        <div className="absolute left-2 top-1 h-[95%] w-[2px] border-l-[1px] border-[#E1E0E2] max-md:hidden"></div>
        <div className="absolute top-16 h-[2px] w-[95%] border-t-[1px] border-[#E1E0E2] max-md:left-1"></div>
        <div className="absolute top-[4.5rem] h-[2px] w-full border-t-[1px] border-[#E1E0E2]"></div>
      </div>
      <Image
        src={assets.starIcon}
        width={100}
        height={100}
        alt="star"
        className="absolute top-[1rem] w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ease-in-out  md:-left-10"
      />
      <Image
        src={assets.starIcon}
        width={100}
        height={100}
        alt="star"
        className="absolute left-2 top-[0.5rem] w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ease-in-out  md:-left-8"
      />
      <Image
        src={assets.starIcon}
        width={100}
        height={100}
        alt="star"
        className="absolute right-8 top-[1.5rem] w-4  transition-all duration-500 ease-in-out md:right-20"
      />
      <Image
        src={assets.starIcon}
        width={100}
        height={100}
        alt="star"
        className="absolute right-4 top-[1.5rem] w-4  transition-all duration-500 ease-in-out md:right-16"
      />
      <Image
        src={assets.starIcon}
        width={100}
        height={100}
        alt="star"
        className="absolute right-0 top-[1.5rem] w-4  transition-all duration-500 ease-in-out md:right-12"
      />
    </div>
  );
}
