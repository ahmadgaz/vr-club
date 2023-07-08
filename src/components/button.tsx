import Image from "next/image";
import React from "react";
import arrowWhite from "../assets/images/arrow-white.svg";
import arrowBlack from "../assets/images/arrow-black.svg";

export default function Button({
  loading = false,
  disabled = false,
  variant = "fill",
  text = "",
  onPress = () => {
    return;
  },
}: {
  loading?: boolean;
  disabled?: boolean;
  variant?: "fill" | "glass" | "outline";
  text: string;
  onPress?: () => void;
}) {
  return variant === "fill" ? (
    <button className=" h-[80px] rounded-[40px] bg-[#E1E0E2] px-[100px] text-xl text-black drop-shadow-3xl transition-all duration-200 ease-in-out hover:bg-white hover:drop-shadow-4xl active:drop-shadow-none">
      <span className="flex h-[81px] w-[81px] items-center justify-center">
        {text}
        <Image src={arrowBlack as string} alt="arrow" className="ml-3" />
      </span>
    </button>
  ) : variant === "glass" ? (
    <button className=" h-[80px] rounded-[40px] border-[1px] border-[#E1E0E2] border-opacity-10 bg-gradient-to-t from-[rgba(83,115,212,0.3)] to-[rgba(255,255,255,0.3)] px-[100px] text-xl text-[#E1E0E2] mix-blend-screen drop-shadow-5xl backdrop-blur-[30px] transition-all duration-200 ease-in-out hover:border-opacity-50 hover:drop-shadow-6xl active:drop-shadow-none">
      <span className="flex h-[81px] w-[81px] items-center justify-center">
        {text}
        <Image src={arrowWhite as string} alt="arrow" className="ml-3" />
      </span>
    </button>
  ) : (
    <div>Outline</div>
  );
}
