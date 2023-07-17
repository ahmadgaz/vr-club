import React from "react";
import StarBorderText from "./starBorderText";

export default function Content() {
  return (
    <div className=" h-fit w-full">
      <div className="body-font relative ml-16 mt-[2rem] flex flex-col self-start  font-azo-sans  text-[#E1E0E2] max-md:max-w-full md:flex-1">
        <p className="pr-20 text-center text-[36pt] font-black leading-[1] tracking-tight md:text-right">
          RESOURCES
        </p>
        <div className="-z-10 w-[100%]">
          <StarBorderText />
        </div>
      </div>
    </div>
  );
}
