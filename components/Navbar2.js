"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const logoutHandler = async()=>{
    const res = await fetch('/api/add/logout',{
      method: 'POST'
    });
    const data = await res.json();
    if(data.success) router.push('/');
  }

  return (
    <>
      <nav className="bg-[rgba(10,25,20,0.8)] backdrop-blur-md text-white flex justify-between items-center h-16 w-full sticky top-0 px-6 z-50 shadow-md">

        {/* Hamburger button (visible only on small screens) */}
        <button
          className="text-3xl text-green-300 md:hidden"
          onClick={() => setOpen(!open)}>
          ☰
        </button>


        <div className='flex justify-center items-center gap-2'>
          <img src="/logo.png" alt="logo" className='h-10 w-10' />
          <div className="text-2xl font-bold text-green-300 tracking-wide">
            UniTick
          </div>
        </div>

        <ul className="gap-6 items-center hidden md:flex">
          <Link href="/">
            <button className="hover:text-green-300 transition duration-200">Home</button>
          </Link>
          <Link href={'/readmore'}>
          <button className="hover:text-green-300 transition duration-200">About</button>
          </Link>
          <button className="hover:text-green-300 transition duration-200" onClick={logoutHandler}>Logout</button>
        </ul>
      </nav>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar2;
