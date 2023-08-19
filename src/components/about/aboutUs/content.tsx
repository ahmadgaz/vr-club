import Image from "next/image";
import React from "react";
import StarBorderText from "./starBorderText";
import StarBorderImage from "./starBorderImage";
import { aboutUsContent, links } from "~/assets/data";
import Link from "next/link";

export default function Content() {
  return (
    <div className="flex h-fit flex-wrap justify-between">
      <div className="body-font relative mx-16 mt-[6.5rem] flex max-w-[550px] flex-col self-start font-azo-sans  text-[#E1E0E2]  max-md:max-w-full max-md:items-center md:flex-1">
        <p className="overflow-hidden text-[36pt] font-black leading-[1] tracking-tight max-md:text-center">
          ABOUT US
        </p>
        <div className="-z-20 w-[110%] max-w-[80vw]">
          <StarBorderText />
        </div>
        <p className="mt-11 whitespace-pre-wrap text-[12pt] max-md:text-center ">
          {aboutUsContent.description}
          <br />
          <Link className="underline" href={links.discord}>
            Join us on Discord!
          </Link>
        </p>
      </div>
      <div className="relative mt-10 flex h-fit flex-col items-center self-center  max-md:w-full md:flex-1 ">
        <Image
          src={aboutUsContent.image}
          alt="vr-girl"
          width={100}
          height={100}
          unoptimized
          className=" w-[30rem] max-w-[70%] object-cover"
        />
        <div className="w-full pr-20 ">
          <StarBorderImage />
        </div>
      </div>
    </div>
  );
}
