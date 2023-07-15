import React from "react";
import Content from "./content";
import Card from "./card";

export default function MeetOurTeam() {
  return (
    <div
      id="fade-in"
      className="body-font relative mb-8 flex w-[100vw] justify-center font-azo-sans"
    >
      <div className="relative flex h-fit min-h-[400px] w-[1200px] max-w-full flex-col ">
        <Content />
        <div className="mt-10 flex  max-md:flex-col max-md:items-center md:flex-wrap md:justify-center md:px-20">
          <Card name="Dexter Allen" title="President" />
          <Card name="Kyle Nguyen" title="Vice President" />
          <Card name="Cosmo Maddux" title="Treasurer" />
        </div>
      </div>
    </div>
  );
}
