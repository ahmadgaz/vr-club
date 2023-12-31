import Image from "next/image";
import React from "react";
import { assets } from "~/assets/data";

export default function StarBorder() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute h-full w-full">
        <div className="absolute left-1 top-0 h-[2px] w-[95%] border-t-[1px] border-[#E1E0E2]"></div>
        <div className="absolute top-2 h-[2px] w-full border-t-[1px] border-[#E1E0E2]"></div>
      </div>
      <div className="absolute"></div>
      <Image
        src={assets.starIcon}
        alt="star"
        width={100}
        height={100}
        className="absolute top-2 w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500  ease-in-out"
      />
      <Image
        src={assets.starIcon}
        alt="star"
        width={100}
        height={100}
        className="absolute left-2 top-0 w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500  ease-in-out"
      />
      <Image
        src={assets.starIcon}
        alt="star"
        width={100}
        height={100}
        className="absolute right-8 top-4 w-4  transition-all duration-500  ease-in-out"
      />
      <Image
        src={assets.starIcon}
        alt="star"
        width={100}
        height={100}
        className="absolute right-4 top-4 w-4  transition-all duration-500  ease-in-out"
      />
      <Image
        src={assets.starIcon}
        alt="star"
        width={100}
        height={100}
        className="absolute right-0 top-4 w-4  transition-all duration-500  ease-in-out"
      />
    </div>
  );
}
