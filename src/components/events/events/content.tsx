import React from "react";
import StarBorderText from "./starBorderText";

export default function Content() {
  return (
    <div className="flex h-fit flex-wrap justify-center">
      <div className="relative  mx-16 flex  flex-col self-start  text-[#E1E0E2]  max-md:w-full max-md:items-center md:flex-1">
        <p className="overflow-hidden text-[36pt] font-black leading-[1] tracking-tight max-md:text-center">
          EVENTS
        </p>
        <div className="w-[102%] max-w-[80vw]">
          <StarBorderText />
        </div>
      </div>
    </div>
  );
}
