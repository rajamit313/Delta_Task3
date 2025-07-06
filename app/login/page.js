"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';


export const Login = () => {
    const route = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');


    const submitHandler = async () => {
        let res = await fetch("/api/add/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, role }),
        });
        let data = await res.json();

        if (data.success) {
            // Small delay to allow cookie to persist
                route.push("/user/dashboard");
        }
        else {
            alert("Enter valid credentials");
            setPassword('');
            setUsername('');
            setRole('');
        }
    }

    return (
        <><Navbar />
            <div className='flex justify-center py-18 min-h-screen'>

                <div className='h-100 w-80 bg-cyan-200 flex justify-top flex-col items-center rounded-xl'>
                    <div><h1 className='text-3xl h-20 flex justify-center items-center'>Login</h1></div>

                    <div className='flex flex-wrap gap-4 mb-2'>
                        <input type="text" placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value) }} className='mx-auto bg-amber-50 w-54 text-center rounded-sm' />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} className='mx-auto bg-amber-50 w-54 text-center rounded-sm' />
                    </div>

                    <Link href={"/forgotPassword"} className='text-blue-500'>Forgot password?</Link>
                    <div className='py-3'>
                        <label><input type="radio" name="role" value="user" onChange={(e) => setRole(e.target.value)} /> User</label><br />
                        <label><input type="radio" name="role" value="vendor" onChange={(e) => setRole(e.target.value)} /> Vendor</label><br />
                        <label><input type="radio" name="role" value="admin" onChange={(e) => setRole(e.target.value)} /> Admin</label>
                    </div>

                    <button type='button' onClick={submitHandler} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-4 py-1.5 text-center me-2 mb-2 cursor-pointer">Login</button>

                    <div className='mx-auto my-2'>
                        <p>Don't have account? <Link href={"/sign_up"} className='text-blue-500'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;