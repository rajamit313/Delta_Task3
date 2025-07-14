"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const MovieTicket = ({ params }) => {
  const [Name, setName] = useState('');
  const [Seats, setSeats] = useState('');
  const [Phone, setPhone] = useState('');

  const [rawMovieName, rawCity, rawTheatre] = params.slug;
  const movieName = decodeURIComponent(rawMovieName);
  const city = decodeURIComponent(rawCity);
  const theatre = decodeURIComponent(rawTheatre);

  const router = useRouter();

  const submitHandler = () => {
    if (!Name.trim() || !Seats.trim() || !Phone.trim()) {
      alert('Please enter all details!');
      return;
    }

    const query = `?Name=${encodeURIComponent(Name)}&Seats=${encodeURIComponent(Seats)}&Phone=${encodeURIComponent(Phone)}&movieName=${encodeURIComponent(movieName)}&city=${encodeURIComponent(city)}&theatre=${encodeURIComponent(theatre)}`;
    router.push(`/user/movieticketsummary${query}`);
  };

  return (
    <main className="min-h-screen flex justify-center items-center py-12 px-6">
      <div className="bg-[rgba(255,255,255,0.1)] p-8 rounded-xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold text-red-400 mb-2">{movieName}</h1>
        <p className="text-sm text-red-400 mb-6">{theatre}, {city}</p>

        <h2 className="text-lg font-semibold text-red-300 mb-4">Enter Booking Details</h2>

        <div className="space-y-5">
          <input type="text" value={Name} onChange={e => setName(e.target.value)} placeholder="Your Name" className="w-full px-4 py-2 rounded-md border text-red-400 border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none" />
          <input type="number" value={Seats} onChange={e => setSeats(e.target.value)} placeholder="Number of Seats" className="w-full px-4 py-2 rounded-md border text-red-400 border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none" />
          <input type="tel" value={Phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" className="w-full px-4 py-2 rounded-md border text-red-400 border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none" />
        </div>

        <div className="mt-6 text-center">
          <button onClick={submitHandler} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md transition-all duration-200">Proceed to Summary</button>
        </div>
      </div>
    </main>
  );
};

export default MovieTicket;
