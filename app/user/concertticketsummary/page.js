"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const ConcertTicketSummary = () => {
  const searchParams = useSearchParams();

  const Name = searchParams.get("Name");
  const Tickets = searchParams.get("Tickets");
  const artist = searchParams.get("artist");
  const city = searchParams.get("city");
  const venue = searchParams.get("venue");

  return (
    <main className="min-h-screen flex justify-center items-center py-12 px-6">
      <div className="bg-[rgba(255,255,255,0.07)] p-8 rounded-xl shadow-md w-full max-w-xl text-white border border-yellow-400">
        <h1 className="text-3xl font-bold text-yellow-500 mb-4">🎵 Concert Ticket Summary</h1>

        <div className="text-lg space-y-3">
          <p><span className="font-semibold text-yellow-300">Name:</span> {Name}</p>
          <p><span className="font-semibold text-yellow-300">Artist:</span> {artist}</p>
          <p><span className="font-semibold text-yellow-300">Venue:</span> {venue}</p>
          <p><span className="font-semibold text-yellow-300">City:</span> {city}</p>
          <p><span className="font-semibold text-yellow-300">Tickets:</span> {Tickets}</p>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-md transition-all duration-200">
            Confirm Booking
          </button>
        </div>
      </div>
    </main>
  );
};

export default ConcertTicketSummary;
