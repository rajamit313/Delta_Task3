'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast';
import { toast, Bounce } from 'react-toastify';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async () => {
        if (!username || !email || !newPassword) {
            alert("Please fill in all fields.");
            return;
        }

        const res = await fetch('/api/add/forgotPassword', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, newPassword }),
        });

        const data = await res.json();
        if (data.success) {
            router.push('/login');

        } else {
            toast(data.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <>
            <Toast />
            <div className="flex justify-center items-center min-h-screen px-4">
                <div className="bg-cyan-100/10 p-8 rounded-xl shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-cyan-800 mb-6">🔒 Forgot Password</h2>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        <input
                            type="email"
                            placeholder="Registered Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full mt-6 bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white font-semibold py-2 rounded-md hover:from-red-500 hover:to-red-700 transition">
                        Submit
                    </button>

                    <div className="text-center mt-4 text-sm text-gray-700">
                        Remembered your password?{" "}
                        <Link href="/login" className="text-cyan-600 hover:underline">
                            Go to Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
