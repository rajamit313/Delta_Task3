"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar2 = () => {
  const Path = usePathname();
  const route = useRouter();
  const [profilePic, setProfilePic] = useState('/defaultprofilepic.png');
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const logoutHandler = async () => {
    await fetch("/api/add/logout", {
      method: "POST",
    });
    route.push("/login");
  };

  return (
    <div className="overflow-x-hidden w-full sticky top-0">
      <nav className="bg-[rgba(0,0,0,0.9)] text-white flex justify-between items-center h-18 px-6 ">

        <div className="text-white text-3xl pl-40">UniTick</div>
        <div className="flex gap-10">
          <div><Link href={"/"}>Home</Link></div>
          <div><Link href={"/readmore"}>Read More</Link></div>
        </div>
        {/* Toggle Button (only visible on small screens) */}
        <button className="fixed top-4 left-4 z-50 p-2 rounded-full text-3xl text-white md:hidden"
          onClick={() => setOpen(!open)}>
          ≡
        </button>

        {/* Sidebar */}
        <div
          className={`${open ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 transform transition-transform duration-300 ease-in-out
          h-screen w-52 space-y-4 bg-amber-50 fixed top-18 left-0 text-black shadow-black shadow-lg z-40 md:block`}>

          <input
            type="file"
            id="profilePic"
            className="hidden"
            accept="image/*"
            onChange={handleChange} />

          <label htmlFor="profilePic" className="cursor-pointer px-4 py-2 rounded flex justify-center mt-6">
            <img src={profilePic} alt="profile" className="w-32 h-32 rounded-full object-fill" />
          </label>

          <div className=" h-full gap-4 flex flex-col">
            <Link href={"/user/dashboard"}><div className={`w-full h-12 flex items-center justify-start text-xl funnel-sans cursor-pointer ${Path == "/user/dashboard" ? "bg-amber-400" : ""}`}>
              <img src="/dashboard.png" alt="dashboard" className="w-[30px]" />Dashboard</div></Link>

            <Link href={"/user/profile"}><div className={`w-full h-12 flex items-center justify-start text-xl funnel-sans cursor-pointer ${Path == "/user/profile" ? "bg-amber-400" : ""}`}>

              <img src="/edit.png" alt="edit" className='w-[30px]' />Profile</div></Link>

            <Link href={"/user/history"}><div className={`w-full h-12 flex items-center justify-start text-xl funnel-sans cursor-pointer ${Path == "/user/history" ? "bg-amber-400" : ""}`}>
              <img src="/history.png" alt="history" className='w-[30px]' />History</div></Link>
            <Link href={"/user/changepassword"}><div className={`w-full h-12 flex items-center justify-start text-xl funnel-sans cursor-pointer ${Path == "/user/changepassword" ? "bg-amber-400" : ""}`}>
              <img src="/password.png" alt="password" className='w-[30px]' />Change Password</div></Link>

            <div className="text-xl funnel-sans absolute bottom-22 right-4 flex">
              <img src="/logout.png" alt="logout" className="w-8" />
              <button onClick={logoutHandler}>Log out</button></div>
          </div>


        </div>

      </nav>
    </div>
  );
};

export default Navbar2;

