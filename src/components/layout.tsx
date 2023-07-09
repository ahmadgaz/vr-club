import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <Navbar />
      <meta name="theme-color" content="#ffffff" />
      <main className="">{children}</main>
    </div>
  );
}
