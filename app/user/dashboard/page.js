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
    `text-center ${activeTab === tab ? 'border-b-4 border-cyan-500 font-semibold text-cyan-700' : ''}`;

  const inputClass = "w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500";
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

  const ticketHandler = (train)=>{
    router.push(`/user/trainticket/${encodeURIComponent(train.name)}/${train.number}/${encodeURIComponent(from)}/${encodeURIComponent(to)}/${encodeURIComponent(date)}`);

  }

  return (
    <div className="md:mx-54">
      {/* Navigation Tabs */}
      <div className="h-16 w-full flex justify-start items-center gap-18 fixed top-18 bg-white z-10 px-6">

        <div className="cursor-pointer" onClick={() => setActiveTab("Train")}>
          <img src="/train.png" alt="train" className="w-10 mx-auto" />
          <div className={tabStyle("Train")}>Train</div>
        </div>
        <div className="cursor-pointer" onClick={() => setActiveTab("Movie")}>
          <img src="/movie.png" alt="movie" className="w-10 mx-auto" />
          <div className={tabStyle("Movie")}>Movie</div>
        </div>
        <div className="cursor-pointer" onClick={() => setActiveTab("Concert")}>
          <img src="/concert.png" alt="concert" className="w-10 mx-auto" />
          <div className={tabStyle("Concert")}>Concert</div>
        </div>
      </div>

      {/* Booking Forms */}
      <div className="mt-25 p-6 md:pl-20 w-auto md:w-[60vw]">
        {/* Train Form */}
        {activeTab === "Train" && (
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Train Ticket Booking</h2>
            <input type="text" placeholder="From" className={inputClass} value={from} onChange={(e) => { setFrom(e.target.value); setOpen(false); }} />
            <input type="text" placeholder="To" className={inputClass} value={to} onChange={(e) => { setTo(e.target.value); setOpen(false); }} />
            <input type="date" className={inputClass} value={date} onChange={(e) => { setDate(e.target.value); setOpen(false); }} />
            <button className={buttonClass} onClick={trainHandler}>Search Trains</button>
          </div>
        )}

        {/* Train Results */}
        {Open && List.length > 0 && activeTab === "Train" && (
          <div className="h-auto mt-4">
            {List.map((train, index) => (

              <div key={index} className="border border-amber-500 p-4 mb-2 rounded shadow bg-yellow-50 flex justify-between">
                <div>
                  <h2 className="text-lg font-bold">{train.name} ({train.number})</h2>
                  <div className='flex justify-start gap-20'>
                    <p>From: {from}</p>
                    <p className='w-10'>➟</p>
                    <p>To: {to}</p>
                  </div>
                  <p>Departure: {train.stations[train.stations.findIndex(obj => obj.name === from)].departure} | Arrival: {train.stations[train.stations.findIndex(obj => obj.name === to)].arrival}</p>
                  <div className='flex gap-5 mt-2'>
                    {Object.entries(train.seats).map(i => (
                      <div className='w-20 h-16 border bg-yellow-100 rounded flex justify-start items-center flex-col' key={i[0]}>
                        <div className='font-semibold'>{i[0]}</div>
                        <div>Seats: {i[1]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='w-10 flex justify-center items-center text-3xl'>
                  <button className="text-5xl bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent cursor-pointer" onClick={()=>ticketHandler(train)}>
                    ➤
                  </button>
                </div>
              </div>

            ))}
          </div>
        )}

        {/* Movie Form */}
        {activeTab === "Movie" && (
          <div className="bg-red-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Movie Ticket Booking</h2>
            <input type="text" placeholder="City" className={inputClass} />
            <input type="text" placeholder="Movie Name" className={inputClass} />
            <input type="date" className={inputClass} />
            <button className={buttonClass}>Search Movies</button>
          </div>
        )}

        {/* Concert Form */}
        {activeTab === "Concert" && (
          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Concert Booking</h2>
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