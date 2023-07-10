import React, { useState } from "react";
import Image from "next/image";
import heroText from "../../assets/images/hero-text.svg";
import heroLogo from "../../../public/logo-white.svg";
import heroImage from "../../assets/images/hero-image.png";
import heroImageSm from "../../assets/images/hero-image-sm.jpg";

export default function HeroImage() {
  const [isLoadedImage, setIsLoadedImage] = useState<boolean>(false);

  return (
    <div className="relative overflow-hidden drop-shadow-5xl">
      <div className="absolute z-10 h-[100dvh] w-[100dvw] border-b-[1px] border-[#ffffff5d] bg-gradient-to-t from-[#3b0f0f] via-[#00000000] via-10%  "></div>
      <div className="absolute z-10 flex h-[100dvh] w-[100dvw] flex-col items-center justify-center">
        <Image
          src={heroLogo as string}
          alt="hero-logo"
          className="mb-5 mt-10 w-44"
        />
        <Image src={heroText as string} alt="hero-logo" className="w-44" />
      </div>
      <div
        style={{
          backgroundColor: "#3b0f0f",
          backgroundImage: `url(${heroImageSm.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100dvh",
          zIndex: -10,
        }}
      >
        <Image
          src={heroImage}
          alt="hero-image"
          loading="lazy"
          className={`${
            isLoadedImage ? "opacity-100" : "opacity-0"
          } h-[100dvh] w-[100dvw] object-cover transition-all duration-500 ease-in-out`}
          onLoadingComplete={() => {
            setIsLoadedImage(true);
          }}
        />
      </div>
    </div>
  );
}
