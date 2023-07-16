import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import discordIconBlack from "../assets/images/discord-icon-black.svg";
import discordIconWhite from "../assets/images/discord-icon-white.svg";
import logoWhite from "../../public/logo-white.svg";
import logoBlack from "../../public/logo-black.svg";
import { useAppContext } from "~/context/context";
import type { ContextPropsPartial } from "~/context/context";

const ListItem = ({
  name,
  setIsOpen,
  children,
}: {
  name: keyof ContextPropsPartial;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const heights = useAppContext();

  const isAtSection =
    isClient &&
    heights.scrollPosition - window.innerHeight + 1 >
      heights[name]?.pos - 200 &&
    heights.scrollPosition - window.innerHeight + 1 <
      heights[name]?.pos + heights[name]?.height - 200;

  const scrollToSection = (scrollY: number) => {
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  };

  return (
    <li>
      <button
        className="transition-all duration-500 ease-in-out max-md:hidden max-md:font-bold md:font-black md:uppercase md:hover:text-[#D3A309]"
        onClick={() => {
          setIsOpen(false);
          if (isClient) {
            scrollToSection(heights[name]?.pos - 100);
          }
        }}
      >
        {children}
      </button>

      {/* Desktop decorator */}
      <div
        id="tab-decorator-1"
        className="flex w-full justify-center  max-md:hidden"
      >
        <div
          className={`${
            isAtSection ? "w-10/12" : "w-0"
          } h-[2px] rounded bg-[#E1E0E2]  transition-all duration-500 ease-in-out`}
        ></div>
      </div>

      {/* Mobile decorator */}
      <div
        id="tab-decorator-2"
        className="relative h-[103px] w-full justify-center md:hidden"
      >
        <div
          className={`${
            isAtSection ? "w-full" : "w-0"
          } absolute left-0 top-0 flex  h-[80px] items-center rounded-3xl bg-black  transition-all duration-500 ease-in-out`}
        >
          <button
            className={`${
              isAtSection
                ? "max-md:text-[#E1E0E2]"
                : "max-md:text-black max-md:hover:text-[#D3A309]"
            } p-6 text-2xl uppercase transition-all duration-500 ease-in-out max-md:font-bold md:hidden md:font-black md:hover:text-[#D3A309]`}
            onClick={() => {
              setIsOpen(false);
              if (isClient) {
                scrollToSection(heights[name]?.pos - 100);
              }
            }}
          >
            {children}
          </button>
        </div>
      </div>
    </li>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [isLoadedLogo, setIsLoadedLogo] = useState<boolean>(false);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    if (!isHidden) {
      setIsOpen(true);
    }
  }, [isHidden]);
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsHidden(true);
      }, 500);
    }
  }, [isOpen]);

  const listenToScroll = useCallback(() => {
    const heightToHideFrom = 0;
    const winScroll = window.scrollY;

    if (winScroll > heightToHideFrom) {
      isAtTop && // to limit setting state only the first time
        setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  }, [isAtTop]);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [listenToScroll]);

  const links = [
    <ListItem key={0} name="heroHeight" setIsOpen={setIsOpen}>
      Home
    </ListItem>,
    <ListItem key={1} name="aboutUsHeight" setIsOpen={setIsOpen}>
      About
    </ListItem>,
    <ListItem key={2} name="projectsHeight" setIsOpen={setIsOpen}>
      Projects
    </ListItem>,
    <ListItem key={3} name="eventsHeight" setIsOpen={setIsOpen}>
      Events
    </ListItem>,
    <ListItem key={4} name="resourcesHeight" setIsOpen={setIsOpen}>
      Resources
    </ListItem>,
  ];

  return (
    <nav
      id="fade-in"
      className={`${
        !isAtTop
          ? "border-b-[1px] border-[#ffffff35] bg-[#ffffff14] backdrop-blur-2xl"
          : ""
      } body-font fixed top-0 z-50 flex w-full justify-center px-8 py-3 pt-3 font-azo-sans text-xs  text-[#E1E0E2] md:py-6`}
    >
      <div className="w-[1200px] max-w-full">
        <div className="flex flex-col">
          <div className="h- flex items-center justify-between">
            {/* Discord */}
            <div className="flex w-9 items-center justify-start md:hidden">
              <Link
                href="https://discord.gg/gSbpSzZ2uG"
                className={`${
                  isLoadedLogo ? "opacity-100 md:mr-40" : "opacity-0 md:mr-0"
                } ${
                  isAtTop ? " h-9 w-9" : " h-6 w-6"
                } flex items-center justify-center transition-all duration-500 ease-in-out md:hidden md:h-9 md:w-9 `}
              >
                <Image
                  className={`transition-all duration-500 ease-in-out`}
                  src={discordIconWhite as string}
                  alt="logo"
                  onLoadingComplete={() => {
                    setIsLoadedLogo(true);
                  }}
                />
              </Link>
            </div>
            {/* Logo */}
            <div
              className={`${
                isLoadedLogo && !isAtTop
                  ? "opacity-100 md:mr-40"
                  : "opacity-0 md:mr-0"
              } flex h-7 w-7 items-center justify-center transition-all duration-500 ease-in-out md:h-9 md:w-9 `}
            >
              <Image
                className={`transition-all duration-500 ease-in-out`}
                src={logoWhite as string}
                alt="logo"
                onLoadingComplete={() => {
                  setIsLoadedLogo(true);
                }}
              />
            </div>

            {/* Desktop */}
            <ul className=" flex flex-grow justify-between max-md:hidden ">
              {links}
            </ul>

            {/* Mobile */}
            <div className="flex w-9 items-center justify-end md:hidden">
              <button
                type="button"
                onClick={() => {
                  if (isHidden) {
                    setIsHidden(false);
                  } else {
                    setIsOpen(false);
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`${
                    isAtTop ? " h-9 w-9" : " h-6 w-6"
                  }  pt-1 transition-all duration-500 ease-in-out`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul
            id="hide-scrollbar"
            className={`md:hidden ${
              isOpen ? "max-md:translate-x-0 " : "max-md:translate-x-full  "
            } ${
              isHidden ? "max-md:hidden" : ""
            } absolute left-0 top-0 flex h-[100dvh]  w-[100vw] flex-col overflow-scroll  bg-[#E1E0E2] p-4 shadow-xl transition-all duration-500 ease-in-out`}
          >
            <div className="absolute left-0 top-0 z-10 w-[100vw] bg-transparent px-12 py-6">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex w-9 items-center justify-start md:hidden">
                    <Link
                      href="https://discord.gg/gSbpSzZ2uG"
                      className={`flex h-9 w-9 items-center justify-center transition-all duration-500 ease-in-out md:hidden md:h-9 md:w-9 `}
                    >
                      <Image
                        className={`transition-all duration-500 ease-in-out`}
                        src={discordIconBlack as string}
                        alt="logo"
                        onLoadingComplete={() => {
                          setIsLoadedLogo(true);
                        }}
                      />
                    </Link>
                  </div>
                  <div className="flex items-center md:flex-1">
                    <Image
                      className="w-10"
                      src={logoBlack as string}
                      alt="logo"
                    />
                  </div>
                  <div className="w-9 md:hidden">
                    <button type="button" onClick={() => setIsOpen(!isOpen)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black"
                        className=" h-9 w-9 pt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            isOpen
                              ? "M6 18L18 6M6 6l12 12"
                              : "M4 6h16M4 12h16M4 18h16"
                          }
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 pt-32">{links}</div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
