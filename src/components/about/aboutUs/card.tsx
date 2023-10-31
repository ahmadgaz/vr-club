import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { assets } from "~/assets/data";

export default function Card({
  onPress,
  link,
  children,
}: {
  onPress?: () => void;
  link?: string;
  children?: React.ReactNode;
}) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      className={`${
        hovered ? "hover:border-opacity-50 hover:drop-shadow-6xl" : ""
      } body-font relative mr-20 mt-5 flex-[200px]    rounded-[30px] border-[1px] border-[#E1E0E2] border-opacity-10 bg-gradient-to-t from-[rgba(83,115,212,0.3)] to-[rgba(255,255,255,0.3)] px-8 py-8 pr-16 font-azo-sans font-light text-[#E1E0E2] drop-shadow-5xl backdrop-blur-[30px] transition-all duration-500 ease-in-out  max-md:mr-16 `}
    >
      <button
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        className={`${
          hovered ? "bg-[#E1E0E2]" : ""
        } absolute -right-11 top-0 h-full w-24 rounded-[30px] border-[1px] border-[#E1E0E2] transition-all duration-200 ease-in-out`}
        onClick={onPress}
      >
        {link ? (
          <Link href={link}>
            <span className="flex h-full w-full   items-center justify-center ">
              {hovered ? (
                <Image
                  src={assets.arrowIconBlack}
                  width={100}
                  height={100}
                  alt="arrow"
                  className="w-3"
                />
              ) : (
                <Image
                  src={assets.arrowIconWhite}
                  width={100}
                  height={100}
                  alt="arrow"
                  className="w-3"
                />
              )}
            </span>
          </Link>
        ) : (
          <span className="flex h-full w-full   items-center justify-center ">
            {hovered ? (
              <Image
                src={assets.arrowIconBlack}
                width={100}
                height={100}
                alt="arrow"
                className="w-3"
              />
            ) : (
              <Image
                src={assets.arrowIconWhite}
                width={100}
                height={100}
                alt="arrow"
                className="w-3"
              />
            )}
          </span>
        )}
      </button>
      {children}
    </div>
  );
}
