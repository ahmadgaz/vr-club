import Image from "next/image";
import React from "react";
import star from "../../../assets/images/star.svg";

export default function StarBorderImage() {
  return (
    <div className="relative w-full">
      <div className="absolute -right-10  h-[500px] w-full">
        <div className="absolute right-0 top-[-7rem] h-[80%] w-[2px] border-l-[1px] border-[#E1E0E2] max-md:hidden"></div>
        <div className="absolute right-2 top-[-17rem] h-full w-[2px] border-l-[1px] border-[#E1E0E2] max-md:hidden"></div>
        <div className="absolute right-2 top-0 h-[2px] w-full border-t-[1px] border-[#E1E0E2]"></div>
      </div>

      <Image
        src={star as string}
        alt="star"
        className="absolute -right-12 top-0 w-4 translate-x-[-60%] translate-y-[-50%] transition-all duration-500  ease-in-out"
      />
      <div className="absolute left-0 top-[-1.4rem] h-8 w-10">
        <Image
          src={star as string}
          alt="star"
          className="absolute -right-4 top-0  w-4 transition-all duration-500  ease-in-out"
        />
        <Image
          src={star as string}
          alt="star"
          className="absolute -right-8 top-0 w-4 transition-all duration-500  ease-in-out"
        />
        <Image
          src={star as string}
          alt="star"
          className="absolute -right-12 top-0 w-4 transition-all duration-500  ease-in-out"
        />
      </div>
    </div>
  );
}
