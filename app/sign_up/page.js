"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Navbar from '@/components/Navbar';

const SignUp = () => {
    const route = useRouter();
    const [username, setUsername] = useState('');
    const [emailID, setEmailID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const role = "user"; //only user can sign up. Vendors and admin will have their unique ID to login

    const submitHandler = async () => {
        if (!username || !emailID || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }
        if (!(emailID.includes("@gmail.com"))) {
            alert("Enter valid email");
            setEmailID('');
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords did not match");
            setPassword('');
            setConfirmPassword('');
            return;
        }

        let res = await fetch("/api/add/sign_up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, role, emailID }),
        });
        let data = await res.json();

        if (data.success) {
            alert(data.message);
            route.push("/login");
        } else {
            alert(data.message);
            setPassword('');
            setConfirmPassword('');
            setEmailID('');
            setUsername('');
        }
    }

    return (
        <><Navbar />
            <div className='flex justify-center py-18 min-h-screen'>
                <div className='h-100 w-80 bg-cyan-200 flex justify-top flex-col items-center rounded-xl'>

                    <div><h1 className='text-3xl h-20 flex justify-center items-center'>Sign Up</h1></div>

                    <div className='flex flex-wrap gap-4'>
                        <input type="text" placeholder='Username' value={username} onChange={(e) => { setUsername(e.target.value) }} className='mx-auto bg-amber-50 w-54 text-center rounded-sm' />
                        <input type="email" placeholder='Email ID' value={emailID} onChange={(e) => { setEmailID(e.target.value) }} className='mx-auto bg-amber-50 w-54 text-center rounded-sm' />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} className='mx-auto bg-amber-50 w-54 text-center rounded-sm' />
                        <input type="password" placeholder='Confirm password' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} className='mx-auto bg-amber-50 w-54 text-center rounded-sm' />
                    </div>

                    <button type="button" onClick={submitHandler} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-4 py-1.5 text-center me-2 mb-2 cursor-pointer my-6">Sign Up</button>
                    <div className='mx-auto my-2'>
                        <p>Already have account? <Link href={"/login"} className='text-blue-400'>Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp
