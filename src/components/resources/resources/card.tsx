import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({
  title = "",
  desc = "",
  link = "",
  image,
}: {
  title: string;
  desc: string;
  link: string;
  image?: string;
}) {
  return (
    <div className="flex flex-col justify-center rounded-[30px] p-6  text-[12pt] leading-[1.1] text-[#E1E0E2] drop-shadow-3xl transition-all duration-500 ease-in-out hover:drop-shadow-4xl max-md:mx-5 max-md:mt-5  max-md:items-center  md:m-5 md:w-[300px] md:self-stretch">
      <div className="aspect-video w-full rounded-[30px] bg-black"></div>
      <button
        style={{
          background: "#BC5358",
        }}
        className="relative mt-4 flex max-h-[40px] min-h-[40px] max-w-full items-center justify-center rounded-[20px] shadow-sm transition-all duration-500  ease-in-out hover:shadow-md max-md:min-w-full md:h-[100px]"
      >
        <Link href={link} className="h-full w-full">
          <span className="flex h-full w-full  items-center justify-center">
            <p className="text-[#E1E0E2] ">{title}</p>
          </span>
        </Link>
      </button>
      <div className="flex max-w-full flex-1 flex-col items-center overflow-x-hidden rounded-[20px] md:min-h-[150px]">
        <div id="card" className=" flex-1 ">
          <p className="pt-2 text-center text-[12pt]">{desc}</p>
        </div>
      </div>
    </div>
  );
}
