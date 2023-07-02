import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
        className="transition-all duration-200 ease-in-out hover:text-yellow-300"
      >
        {children}
      </Link>
      <div className="flex w-full justify-center  max-md:hidden">
        <div
          className={`${
            router.pathname === link ? "w-7/12" : "w-0"
          } h-[2px] rounded bg-white  transition-all duration-200 ease-in-out`}
        ></div>
      </div>
    </li>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const links = [
    <ListItem key={0} link="/">
      HOME
    </ListItem>,
    <ListItem key={0} link="/about">
      ABOUT
    </ListItem>,
    <ListItem key={0} link="/projects">
      PROJECTS
    </ListItem>,
    <ListItem key={0} link="/events">
      EVENTS
    </ListItem>,
    <ListItem key={0} link="/resources">
      RESOURCES
    </ListItem>,
  ];

  return (
    <nav
      id="fade-in"
      className="body-font fixed top-0 z-10 w-full bg-transparent px-12 py-6 font-azo-sans text-xs font-black text-white"
    >
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center md:flex-1">LOGO</div>
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
          } m-4 flex h-60 max-h-[50vh] flex-col items-center justify-between overflow-scroll rounded-2xl bg-gradient-to-tr from-[#793b8399] to-[#eb584999] p-8  transition-all duration-500 ease-in-out`}
        >
          {links}
        </ul>
      </div>
    </nav>
  );
}
