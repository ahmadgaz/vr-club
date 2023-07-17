import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <link rel="stylesheet" href="https://use.typekit.net/ivb4kbt.css" />
      <Navbar />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico" />
      <main className="">{children}</main>
    </div>
  );
}
