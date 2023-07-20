import Image from "next/image";
import React from "react";
import { assets } from "~/assets/data";

export default function StarBorderText() {
  return (
    <div className="relative w-full">
      <div className="absolute -left-10 -top-96 h-[800px] w-full">
        <div className="absolute right-0 h-full w-[2px] border-l-[1px] border-[#E1E0E2] max-md:hidden"></div>
        <div className="absolute right-2 top-1 h-[95%] w-[2px] border-l-[1px] border-[#E1E0E2] max-md:hidden"></div>
        <div className="absolute  right-1 top-[24.5rem] h-[2px] w-[95%] border-t-[1px] border-[#E1E0E2]"></div>
        <div className="absolute right-0 top-[25rem] h-[2px] w-[98%] border-t-[1px] border-[#E1E0E2]"></div>
      </div>
      <Image
        src={assets.starIcon}
        alt="star"
        width={100}
        height={100}
        className="absolute right-[1.6rem] top-[1rem] w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500  ease-in-out"
      />
      <Image
        src={assets.starIcon}
        alt="star"
        width={100}
        height={100}
        className="absolute right-[2.1rem] top-[0.5rem] w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500  ease-in-out"
      />
      <Image
        src={assets.starIcon}
        alt="star"
        width={100}
        height={100}
        className="absolute left-5 top-[1.5rem] w-4  transition-all duration-500  ease-in-out"
      />
      <Image
        src={assets.starIcon}
        alt="star"
        width={100}
        height={100}
        className="absolute left-1 top-[1.5rem] w-4  transition-all duration-500  ease-in-out"
      />
      <Image
        src={assets.starIcon}
        alt="star"
        width={100}
        height={100}
        className="absolute -left-3 top-[1.5rem] w-4  transition-all duration-500  ease-in-out"
      />
    </div>
  );
}
