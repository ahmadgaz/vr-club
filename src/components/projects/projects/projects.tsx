import React from "react";
import Content from "./content";
import Carousel from "./carousel";

export default function Projects() {
  return (
    <div id="fade-in" className=" relative mb-8 flex w-[100vw] justify-center">
      <div className="relative flex h-fit min-h-[700px] w-[1200px] max-w-full flex-col ">
        <Content />
        <div className="mt-10 flex w-full flex-1 flex-col flex-wrap items-center justify-stretch px-5 md:px-20 ">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
