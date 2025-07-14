"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TrainTicket = ({ params }) => {
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('Male');

  const [rawTrainName, rawTrainNumber, rawFrom, rawTo, rawDate] = params.slug;
  const trainName = decodeURIComponent(rawTrainName);
  const trainNumber = decodeURIComponent(rawTrainNumber);
  const from = decodeURIComponent(rawFrom);
  const to = decodeURIComponent(rawTo);
  const date = decodeURIComponent(rawDate);

  const router = useRouter();

  const submitHandler = async () => {
    if (!Name.trim() || !Age.trim() || !Gender) {
      alert('Please enter all details!');
      return;
    }

    const query = `?Name=${encodeURIComponent(Name)}&Age=${encodeURIComponent(Age)}&Gender=${encodeURIComponent(Gender)}&trainName=${encodeURIComponent(trainName)}&trainNumber=${encodeURIComponent(trainNumber)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`;
    router.push(`/user/trainticketsummary${query}`);
  };

  return (
    <main className="min-h-screen flex justify-center items-center py-12 px-6">
      <div className="bg-[rgba(255,255,255,0.1)] p-8 rounded-xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-teal-700 mb-2">
          {trainName} <span className="text-gray-500">({trainNumber})</span>
        </h1>
        <p className="text-sm text-green-600 mb-6">
          From <span>{from}</span> ➝ To <span>{to}</span> on <span>{date}</span>
        </p>

        <h2 className="text-lg font-semibold text-green-800 mb-4">Enter Passenger Details</h2>

        <div className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-teal-600">Full Name</label>
            <input
              type="text"
              value={Name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md border text-cyan-300 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none"/>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-teal-600">Age</label>
            <input
              type="number"
              value={Age}
              onChange={e => setAge(e.target.value)}
              placeholder="Enter age"
              className="w-full px-4 py-2 rounded-md border text-cyan-300 border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none"/>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-teal-700">Gender</label>
            <select
              value={Gender}
              onChange={e => setGender(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-cyan-300 focus:ring-2 focus:ring-teal-400 focus:outline-none">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={submitHandler}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-md transition-all duration-200">
            Proceed to Summary
          </button>
        </div>
      </div>
    </main>
  );
};

export default TrainTicket;
