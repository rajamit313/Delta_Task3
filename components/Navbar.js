import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    
    <nav className='bg-[rgba(0,0,0,0.9)] text-white flex justify-between items-center h-14 w-full sticky top-0 overflow-x-hidden'>
      <div className='text-white text-2xl pl-30'>UniTick</div>
      <ul className='flex justify-between gap-6 p-4'>

        <Link href={"/"}>
          <button className='cursor-pointer'>Home</button>
        </Link>
        <Link href={"/sign_up"}><button className='cursor-pointer'>Sign up</button></Link>
        <Link href={"/login"}><button className='cursor-pointer'>Login</button></Link>
        <button className='cursor-pointer'>About</button>
      </ul>
    </nav>
  )
}
export default Navbar
