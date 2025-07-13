"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";


const Sidebar = ({ open, setOpen }) => {
    const route = useRouter();
    const Path = usePathname();
    const [profilePic, setProfilePic] = useState('/defaultprofilepic.png');

    const logoutHandler = async () => {
        await fetch("/api/add/logout", { method: "POST" });
        route.push("/login");
    };

    const photo = async () => {
        let res = await fetch("/api/add/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            
        });
        let data = await res.json();
        setProfilePic(data.profilepic);
    }

    useEffect(()=>{
        photo();
    },[]);

        const navLinks = [
            { href: "/user/dashboard", label: "Dashboard", icon: "/dashboard.png" },
            { href: "/user/profile", label: "Profile", icon: "/edit.png" },
            { href: "/user/history", label: "History", icon: "/history.png" },
            { href: "/user/changepassword", label: "Change Password", icon: "/password.png" }
        ];

        return (
            <div className={`${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transform transition-transform duration-300 ease-in-out fixed top-16 left-0 z-40 h-screen w-56 bg-gradient-to-br from-[#fef3c7] to-[#fde68a] text-black shadow-xl border-r border-yellow-300`}>

                {/* Profile Picture */}
                <div className="flex justify-center">
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-fill border-2 border-indigo-400 shadow-md" />
                </div>

                {/* Nav Items */}
                <div className="flex flex-col gap-1 px-3 mt-2">
                    {navLinks.map((item, idx) => (
                        <Link key={idx} href={item.href}>
                            <div className={`flex items-center gap-3 h-12 px-3 rounded-lg text-base cursor-pointer transition 
              ${Path === item.href ? "bg-yellow-300 text-black font-semibold" : "hover:bg-yellow-200 hover:text-black"}`}>
                                <img src={item.icon} alt={item.label} className="w-5" />
                                <span>{item.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Logout Button */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 text-base font-semibold text-red-600 hover:text-red-800 cursor-pointer transition" onClick={logoutHandler}>
                    <img src="/logout.png" alt="logout" className="w-5" />
                    <span>Log out</span>
                </div>
            </div>
        );
    };
    

    export default Sidebar;
