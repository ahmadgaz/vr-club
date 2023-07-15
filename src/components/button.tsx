import Image from "next/image";
import React from "react";
import arrowWhite from "../assets/images/arrow-white.svg";
import arrowBlack from "../assets/images/arrow-black.svg";
import Link from "next/link";
import hexToRgb from "~/utils/hexToRGB";

export default function Button({
  loading = false,
  disabled = false,
  variant = "fill",
  text = "",
  link,
  onPress = () => {
    return;
  },
  color = "",
}: {
  loading?: boolean;
  disabled?: boolean;
  variant?: "fill" | "glass" | "outline";
  text: string;
  link: string;
  onPress?: () => void;
  color?: string;
}) {
  const r = hexToRgb(color).r;
  const g = hexToRgb(color).g;
  const b = hexToRgb(color).b;
  console.log(color, r, g, b);
  return variant === "fill" ? (
    <button
      id={color ? "gold-button" : ""}
      className={` h-[60px] w-full flex-1 rounded-[30px] ${
        color ? "text-[#E1E0E2]" : "bg-[#E1E0E2] text-black"
      }   text-[12pt]  drop-shadow-3xl transition-all duration-500 ease-in-out ${
        color ? "" : "hover:bg-white"
      }  hover:drop-shadow-4xl active:drop-shadow-none`}
    >
      <Link href={link}>
        <span className="flex h-[61px] w-full  items-center justify-center">
          {text}
          <Image
            src={color ? (arrowWhite as string) : (arrowBlack as string)}
            alt="arrow"
            className="ml-3 w-3"
          />
        </span>
      </Link>
    </button>
  ) : variant === "glass" ? (
    <button
      style={
        color
          ? {
              background: `linear-gradient(360deg,  rgba(83,115,212,0.3), rgba(${r},${g},${b},0.3))`,
            }
          : {}
      }
      className={`h-[60px] w-full flex-1 rounded-[30px] border-[1px] border-[#E1E0E2] border-opacity-10  ${
        color
          ? ""
          : "bg-gradient-to-t from-[rgba(83,115,212,0.3)] to-[rgba(255,255,255,0.3)]"
      }    text-[12pt] text-[#E1E0E2]  drop-shadow-5xl backdrop-blur-[30px] transition-all duration-500 ease-in-out hover:border-opacity-50 hover:drop-shadow-6xl active:drop-shadow-none`}
    >
      <Link href={link}>
        <span className="flex h-[61px] w-full   items-center justify-center ">
          {text}
          <Image src={arrowWhite as string} alt="arrow" className="ml-3 w-3" />
        </span>
      </Link>
    </button>
  ) : (
    <button
      className={`h-[60px] w-full flex-1 rounded-[30px] border-[1px] ${
        color ? "" : "border-[#E1E0E2]"
      }  text-[12pt] ${
        color ? "" : "text-[#E1E0E2]"
      }  mix-blend-screen transition-all duration-500 ease-in-out hover:border-[2px]  active:border-[1px]`}
    >
      <Link href={link}>
        <span className="flex h-[30px] w-full   items-center justify-center ">
          {text}
          <Image src={arrowWhite as string} alt="arrow" className="ml-3 w-3" />
        </span>
      </Link>
    </button>
  );
}
