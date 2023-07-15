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

export default function AboutUs() {
  const [hoveredCardOne, setHoveredCardOne] = useState<boolean>(false);
  const [hoveredCardTwo, setHoveredCardTwo] = useState<boolean>(false);
  const [hoveredCardThree, setHoveredCardThree] = useState<boolean>(false);

  return (
    <div id="fade-in" className=" relative mb-8 flex w-[100vw] justify-center">
      <div className="relative flex h-fit min-h-[700px] w-[1200px] max-w-full flex-col ">
        {/* Content */}
        <div className="flex h-fit flex-wrap justify-between">
          <div className="body-font relative mx-16 mt-[6.5rem] flex max-w-[550px] flex-col self-start font-azo-sans  text-[#E1E0E2]  max-md:max-w-full max-md:items-center md:flex-1">
            <p className="text-[36pt] font-black leading-tight tracking-tight max-md:text-center">
              ABOUT US
            </p>
            <div className="w-[110%] max-w-[80vw]">
              <StarBorderText />
            </div>
            <p className="mt-11 text-[12pt] max-md:text-center ">
              Our mission is to dive into the immersive world of Augmented and
              Virtual Realities. We are a community of passionate individuals
              from all disciplines, bonded together by our shared fascination
              for AR and VR.
              <br />
              <br />
              Whether you&apos;re a seasoned expert or someone who&apos;s never
              put on a VR headset before, you&apos;re welcome here!
            </p>
          </div>
          <div className="relative mt-10 flex h-fit flex-col items-center self-center  max-md:w-full md:flex-1 ">
            <Image
              src={vrGirl}
              alt="vr-girl"
              className=" w-[30rem] max-w-[70%] object-cover"
            />
            <div className="w-full pr-20 ">
              <StarBorderImage />
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
              onMouseOver={() => {
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
            <Image
              src={puzzle as string}
              className="mb-1 h-10 w-10 object-contain"
              alt="puzzle-icon"
            />
            <div className="text-[12pt]">
              <p>Hands-on</p>
              <p className="leading-[1rem]">
                <b className="font-black">Experiences</b>
              </p>
              <p className="mt-2 text-[10pt] ">
                Immerse yourself in different realities with our cutting-edge
                AR/VR equipment, from Oculus Quest 2 and Microsoft HoloLens 2 to
                HTC VIVE Pro and more.
              </p>
            </div>
          </div>
          <div
            className={`${
              hoveredCardTwo
                ? "hover:border-opacity-50 hover:drop-shadow-6xl"
                : ""
            } body-font relative mr-20 mt-5    flex-1 rounded-[30px] border-[1px] border-[#E1E0E2] border-opacity-10 bg-gradient-to-t from-[rgba(83,115,212,0.3)] to-[rgba(255,255,255,0.3)] px-8 py-8 pr-16 font-azo-sans font-light text-[#E1E0E2] drop-shadow-5xl backdrop-blur-[30px] transition-all duration-500  ease-in-out `}
          >
            <button
              onMouseOver={() => {
                setHoveredCardTwo(true);
              }}
              onMouseLeave={() => {
                setHoveredCardTwo(false);
              }}
              className={`${
                hoveredCardTwo ? "bg-[#E1E0E2]" : ""
              } absolute -right-11 top-0 h-full w-24 rounded-[30px] border-[1px] border-[#E1E0E2] transition-all duration-200 ease-in-out`}
            >
              <Link href="">
                <span className="flex h-[30px] w-full   items-center justify-center ">
                  {hoveredCardTwo ? (
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
            <Image
              src={light as string}
              className="mb-1 h-10 w-10 object-contain"
              alt="light-icon"
            />
            <div className="text-[12pt]">
              <p>Interactive</p>
              <p className="leading-[1rem]">
                <b className="font-black">Learning</b>
              </p>
              <p className="mt-2 text-[10pt] ">
                Participate in engaging tutorials, workshops, and discussions.
                Learn from industry experts, faculty mentors, and fellow
                members.
              </p>
            </div>
          </div>
          <div
            className={`${
              hoveredCardThree
                ? "hover:border-opacity-50 hover:drop-shadow-6xl"
                : ""
            } body-font relative mr-20 mt-5    flex-1 rounded-[30px] border-[1px] border-[#E1E0E2] border-opacity-10 bg-gradient-to-t from-[rgba(83,115,212,0.3)] to-[rgba(255,255,255,0.3)] px-8 py-8 pr-16 font-azo-sans font-light text-[#E1E0E2] drop-shadow-5xl backdrop-blur-[30px] transition-all duration-500  ease-in-out `}
          >
            <button
              onMouseOver={() => {
                setHoveredCardThree(true);
              }}
              onMouseLeave={() => {
                setHoveredCardThree(false);
              }}
              className={`${
                hoveredCardThree ? "bg-[#E1E0E2]" : ""
              } absolute -right-11 top-0 h-full w-24 rounded-[30px] border-[1px] border-[#E1E0E2] transition-all duration-200 ease-in-out`}
            >
              <Link href="">
                <span className="flex h-[30px] w-full   items-center justify-center ">
                  {hoveredCardThree ? (
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
            <Image
              src={canvas as string}
              className="mb-1 h-10 w-10 object-contain"
              alt="canvas-icon"
            />
            <div className="text-[12pt]">
              <p>Creative</p>
              <p className="leading-[1rem]">
                <b className="font-black">Projects</b>
              </p>
              <p className="mt-2 text-[10pt] ">
                Collaborate on innovative AR/VR projects, like ZenVR, our
                mindfulness-focused VR experience. Put theory into practice and
                see your ideas come to life.
              </p>
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
      <div className="absolute -top-14 h-[670px] w-full md:-left-10">
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
