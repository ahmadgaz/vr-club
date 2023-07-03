import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <meta name="theme-color" content="#000000" />
      <main className="touch-none overscroll-contain">{children}</main>
    </>
  );
}
