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

export default function MeetOurTeam() {
  const [hoveredCardOne, setHoveredCardOne] = useState<boolean>(false);
  const [hoveredCardTwo, setHoveredCardTwo] = useState<boolean>(false);
  const [hoveredCardThree, setHoveredCardThree] = useState<boolean>(false);

  return (
    <div
      id="fade-in"
      className="body-font relative mb-8 flex w-[100vw] justify-center font-azo-sans"
    >
      <div className="relative flex h-fit min-h-[400px] w-[1200px] max-w-full flex-col ">
        {/* Content */}
        <div className="flex h-fit flex-wrap justify-center">
          <div className="relative  mx-16 flex  flex-col self-start  text-[#E1E0E2]  max-md:w-full max-md:items-center md:flex-1">
            <p className="text-[36pt] font-black leading-tight tracking-tight max-md:text-center">
              MEET OUR TEAM
            </p>
            <div className="w-[110%] max-w-[80vw]">
              <StarBorderText />
            </div>
          </div>
        </div>
        <div className="mt-10 flex  max-md:flex-col max-md:items-center md:flex-wrap md:justify-center md:px-20">
          <div className="flex h-[300px] items-center justify-center self-stretch rounded-[30px] bg-[#E1E0E2] text-[12pt] leading-[1.1] text-black drop-shadow-3xl transition-all duration-500 ease-in-out hover:drop-shadow-4xl max-md:mx-5  max-md:mt-5 max-md:h-[125px] md:m-5 md:w-[300px] md:flex-col">
            <div className="relative h-[190px] w-[190px] max-w-full max-md:ml-10 max-md:h-[95px] max-md:w-[95px] md:mb-5">
              <div className="absolute bottom-0 left-0 h-[170px] w-[170px] rounded-full bg-[#A05858] max-md:h-[85px] max-md:w-[85px]"></div>
              <div
                style={{
                  background:
                    "radial-gradient(141.75% 141.75% at -0.41% 100.23%, rgba(0, 0, 0, 0.00) 51.48%, #000 85.42%)",
                }}
                className="absolute right-0 h-[85px] w-[85px] rounded-full max-md:h-[42.5px] max-md:w-[42.5px]"
              ></div>
            </div>
            <div className="flex flex-col items-center max-md:flex-1">
              <p className="text-center text-[12pt] font-bold">Dexter Allen</p>
              <p className="text-center text-[10pt]">President</p>
            </div>
          </div>
          <div className="flex h-[300px] items-center justify-center self-stretch rounded-[30px] bg-[#E1E0E2] text-[12pt] leading-[1.1] text-black drop-shadow-3xl transition-all duration-500 ease-in-out hover:drop-shadow-4xl max-md:mx-5  max-md:mt-5 max-md:h-[125px] md:m-5 md:w-[300px] md:flex-col">
            <div className="relative h-[190px] w-[190px] max-w-full max-md:ml-10 max-md:h-[95px] max-md:w-[95px] md:mb-5">
              <div className="absolute bottom-0 left-0 h-[170px] w-[170px] rounded-full bg-[#A05858] max-md:h-[85px] max-md:w-[85px]"></div>
              <div
                style={{
                  background:
                    "radial-gradient(141.75% 141.75% at -0.41% 100.23%, rgba(0, 0, 0, 0.00) 51.48%, #000 85.42%)",
                }}
                className="absolute right-0 h-[85px] w-[85px] rounded-full max-md:h-[42.5px] max-md:w-[42.5px]"
              ></div>
            </div>
            <div className="flex flex-col items-center max-md:flex-1">
              <p className="text-center text-[12pt] font-bold">Kyle Nguyen</p>
              <p className="text-center text-[10pt]">Vice President</p>
            </div>
          </div>
          <div className="flex h-[300px] items-center justify-center self-stretch rounded-[30px] bg-[#E1E0E2] text-[12pt] leading-[1.1] text-black drop-shadow-3xl transition-all duration-500 ease-in-out hover:drop-shadow-4xl max-md:mx-5  max-md:mt-5 max-md:h-[125px] md:m-5 md:w-[300px] md:flex-col">
            <div className="relative h-[190px] w-[190px] max-w-full max-md:ml-10 max-md:h-[95px] max-md:w-[95px] md:mb-5">
              <div className="absolute bottom-0 left-0 h-[170px] w-[170px] rounded-full bg-[#A05858] max-md:h-[85px] max-md:w-[85px]"></div>
              <div
                style={{
                  background:
                    "radial-gradient(141.75% 141.75% at -0.41% 100.23%, rgba(0, 0, 0, 0.00) 51.48%, #000 85.42%)",
                }}
                className="absolute right-0 h-[85px] w-[85px] rounded-full max-md:h-[42.5px] max-md:w-[42.5px]"
              ></div>
            </div>
            <div className="flex flex-col items-center max-md:flex-1">
              <p className="text-center text-[12pt] font-bold">Cosmo Maddux</p>
              <p className="text-center text-[10pt]">Treasurer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarBorderText() {
  return (
    <div className="relative w-full">
      <div className="absolute -top-14 h-[400px] w-full md:-left-10">
        <div className="absolute h-full w-[2px] border-l-[1px] border-[#E1E0E2] max-md:hidden"></div>
        <div className="absolute left-2 top-1 h-[95%] w-[2px] border-l-[1px] border-[#E1E0E2] max-md:hidden"></div>
        <div className="absolute top-16 h-[2px] w-[95%] border-t-[1px] border-[#E1E0E2] max-md:left-1"></div>
        <div className="absolute top-[4.5rem] h-[2px] w-full border-t-[1px] border-[#E1E0E2]"></div>
      </div>
      <Image
        src={star as string}
        alt="star"
        className="absolute top-[1rem] w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ease-in-out  md:-left-10"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute left-2 top-[0.5rem] w-4 translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ease-in-out  md:-left-8"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute right-8 top-[1.5rem] w-4  transition-all duration-500 ease-in-out md:right-20"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute right-4 top-[1.5rem] w-4  transition-all duration-500 ease-in-out md:right-16"
      />
      <Image
        src={star as string}
        alt="star"
        className="absolute right-0 top-[1.5rem] w-4  transition-all duration-500 ease-in-out md:right-12"
      />
    </div>
  );
}
