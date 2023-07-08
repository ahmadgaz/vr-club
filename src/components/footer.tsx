import React, { useRef } from "react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import instagramAnimation from "../assets/images/instagram-animation.json";
import discordAnimation from "../assets/images/discord-animation.json";
import emailAnimation from "../assets/images/email-animation.json";

export default function Footer() {
  const instaRef = useRef<LottieRefCurrentProps | null>(null);
  const discordRef = useRef<LottieRefCurrentProps | null>(null);
  const emailRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <div className="body-font flex  w-full flex-1 justify-center font-azo-sans text-[#E1E0E2] ">
      <div className="relative min-h-[225px] w-96">
        <div className="absolute bottom-10 flex  w-[352px] flex-col items-center">
          <p className="text-center">
            Brought to you by the AR/VR Club Team @ SJSU
          </p>
          <div className="mt-3 flex h-12 w-36 flex-row items-center justify-between">
            <button
              onMouseEnter={() => {
                instaRef.current?.goToAndPlay(0, true);
              }}
              className="h-10 w-10 rounded-xl border-[1px] p-[7px]  transition-all duration-200 ease-in-out hover:h-11 hover:w-11 active:h-10 active:w-10"
            >
              <Lottie
                lottieRef={instaRef}
                animationData={instagramAnimation}
                loop={false}
              />
            </button>
            <button
              onMouseEnter={() => {
                discordRef.current?.goToAndPlay(0, true);
              }}
              className="h-10 w-10 rounded-xl border-[1px] p-[7px]  transition-all duration-200 ease-in-out hover:h-11 hover:w-11 active:h-10 active:w-10"
            >
              <Lottie
                lottieRef={discordRef}
                animationData={discordAnimation}
                loop={false}
              />
            </button>
            <button
              onMouseEnter={() => {
                emailRef.current?.goToAndPlay(0, true);
              }}
              className="h-10 w-10 rounded-xl border-[1px] p-[7px]  transition-all duration-200 ease-in-out hover:h-11 hover:w-11 active:h-10 active:w-10"
            >
              <Lottie
                lottieRef={emailRef}
                animationData={emailAnimation}
                loop={false}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
