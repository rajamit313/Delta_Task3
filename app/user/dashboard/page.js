"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Train");
  const [List, setList] = useState([]);
  const [Open, setOpen] = useState(false);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const tabStyle = (tab) =>
    `flex flex-col items-center justify-center w-24 pb-1 border-b-4 transition-all duration-200 cursor-pointer
     ${activeTab === tab
        ? 'border-cyan-400 text-cyan-300 font-semibold'
        : 'border-transparent text-white hover:text-cyan-300'}`;

  const inputClass = "w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500";
  const buttonClass = "mt-4 px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700";

  const trainHandler = async () => {
    if (!from || !to || !date) {
      alert("Please fill in all fields");
      return;
    }

    const day = new Date(date);
    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayList[day.getDay()];

    let res = await fetch("/api/add/train", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, dayName }),
    });

    let data = await res.json();
    if (!data.success) {
      alert(data.message);
      setFrom('');
      setTo('');
      setDate('');
      setOpen(false);
    } else {
      setList(data.list);
      setOpen(true);
    }
  };

  const ticketHandler = (train) => {
    router.push(`/user/trainticket/${encodeURIComponent(train.name)}/${train.number}/${encodeURIComponent(from)}/${encodeURIComponent(to)}/${encodeURIComponent(date)}`);
  };

  return (
    <div className="min-h-screen w-full text-white px-4 pt-24 md:ml-56">
      {/* Tabs */}
      <div className="flex justify-start items-center gap-10 px-4 fixed top-16 left-0 right-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-10 py-3 pl-[15rem] border-b border-gray-700">
        {["Train", "Movie", "Concert"].map((tab) => (
          <div key={tab} className={tabStyle(tab)} onClick={() => setActiveTab(tab)}>
            <img src={`/${tab.toLowerCase()}.png`} alt={tab} className="w-8 mb-1" />
            <span>{tab}</span>
          </div>
        ))}
      </div>

      {/* Form Area */}
      <div className="mt-28 p-4 md:pl-6 md:w-[60vw] border-green-600 border rounded-md">
        
        {/* Train Booking Form */}
        {activeTab === "Train" && (
          <div className=" text-teal-600 bg-[rgba(60,139,150,0.11)] p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Train Ticket Booking</h2>
            <input type="text" placeholder="From" className={inputClass} value={from} onChange={(e) => { setFrom(e.target.value); setOpen(false); }} />
            <input type="text" placeholder="To" className={inputClass} value={to} onChange={(e) => { setTo(e.target.value); setOpen(false); }} />
            <input type="date" className={inputClass} value={date} onChange={(e) => { setDate(e.target.value); setOpen(false); }} />
            <button className={buttonClass} onClick={trainHandler}>Search Trains</button>
          </div>
        )}

        {/* Train Results */}
        {Open && List.length > 0 && activeTab === "Train" && (
          <div className="mt-6 space-y-4">
            {List.map((train, index) => {
              const fromStation = train.stations.find(obj => obj.name === from);
              const toStation = train.stations.find(obj => obj.name === to);

              return (
                <div key={index} className="bg-yellow-100 text-black rounded-xl p-4 flex justify-between shadow border border-yellow-400">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{train.name} ({train.number})</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span>From: {from}</span>
                      <span className="text-lg">➟</span>
                      <span>To: {to}</span>
                    </div>
                    <p className="text-sm mt-1">Departure: {fromStation?.departure} | Arrival: {toStation?.arrival}</p>
                    <div className="flex gap-3 mt-3">
                      {Object.entries(train.seats).map(([type, count]) => (
                        <div key={type} className="bg-yellow-200 w-24 h-16 rounded-md flex flex-col justify-center items-center shadow text-sm">
                          <span className="font-semibold">{type}</span>
                          <span>Seats: {count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="text-4xl bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent hover:scale-110 transition"
                      onClick={() => ticketHandler(train)}
                    >
                      ➤
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Movie Form */}
        {activeTab === "Movie" && (
          <div className="bg-red-100 text-black p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Movie Ticket Booking</h2>
            <input type="text" placeholder="City" className={inputClass} />
            <input type="text" placeholder="Movie Name" className={inputClass} />
            <input type="date" className={inputClass} />
            <button className={buttonClass}>Search Movies</button>
          </div>
        )}

        {/* Concert Form */}
        {activeTab === "Concert" && (
          <div className="bg-yellow-100 text-black p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Concert Booking</h2>
            <input type="text" placeholder="City" className={inputClass} />
            <input type="text" placeholder="Artist" className={inputClass} />
            <input type="date" className={inputClass} />
            <button className={buttonClass}>Find Concerts</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
