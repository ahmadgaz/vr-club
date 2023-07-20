import Image from "next/image";
import Link from "next/link";
import React from "react";
import { default as dayjs } from "dayjs";
import { assets } from "~/assets/data";

export default function Card({
  variant = 0,
  title = "",
  desc = "",
  location = "",
  date = Date.now(),
  link = "",
}: {
  variant: number;
  title: string;
  desc: string;
  location: string;
  date: number;
  link: string;
}) {
  return (
    <div className="flex h-[450px] flex-col justify-center self-stretch rounded-[30px] bg-[#E1E0E2] p-6 text-[12pt] leading-[1.1] text-black drop-shadow-3xl transition-all duration-500 ease-in-out hover:drop-shadow-4xl max-md:mx-5  max-md:mt-5  max-md:items-center md:m-5 md:w-[300px]">
      <div className="items-left flex flex-1 flex-col rounded-[20px] max-md:max-h-[110px] max-md:min-h-[110px]  md:max-h-[150px] md:min-h-[150px]">
        <p className=" text-[14pt] font-bold">{title}</p>
        <div id="card" className="flex-1 overflow-scroll">
          <p className="pt-2 text-[12pt]">{desc}</p>
        </div>
      </div>
      <button
        style={{
          borderColor:
            variant === 0
              ? "#D3A30980"
              : variant === 1
              ? "#A1C4D180"
              : "#BC535880",
          color:
            variant === 0 ? "#99730A" : variant === 1 ? "#617C84" : "#824046",
        }}
        className="relative mt-4  max-w-full rounded-[20px] border-[1px] p-2 max-md:max-h-[100px]  max-md:min-h-[100px] max-md:min-w-full  md:max-h-[80px] md:min-h-[80px]"
      >
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=${location
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/ /g, "%20")}`}
          className="flex h-full w-full items-center"
        >
          <div
            style={{
              background:
                variant === 0
                  ? "#D3A30980"
                  : variant === 1
                  ? "#A1C4D180"
                  : "#BC535880",
            }}
            className="flex aspect-square h-full items-center justify-center rounded-[15px] "
          >
            <Image
              src={
                variant === 0
                  ? assets.locationIcon0
                  : variant === 1
                  ? assets.locationIcon1
                  : assets.locationIcon2
              }
              alt="location-icon"
              width={100}
              height={100}
              className="w-10"
            />
          </div>
          <p className="ml-4 text-left text-[10pt]">{location}</p>
        </Link>
      </button>
      <div
        style={{
          background:
            variant === 0
              ? "#D3A30980"
              : variant === 1
              ? "#A1C4D180"
              : "#BC535880",
          color:
            variant === 0 ? "#99730A" : variant === 1 ? "#617C84" : "#824046",
        }}
        className="relative mt-4 flex max-w-full flex-col items-center justify-center rounded-[20px] max-md:max-h-[100px] max-md:min-h-[100px] max-md:min-w-full md:max-h-[80px] md:min-h-[80px]"
      >
        <p className="text-[10pt] font-bold uppercase">
          {dayjs(date).isSame(dayjs(Date.now()), "day")
            ? "Today"
            : dayjs(date).isSame(dayjs(Date.now()).add(1, "day"), "day")
            ? "Tomorrow"
            : dayjs(date).format("DD MMM")}
        </p>
        <p className="font-serif text-[20pt] font-black uppercase">
          {dayjs(date).format("h:mm A")}
        </p>
      </div>
      <button
        style={{
          background:
            variant === 0 ? "#D3A309" : variant === 1 ? "#A1C4D1" : "#BC5358",
        }}
        className="relative mt-4 flex max-h-[40px] min-h-[40px] max-w-full items-center justify-center rounded-[20px] shadow-sm transition-all duration-500  ease-in-out hover:shadow-md max-md:min-w-full md:h-[100px]"
      >
        <Link href={link} className="h-full w-full">
          <span className="flex h-full w-full  items-center justify-center">
            <p className="text-[#E1E0E2] max-md:hidden">RSVP</p>
            <Image
              src={assets.arrowIconWhite}
              alt="arrow"
              width={100}
              height={100}
              className=" w-3 md:hidden"
            />
          </span>
        </Link>
      </button>
    </div>
  );
}
