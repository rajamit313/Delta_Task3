"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const SignUp = () => {
  const route = useRouter()
  const [username, setUsername] = useState('')
  const [emailID, setEmailID] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const role = "user" // only user can sign up

  const submitHandler = async () => {
    if (!username || !emailID || !password || !confirmPassword) {
      alert("Please fill in all fields")
      return
    }
    if (!(emailID.includes("@gmail.com"))) {
      alert("Enter valid email")
      setEmailID('')
      return
    }
    if (password !== confirmPassword) {
      alert("Passwords did not match")
      setPassword('')
      setConfirmPassword('')
      return
    }

    let res = await fetch("/api/add/sign_up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role, emailID }),
    })
    let data = await res.json()

    if (data.success) {
      alert(data.message)
      route.push("/login")
    } else {
      alert(data.message)
      setPassword('')
      setConfirmPassword('')
      setEmailID('')
      setUsername('')
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen px-4 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,255,198,0.1),rgba(0,255,0,0))]">
        <div className="w-full max-w-md bg-white/10 text-white backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
          <h1 className="text-3xl font-bold text-center mb-6 text-green-300">Sign Up</h1>

          <div className="space-y-4 mb-6">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input type="email" placeholder="Email ID" value={emailID} onChange={(e) => setEmailID(e.target.value)} className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" />
          </div>

          <button type="button" onClick={submitHandler} className="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:to-red-700 font-medium rounded-md text-sm px-5 py-2 mb-4 transition">Sign Up</button>

          <p className="text-center text-sm">Already have an account? <Link href="/login" className="text-blue-400 hover:underline">Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default SignUp
