import React, { useState } from "react";
import Image from "next/image";
import vrGirl from "../../assets/images/vr-girl.png";
import star from "../../assets/images/star.svg";
import puzzle from "../../assets/images/puzzle-icon.svg";
import light from "../../assets/images/light-icon.svg";
import canvas from "../../assets/images/canvas-icon.svg";
import Link from "next/link";
import arrowWhite from "../../assets/images/arrow-white.svg";
import arrowBlack from "../../assets/images/arrow-black.svg";

export default function Equipment() {
  const [hoveredCardOne, setHoveredCardOne] = useState<boolean>(false);
  const [hoveredCardTwo, setHoveredCardTwo] = useState<boolean>(false);
  const [hoveredCardThree, setHoveredCardThree] = useState<boolean>(false);

  return (
    <div id="fade-in" className="relative flex w-[100vw] justify-center">
      <div className="relative flex h-fit min-h-[700px] w-[1200px] max-w-full flex-col ">
        {/* Content */}
        <div className=" h-fit w-full">
          <div className="body-font relative ml-16 mt-[2rem] flex flex-col self-start  font-azo-sans  text-[#E1E0E2] max-md:max-w-full md:flex-1">
            <p className="pr-20 text-center text-[36pt] font-black leading-tight tracking-tight md:text-right">
              EQUIPMENT
            </p>
            <div className="-z-10 w-[100%]">
              <StarBorderText />
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-1 flex-wrap items-stretch justify-stretch pl-12 md:pl-24 md:pr-12">
          <div
            className={`${
              hoveredCardOne
                ? "hover:border-opacity-50 hover:drop-shadow-6xl"
                : ""
            } body-font relative mr-20 mt-5    flex-1 rounded-[30px] border-[1px] border-[#E1E0E2] border-opacity-10 bg-gradient-to-t from-[rgba(83,115,212,0.3)] to-[rgba(255,255,255,0.3)] px-8 py-8 pr-16 font-azo-sans font-light text-[#E1E0E2] drop-shadow-5xl backdrop-blur-[30px] transition-all duration-500  ease-in-out `}
          >
            {/* <div className="absolute -right-11 top-0 h-full w-24 rounded-[30px] border-[1px]"></div> */}
            <button
              onMouseEnter={() => {
                setHoveredCardOne(true);
              }}
              onMouseLeave={() => {
                setHoveredCardOne(false);
              }}
              className={`${
                hoveredCardOne ? "bg-[#E1E0E2]" : ""
              } absolute -right-11 top-0 h-full w-24 rounded-[30px] border-[1px] border-[#E1E0E2] transition-all duration-200 ease-in-out`}
            >
              <Link href="">
                <span className="flex h-[30px] w-full   items-center justify-center ">
                  {hoveredCardOne ? (
                    <Image
                      src={arrowBlack as string}
                      alt="arrow"
                      className="w-3"
                    />
                  ) : (
                    <Image
                      src={arrowWhite as string}
                      alt="arrow"
                      className="w-3"
                    />
                  )}
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarBorderText() {
  return (
    <div className="relative w-full">
      <div className="absolute -left-10 -top-96 h-[800px] w-full">
        <div className="absolute right-0 h-full w-[2px] border-l-[1px] border-[#E1E0E2] max-md:hidden"></div>
        <div className="absolute right-2 top-1 h-[95%] w-[2px] border-l-[1px] border-[#E1E0E2] max-md:hidden"></div>
        <div className="absolute  right-1 top-[24.5rem] h-[2px] w-[95%] border-t-[1px] border-[#E1E0E2]"></div>
        <div className="absolute right-0 top-[25rem] h-[2px] w-[98%] border-t-[1px] border-[#E1E0E2]"></div>
      </div>
      <Image
        src={star as string}
        alt="star"
        className="absolute right-[1.6rem] top-[1rem] w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500  ease-in-out"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute right-[2.1rem] top-[0.5rem] w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500  ease-in-out"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute left-5 top-[1.5rem] w-4  transition-all duration-500  ease-in-out"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute left-1 top-[1.5rem] w-4  transition-all duration-500  ease-in-out"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute -left-3 top-[1.5rem] w-4  transition-all duration-500  ease-in-out"
      />
    </div>
  );
}

function StarBorderImage() {
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
