import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { assets, links as linkStrings } from "~/assets/data";

const ListItem = ({
  name,
  setIsOpen,
  children,
}: {
  name: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <li>
      <Link href={name}>
        <button
          className="transition-all duration-500 ease-in-out max-md:hidden max-md:font-bold md:font-black md:uppercase md:hover:text-[#D3A309]"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {children}
        </button>
      </Link>

      {/* Desktop decorator */}
      <div
        id="tab-decorator-1"
        className="flex w-full justify-center  max-md:hidden"
      >
        <div
          className={`${
            router.pathname === name ? "w-10/12" : "w-0"
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
            router.pathname === name ? "w-full" : "w-0"
          } absolute left-0 top-0 flex  h-[80px] items-center rounded-3xl bg-black  transition-all duration-500 ease-in-out`}
        >
          <Link href={name}>
            <button
              className={`${
                router.pathname === name
                  ? "max-md:text-[#E1E0E2]"
                  : "max-md:text-black max-md:hover:text-[#D3A309]"
              } p-6 text-2xl uppercase transition-all duration-500 ease-in-out max-md:font-bold md:hidden md:font-black md:hover:text-[#D3A309]`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {children}
            </button>
          </Link>
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
  const router = useRouter();

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
    const heightToHideFrom = 20;
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
    <ListItem key={0} name="/" setIsOpen={setIsOpen}>
      Home
    </ListItem>,
    <ListItem key={1} name="/about" setIsOpen={setIsOpen}>
      About
    </ListItem>,
    <ListItem key={2} name="/projects" setIsOpen={setIsOpen}>
      Projects
    </ListItem>,
    <ListItem key={3} name="/events" setIsOpen={setIsOpen}>
      Events
    </ListItem>,
    <ListItem key={4} name="/resources" setIsOpen={setIsOpen}>
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
      } body-font fixed top-0 z-50 flex w-full justify-center px-8 py-3 pt-3 font-azo-sans text-xs  text-[#E1E0E2] transition-colors duration-500 ease-in-out md:py-6 `}
    >
      <div className="w-[1200px] max-w-full">
        <div className="flex flex-col">
          <div className="h- flex items-center justify-between">
            {/* Discord */}
            <div className="flex w-9 items-center justify-start md:hidden">
              <Link
                href={linkStrings.discord}
                target="_blank"
                className={`${
                  isLoadedLogo ? "opacity-100 md:mr-40" : "opacity-0 md:mr-0"
                } ${
                  isAtTop && router.pathname === "/" ? " h-9 w-9" : " h-6 w-6"
                } flex items-center justify-center transition-all duration-500 ease-in-out md:hidden md:h-9 md:w-9 `}
              >
                <Image
                  className={`transition-all duration-500 ease-in-out`}
                  src={assets.discordIconWhite}
                  alt="discord-icon-white"
                  width={100}
                  height={100}
                  onLoadingComplete={() => {
                    setIsLoadedLogo(true);
                  }}
                />
              </Link>
            </div>
            {/* Logo */}
            <div
              className={`${
                isLoadedLogo && (!isAtTop || router.pathname !== "/")
                  ? "opacity-100 md:mr-40"
                  : "opacity-0 md:mr-0"
              } flex h-7 w-7 items-center justify-center transition-all duration-500 ease-in-out md:h-9 md:w-9 `}
            >
              <Link href="/">
                <Image
                  className={`transition-all duration-500 ease-in-out`}
                  src={assets.logoWhite}
                  alt="logo-white"
                  width={100}
                  height={100}
                  onLoadingComplete={() => {
                    setIsLoadedLogo(true);
                  }}
                />
              </Link>
            </div>

            {/* Desktop */}
            <ul
              className={`${
                isAtTop && router.pathname === "/" ? "mr-10" : ""
              } flex flex-grow justify-between transition-all duration-500 ease-in-out max-md:hidden`}
            >
              {links}
            </ul>

            {/* Mobile */}
            <div className="flex w-9 items-center justify-end  md:hidden">
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
                    isAtTop && router.pathname === "/" ? " h-9 w-9" : " h-6 w-6"
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
            className={`md:hidden ${
              isOpen ? "max-md:translate-x-0 " : "max-md:translate-x-full  "
            } ${
              isHidden ? "max-md:hidden" : ""
            } absolute left-0 top-0 flex h-[100vh] w-[100vw]  flex-col overflow-scroll overflow-x-hidden  bg-[#E1E0E2] p-4 shadow-xl transition-all duration-500 ease-in-out`}
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
                        src={assets.discordIconBlack}
                        alt="discord-icon-black"
                        width={100}
                        height={100}
                        onLoadingComplete={() => {
                          setIsLoadedLogo(true);
                        }}
                      />
                    </Link>
                  </div>
                  <div className="flex items-center md:flex-1">
                    <Link href="/">
                      <Image
                        className="w-10"
                        src={assets.logoBlack}
                        width={100}
                        height={100}
                        alt="logo-black"
                      />
                    </Link>
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
