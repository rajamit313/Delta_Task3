"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const MovieTicketSummary = () => {
  const searchParams = useSearchParams();

  const Name = searchParams.get("Name");
  const Seats = searchParams.get("Seats");
  const Phone = searchParams.get("Phone");
  const movieName = searchParams.get("movieName");
  const city = searchParams.get("city");
  const theatre = searchParams.get("theatre");

  return (
    <main className="min-h-screen flex justify-center items-center py-12 px-6">
      <div className="bg-[rgba(255,255,255,0.07)] p-8 rounded-xl shadow-md w-full max-w-xl text-white border border-red-400">
        <h1 className="text-3xl font-bold text-red-400 mb-4">🎬 Movie Ticket Summary</h1>

        <div className="text-lg space-y-3">
          <p><span className="font-semibold text-red-300">Name:</span> {Name}</p>
          <p><span className="font-semibold text-red-300">Phone:</span> {Phone}</p>
          <p><span className="font-semibold text-red-300">Seats:</span> {Seats}</p>
          <p><span className="font-semibold text-red-300">Movie:</span> {movieName}</p>
          <p><span className="font-semibold text-red-300">Theatre:</span> {theatre}</p>
          <p><span className="font-semibold text-red-300">City:</span> {city}</p>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md transition-all duration-200">
            Confirm Booking
          </button>
        </div>
      </div>
    </main>
  );
};

export default MovieTicketSummary;
