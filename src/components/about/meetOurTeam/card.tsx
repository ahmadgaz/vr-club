import Image from "next/image";
import React from "react";
import { assets } from "~/assets/data";

export default function Card({
  image,
  name,
  title,
}: {
  image: string;
  name: string;
  title: string;
}) {
  return (
    <div className="flex h-[300px] items-center justify-center self-stretch rounded-[30px] bg-[#E1E0E2] text-[12pt] leading-[1.1] text-black drop-shadow-3xl transition-all duration-500 ease-in-out hover:drop-shadow-4xl max-md:mx-5  max-md:mt-5 max-md:h-[125px] md:m-5 md:w-[300px] md:flex-col">
      <div className="relative h-[190px] w-[190px] max-w-full max-md:ml-10 max-md:h-[95px] max-md:w-[95px] md:mb-5">
        <div className="absolute bottom-0 left-0 h-[170px] w-[170px] overflow-hidden rounded-full bg-[#A05858] max-md:h-[85px] max-md:w-[85px]">
          {image ? (
            <Image
              src={image}
              className="h-full w-full"
              width={100}
              height={100}
              alt="member-image"
            />
          ) : (
            <Image
              src={assets.memberImagePlaceHolder}
              className="h-full w-full"
              width={100}
              height={100}
              alt="member-image"
            />
          )}
        </div>
        <div
          style={{
            background:
              "radial-gradient(141.75% 141.75% at -0.41% 100.23%, rgba(0, 0, 0, 0.00) 51.48%, #000 85.42%)",
          }}
          className="absolute right-0 h-[85px] w-[85px] rounded-full max-md:h-[42.5px] max-md:w-[42.5px]"
        ></div>
      </div>
      <div className="flex flex-col items-center max-md:flex-1">
        <p className="text-center text-[12pt] font-bold">{name}</p>
        <p className="text-center text-[10pt]">{title}</p>
      </div>
    </div>
  );
}
