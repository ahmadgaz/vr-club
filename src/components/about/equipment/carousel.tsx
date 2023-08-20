import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import type { Properties } from "csstype";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets } from "~/assets/data";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { api } from "~/utils/api";
import { useAppContext } from "~/context/context";
import { set } from "lodash";

export type SwiperStyleType = Properties<string | number> & {
  "--swiper-navigation-size"?: string;
  "--swiper-theme-color"?: string;
  "--swiper-navigation-sides-offset"?: string;
  "--swiper-pagination-bottom": string;
  ".swiperSlide:not(.swiperSlideActive)": {
    opacity: number;
  };
};

const styles: SwiperStyleType = {
  "--swiper-navigation-size": "25px",
  "--swiper-theme-color": "#E1E0E2",
  "--swiper-navigation-sides-offset": "25px",
  "--swiper-pagination-bottom": "15px",
  ".swiperSlide:not(.swiperSlideActive)": {
    opacity: 0.5,
  },
};

export default function Carousel() {
  const { data, error, isLoading } = api.equipment.getAll.useQuery();
  const { setApiLoading } = useAppContext();
  useEffect(() => {
    setApiLoading((prev) => {
      prev.push(isLoading);
      return prev;
    });
  }, [isLoading, setApiLoading]);

  return (
    <div
      id="carousel-container"
      className="body-font relative mt-5 flex max-w-full flex-1 items-stretch self-stretch overflow-hidden rounded-[30px] border-[1px] border-[#E1E0E2] border-opacity-10 bg-gradient-to-t from-[rgba(83,115,212,0.3)] to-[rgba(255,255,255,0.3)] font-azo-sans font-light text-[#E1E0E2] drop-shadow-5xl backdrop-blur-[30px] transition-all duration-500  ease-in-out "
    >
      <div className="w-full ">
        {!isLoading && !error && data && (
          <Swiper
            effect="coverflow"
            allowTouchMove={false}
            style={styles}
            modules={[EffectCoverflow, Navigation, Pagination]}
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            // scrollbar={{ draggable: true }}
            className="h-full"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 175,
              modifier: 2.5,
              slideShadows: false,
            }}
          >
            {data.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div
                      style={{ opacity: isActive ? 1 : 0.3 }}
                      className="absolute flex h-full w-full flex-col items-center justify-center font-azo-sans transition-all duration-500 ease-in-out"
                    >
                      <p className="absolute top-16 w-full text-center text-[14pt] font-bold">
                        {slide.title}
                      </p>
                      <div className="min-w-[400px] flex-1 ">
                        <Spline
                          scene={slide.model}
                          className={
                            !isActive ? "pointer-events-none touch-none" : ""
                          }
                        />
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        <div className="absolute bottom-2 flex h-44 w-full justify-center ">
          <Image
            src={assets.carouselGuide}
            width={100}
            height={100}
            alt="carousel-guide"
            className="h-40 w-96 max-w-[90%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
