import Image from "next/image";
import React from "react";
import arrowWhite from "../assets/images/arrow-white.svg";
import arrowBlack from "../assets/images/arrow-black.svg";
import Link from "next/link";

export default function Button({
  loading = false,
  disabled = false,
  variant = "fill",
  text = "",
  link,
  onPress = () => {
    return;
  },
}: {
  loading?: boolean;
  disabled?: boolean;
  variant?: "fill" | "glass" | "outline";
  text: string;
  link: string;
  onPress?: () => void;
}) {
  return variant === "fill" ? (
    <button className=" h-[60px] max-w-full rounded-[30px] bg-[#E1E0E2]  text-[12pt] text-black drop-shadow-3xl transition-all duration-200 ease-in-out hover:bg-white hover:drop-shadow-4xl active:drop-shadow-none">
      <Link href={link}>
        <span className="flex h-[61px] w-[241px] max-w-full items-center justify-center">
          {text}
          <Image src={arrowBlack as string} alt="arrow" className="ml-3 w-3" />
        </span>
      </Link>
    </button>
  ) : variant === "glass" ? (
    <button className="h-[60px] max-w-full rounded-[30px] border-[1px] border-[#E1E0E2] border-opacity-10 bg-gradient-to-t from-[rgba(83,115,212,0.3)] to-[rgba(255,255,255,0.3)]  text-[12pt] text-[#E1E0E2] mix-blend-screen drop-shadow-5xl backdrop-blur-[30px] transition-all duration-200 ease-in-out hover:border-opacity-50 hover:drop-shadow-6xl active:drop-shadow-none">
      <Link href={link}>
        <span className="flex h-[61px] w-[241px]  max-w-full items-center justify-center ">
          {text}
          <Image src={arrowWhite as string} alt="arrow" className="ml-3 w-3" />
        </span>
      </Link>
    </button>
  ) : (
    <button className="h-[60px] max-w-full rounded-[30px] border-[1px] border-[#E1E0E2] text-[12pt] text-[#E1E0E2] mix-blend-screen transition-all duration-200 ease-in-out hover:border-[2px]  active:border-[1px]">
      <Link href={link}>
        <span className="flex h-[61px] w-[241px]  max-w-full items-center justify-center ">
          {text}
          <Image src={arrowWhite as string} alt="arrow" className="ml-3 w-3" />
        </span>
      </Link>
    </button>
  );
}
