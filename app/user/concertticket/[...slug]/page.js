"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ConcertTicket = ({ params }) => {
  const [Name, setName] = useState('');
  const [Tickets, setTickets] = useState('');

  const [rawArtist, rawCity, rawVenue] = params.slug;
  const artist = decodeURIComponent(rawArtist);
  const city = decodeURIComponent(rawCity);
  const venue = decodeURIComponent(rawVenue);

  const router = useRouter();

  const submitHandler = () => {
    if (!Name.trim() || !Tickets.trim()) {
      alert('Please enter all details!');
      return;
    }

    const query = `?Name=${encodeURIComponent(Name)}&Tickets=${encodeURIComponent(Tickets)}&artist=${encodeURIComponent(artist)}&city=${encodeURIComponent(city)}&venue=${encodeURIComponent(venue)}`;
    router.push(`/user/concertticketsummary${query}`);
  };

  return (
    <main className="min-h-screen flex justify-center items-center py-12 px-6">
      <div className="bg-[rgba(255,255,255,0.1)] p-8 rounded-xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold text-yellow-700 mb-2">{artist}</h1>
        <p className="text-sm text-yellow-500 mb-6">{venue}, {city}</p>

        <h2 className="text-lg font-semibold text-yellow-800 mb-4">Enter Booking Details</h2>

        <div className="space-y-5">
          <input
            type="text"
            value={Name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md border text-yellow-700 border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"/>
          <input
            type="number"
            value={Tickets}
            onChange={e => setTickets(e.target.value)}
            placeholder="Number of Tickets"
            className="w-full px-4 py-2 rounded-md border text-yellow-700 border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"/>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={submitHandler}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md transition-all duration-200">
            Proceed to Summary
          </button>
        </div>
      </div>
    </main>
  );
};

export default ConcertTicket;
