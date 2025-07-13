import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[rgba(10,25,20,0.8)] backdrop-blur-md text-white flex justify-between items-center h-16 w-full sticky top-0 px-6 z-50 shadow-md">
      <div className="text-2xl font-bold text-green-300 tracking-wide">UniTick</div>
      <ul className="flex gap-6 items-center">
        <Link href="/" passHref>
          <button className="hover:text-green-300 transition duration-200">Home</button>
        </Link>
        <Link href="/login" passHref>
          <button className="hover:text-green-300 transition duration-200">Login</button>
        </Link>
        <button className="hover:text-green-300 transition duration-200">About</button>
      </ul>
    </nav>
  );
};

export default Navbar;
