import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logoWhite from "../../public/logo-white.svg";
import logoBlack from "../../public/logo-black.svg";

const ListItem = ({
  link,
  setIsOpen,
  children,
}: {
  link: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  return (
    <li>
      <Link
        href={link}
        className="transition-all duration-200 ease-in-out max-md:hidden max-md:font-bold md:font-black md:uppercase md:hover:text-[#D3A309]"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {children}
      </Link>

      {/* Desktop decorator */}
      <div
        id="tab-decorator-1"
        className="flex w-full justify-center  max-md:hidden"
      >
        <div
          className={`${
            router.pathname === link ? "w-10/12" : "w-0"
          } h-[2px] rounded bg-[#E1E0E2]  transition-all duration-200 ease-in-out`}
        ></div>
      </div>

      {/* Mobile decorator */}
      <div
        id="tab-decorator-2"
        className="relative h-[103px] w-full justify-center md:hidden"
      >
        <div
          className={`${
            router.pathname === link ? "w-full" : "w-0"
          } absolute left-0 top-0 flex  h-[80px] items-center rounded-3xl bg-black  transition-all duration-200 ease-in-out`}
        >
          <Link
            href={link}
            className={`${
              router.pathname === link
                ? "max-md:text-[#E1E0E2]"
                : "max-md:text-black max-md:hover:text-[#D3A309]"
            } p-6 text-2xl uppercase transition-all duration-200 ease-in-out max-md:font-bold md:hidden md:font-black md:hover:text-[#D3A309]`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {children}
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

  const links = [
    <ListItem key={0} link="/" setIsOpen={setIsOpen}>
      Home
    </ListItem>,
    <ListItem key={1} link="/about" setIsOpen={setIsOpen}>
      About
    </ListItem>,
    <ListItem key={2} link="/projects" setIsOpen={setIsOpen}>
      Projects
    </ListItem>,
    <ListItem key={3} link="/events" setIsOpen={setIsOpen}>
      Events
    </ListItem>,
    <ListItem key={4} link="/resources" setIsOpen={setIsOpen}>
      Resources
    </ListItem>,
  ];

  return (
    <nav
      id="fade-in"
      className="body-font fixed top-0 z-10 flex w-full justify-center border-b-[1px] border-[#ffffff35] bg-[#ffffff14] px-12 py-6 font-azo-sans text-xs text-[#E1E0E2] backdrop-blur-2xl"
    >
      <div className="w-[1000px] max-w-full">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className={`${
                isLoadedLogo ? "opacity-100" : "opacity-0"
              } flex items-center transition-all duration-200 ease-in-out md:flex-1 `}
            >
              <Image
                className="w-10"
                src={logoWhite as string}
                alt="logo"
                onLoadingComplete={() => {
                  setIsLoadedLogo(true);
                }}
              />
            </div>

            {/* Desktop */}
            <ul className=" flex flex-grow justify-between max-md:hidden">
              {links}
            </ul>

            {/* Mobile */}
            <div className="md:hidden">
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
                  className="h-10 w-10"
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
            } absolute left-0 top-0 flex h-[100dvh]  w-[100dvw] flex-col overflow-scroll  bg-[#E1E0E2] p-4 shadow-xl transition-all duration-500 ease-in-out`}
          >
            <div className="absolute left-0 top-0 z-10 w-[100dvw] bg-transparent px-12 py-6">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center md:flex-1">
                    <Image
                      className="w-10"
                      src={logoBlack as string}
                      alt="logo"
                    />
                  </div>
                  <div className="md:hidden">
                    <button type="button" onClick={() => setIsOpen(!isOpen)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="black"
                        className="h-10 w-10"
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
