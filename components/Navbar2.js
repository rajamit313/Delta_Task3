"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-[rgba(10,25,20,0.8)] backdrop-blur-md text-white flex justify-between items-center h-16 w-full sticky top-0 px-6 z-50 shadow-md">

        {/* Hamburger button (visible only on small screens) */}
        <button
          className="text-3xl text-green-300 md:hidden"
          onClick={() => setOpen(!open)}>
          ☰
        </button>

      
        <div className="text-2xl font-bold text-green-300 tracking-wide hidden md:block">
          UniTick
        </div>

        <ul className="gap-6 items-center hidden md:flex">
          <Link href="/">
            <button className="hover:text-green-300 transition duration-200">Home</button>
          </Link>
          <button className="hover:text-green-300 transition duration-200">About</button>
        </ul>
      </nav>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar2;
