import React from "react";
import Image from "next/image";
import puzzle from "../../../assets/images/puzzle-icon.svg";
import light from "../../../assets/images/light-icon.svg";
import canvas from "../../../assets/images/canvas-icon.svg";
import Content from "./content";
import Card from "./card";
import { useAppContext } from "~/context/context";

export default function AboutUs() {
  const { equipmentHeight, eventsHeight, projectsHeight } = useAppContext();

  return (
    <div id="fade-in" className=" relative mb-8 flex w-[100vw] justify-center">
      <div className="relative flex h-fit min-h-[700px] w-[1200px] max-w-full flex-col ">
        <Content />
        <div className="mt-10 flex w-full flex-1 flex-wrap items-stretch justify-stretch pl-5 md:pl-24 md:pr-12">
          <Card
            onPress={() => {
              window.scrollTo({
                top: equipmentHeight.pos - 50,
                behavior: "smooth",
              });
            }}
          >
            <Image
              src={puzzle as string}
              className="mb-1 h-10 w-10 object-contain"
              alt="puzzle-icon"
            />
            <div className="text-[12pt]">
              <p>Hands-on</p>
              <p className="leading-[1rem]">
                <b className="font-black">Experiences</b>
              </p>
              <p className="mt-2 text-[10pt] ">
                Immerse yourself in different realities with our cutting-edge
                AR/VR equipment, from Oculus Quest 2 and Microsoft HoloLens 2 to
                HTC VIVE Pro and more.
              </p>
            </div>
          </Card>
          <Card
            onPress={() => {
              window.scrollTo({
                top: eventsHeight.pos - 50,
                behavior: "smooth",
              });
            }}
          >
            <Image
              src={light as string}
              className="mb-1 h-10 w-10 object-contain"
              alt="light-icon"
            />
            <div className="text-[12pt]">
              <p>Interactive</p>
              <p className="leading-[1rem]">
                <b className="font-black">Learning</b>
              </p>
              <p className="mt-2 text-[10pt] ">
                Participate in engaging tutorials, workshops, and discussions.
                Learn from industry experts, faculty mentors, and fellow
                members.
              </p>
            </div>
          </Card>
          <Card
            onPress={() => {
              window.scrollTo({
                top: projectsHeight.pos - 50,
                behavior: "smooth",
              });
            }}
          >
            <Image
              src={canvas as string}
              className="mb-1 h-10 w-10 object-contain"
              alt="canvas-icon"
            />
            <div className="text-[12pt]">
              <p>Creative</p>
              <p className="leading-[1rem]">
                <b className="font-black">Projects</b>
              </p>
              <p className="mt-2 text-[10pt] ">
                Collaborate on innovative AR/VR projects, like ZenVR, our
                mindfulness-focused VR experience. Put theory into practice and
                see your ideas come to life.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
