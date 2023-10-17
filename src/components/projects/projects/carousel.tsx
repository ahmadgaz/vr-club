import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Properties } from "csstype";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets } from "~/assets/data";
import Image from "next/image";
import { api } from "~/utils/api";

export type SwiperStyleType = Properties<string | number> & {
  "--swiper-navigation-size"?: string;
  "--swiper-theme-color"?: string;
  "--swiper-navigation-sides-offset"?: string;
  "--swiper-pagination-bottom": string;
};

const styles: SwiperStyleType = {
  "--swiper-navigation-size": "25px",
  "--swiper-theme-color": "#E1E0E2",
  "--swiper-navigation-sides-offset": "25px",
  "--swiper-pagination-bottom": "15px",
};

export default function Carousel() {
  const { data, error, isLoading } = api.projects.getAll.useQuery();

  return (
    <div
      id="carousel-container"
      className="body-font relative mt-5 flex max-w-full flex-1 items-stretch self-stretch overflow-hidden rounded-[30px] border-[1px] border-[#E1E0E2] border-opacity-10 bg-gradient-to-t from-[rgba(83,115,212,0.3)] to-[rgba(255,255,255,0.3)] font-azo-sans font-light text-[#E1E0E2] drop-shadow-5xl backdrop-blur-[30px] transition-all duration-500  ease-in-out "
    >
      <div className="w-full ">
        {!isLoading && !error && data && (
          <Swiper
            style={styles}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            scrollbar={{ draggable: true }}
            className="h-full"
          >
            {data.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  {slide.image ? (
                    <Image
                      src={slide.image}
                      fill
                      alt="slide-image"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={assets.imagePlaceHolder}
                      fill
                      alt="slide-image"
                      className="h-full w-full object-cover"
                    />
                  )}
                  <div className="absolute h-[50%] w-full bg-gradient-to-b from-black to-transparent p-6 font-azo-sans opacity-80">
                    <p className=" text-[14pt] font-bold">{slide.title}</p>
                    <div id="slide" className="max-h-[90%] overflow-scroll">
                      <p className="pt-2 text-[12pt]">{slide.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
}
