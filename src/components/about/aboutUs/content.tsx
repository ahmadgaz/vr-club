import Image from "next/image";
import React from "react";
import StarBorderText from "./starBorderText";
import StarBorderImage from "./starBorderImage";
import vrGirl from "../../../assets/images/vr-girl.png";

export default function Content() {
  return (
    <div className="flex h-fit flex-wrap justify-between">
      <div className="body-font relative mx-16 mt-[6.5rem] flex max-w-[550px] flex-col self-start font-azo-sans  text-[#E1E0E2]  max-md:max-w-full max-md:items-center md:flex-1">
        <p className="text-[36pt] font-black leading-[1] tracking-tight max-md:text-center">
          ABOUT US
        </p>
        <div className="w-[110%] max-w-[80vw]">
          <StarBorderText />
        </div>
        <p className="mt-11 text-[12pt] max-md:text-center ">
          Our mission is to dive into the immersive world of Augmented and
          Virtual Realities. We are a community of passionate individuals from
          all disciplines, bonded together by our shared fascination for AR and
          VR.
          <br />
          <br />
          Whether you&apos;re a seasoned expert or someone who&apos;s never put
          on a VR headset before, you&apos;re welcome here!
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
  );
}
