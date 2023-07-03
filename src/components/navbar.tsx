import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "../../public/logo.png";

const ListItem = ({
  key,
  link,
  children,
}: {
  key: number;
  link: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  return (
    <li key={key}>
      <Link
        href={link}
        className="transition-all duration-200 ease-in-out max-md:hidden max-md:font-bold md:font-black md:uppercase md:hover:text-yellow-300"
      >
        {children}
      </Link>
      <div
        id="tab-decorator-1"
        className="flex w-full justify-center  max-md:hidden"
      >
        <div
          className={`${
            router.pathname === link ? "w-10/12" : "w-0"
          } h-[2px] rounded bg-white  transition-all duration-200 ease-in-out`}
        ></div>
      </div>
      <div
        id="tab-decorator-2"
        className="relative h-[43px] w-full justify-center md:hidden"
      >
        <div
          className={`${
            router.pathname === link ? "w-full" : "w-0"
          } absolute left-0 top-0 flex  h-[40px] items-center rounded-lg bg-white  transition-all duration-200 ease-in-out`}
        >
          <Link
            href={link}
            className={`${
              router.pathname === link
                ? "max-md:text-black"
                : "max-md:text-white max-md:hover:text-yellow-300"
            } p-5 transition-all duration-200 ease-in-out max-md:font-bold md:hidden md:font-black md:uppercase md:hover:text-yellow-300`}
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

  const links = [
    <ListItem key={0} link="/">
      Home
    </ListItem>,
    <ListItem key={0} link="/about">
      About
    </ListItem>,
    <ListItem key={0} link="/projects">
      Projects
    </ListItem>,
    <ListItem key={0} link="/events">
      Events
    </ListItem>,
    <ListItem key={0} link="/resources">
      Resources
    </ListItem>,
  ];

  return (
    <nav
      id="fade-in"
      className="body-font fixed top-0 z-10 w-full bg-transparent px-12 py-6 font-azo-sans text-xs  text-white"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center md:flex-1">
            <Image className="w-10" src={Logo} alt="logo" />
          </div>
          <ul className=" flex flex-1 justify-between max-md:hidden">
            {links}
          </ul>
          <div className="md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        <ul
          id="hide-scrollbar"
          className={`md:hidden ${
            isOpen
              ? "max-md:translate-x-0 max-md:opacity-100"
              : "max-md:translate-x-full max-md:opacity-0 "
          } h-65 m-4 flex max-h-[50vh] flex-col overflow-scroll rounded-2xl bg-gradient-to-tr from-[#793b8399] to-[#eb584999] p-4 transition-all duration-500 ease-in-out`}
        >
          {links}
        </ul>
      </div>
    </nav>
  );
}
