import React, { useRef } from "react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import instagramAnimation from "../assets/animations/instagram-animation.json";
import discordAnimation from "../assets/animations/discord-animation.json";
import emailAnimation from "../assets/animations/email-animation.json";
import Link from "next/link";
import { links } from "~/assets/data";

export default function Footer() {
  const instaRef = useRef<LottieRefCurrentProps | null>(null);
  const discordRef = useRef<LottieRefCurrentProps | null>(null);
  const emailRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <div
      id="fade-in"
      className="body-font z-10 flex  w-[100vw] min-w-full flex-1 justify-center bg-gradient-to-t from-black to-transparent font-azo-sans  text-[#E1E0E2]"
    >
      <div className="relative min-h-[225px]  w-full">
        <div className="absolute bottom-10 flex w-full  flex-col items-center">
          <p className="text-center max-md:text-[8pt]">
            Designed and Developed by{" "}
            <a
              href="https://www.linkedin.com/in/ahmad-gazali/"
              className="text-[#D3A309] underline"
            >
              Ahmad Gazali
            </a>{" "}
            | &copy; 2023 All rights reserved
            <br />
            Brought to you by the AR/VR Club Team @ SJSU
          </p>
          <div className="mt-3 flex h-12 w-36 flex-row items-center justify-between">
            <button
              onMouseEnter={() => {
                instaRef.current?.goToAndPlay(0, true);
              }}
              className="h-10 w-10 rounded-xl border-[1px] p-[7px]  transition-all duration-500 ease-in-out hover:h-11 hover:w-11 active:h-10 active:w-10"
            >
              <Link href={links.instagram}>
                <Lottie
                  lottieRef={instaRef}
                  animationData={instagramAnimation}
                  loop={false}
                />
              </Link>
            </button>
            <button
              onMouseEnter={() => {
                discordRef.current?.goToAndPlay(0, true);
              }}
              className="h-10 w-10 rounded-xl border-[1px] p-[7px]  transition-all duration-500 ease-in-out hover:h-11 hover:w-11 active:h-10 active:w-10"
            >
              <Link href={links.discord}>
                <Lottie
                  lottieRef={discordRef}
                  animationData={discordAnimation}
                  loop={false}
                />
              </Link>
            </button>
            <button
              onMouseEnter={() => {
                emailRef.current?.goToAndPlay(0, true);
              }}
              className="h-10 w-10 rounded-xl  border-[1px] p-[7px]  transition-all duration-500 ease-in-out hover:h-11 hover:w-11 active:h-10 active:w-10"
            >
              <div className="relative h-full w-full">
                <Link href={links.email}>
                  <Lottie
                    lottieRef={emailRef}
                    animationData={emailAnimation}
                    loop={false}
                    className="absolute -top-1"
                  />
                </Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
