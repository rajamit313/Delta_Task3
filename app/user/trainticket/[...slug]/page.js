"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TrainTicket = ({ params }) => {

    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Gender, setGender] = useState('Male')
    const [rawTrainName, rawTrainNumber, rawFrom, rawTo, rawDate] = params.slug;

    const trainName = decodeURIComponent(rawTrainName);
    const trainNumber = decodeURIComponent(rawTrainNumber);
    const from = decodeURIComponent(rawFrom);
    const to = decodeURIComponent(rawTo);
    const date = decodeURIComponent(rawDate);


    const router = useRouter();
    const submitHandler = async () => {
        console.log({ Name, Age, Gender });
        if (!Name || !Age || !Gender) {
            alert('Please enter all details!');
            return;
        }
        let res = await fetch("/api/add/trainticket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Name, Age, Gender, trainName, trainNumber, from, to, date }),
        });
        let data = await res.json();
        if (!data) {
            alert('Server issue. Please try again!');
            setName('');
            setAge('');
            setGender('');
            return;
        }

        const query = `?Name=${encodeURIComponent(Name)}&Age=${encodeURIComponent(Age)}&Gender=${encodeURIComponent(Gender)}&trainName=${encodeURIComponent(trainName)}&trainNumber=${encodeURIComponent(trainNumber)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}`;
        router.push(`/user/trainticketsummary${query}`);
    }


    return (
        <div className="p-6 md:mx-70 w-auto md:w-[60vw]">
            <h1 className="text-2xl font-bold mb-4">{trainName}({trainNumber})</h1>

            <p className="mb-4 text-gray-600">Passenger Details</p>
            <div className="space-y-4">
                <div>
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        placeholder="Passenger Name"
                        value={Name}
                        name="name"
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label className="block font-medium">Age</label>
                    <input
                        type="number"
                        placeholder="Age"
                        name="age"
                        value={Age}
                        onChange={e => setAge(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label className="block font-medium">Gender</label>
                    <select
                        name="gender"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={Gender}
                        onChange={e => setGender(e.target.value)}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='w-18 h-8 rounded-md bg-teal-500 my-6' onClick={submitHandler}>Proceed</button>
            </div>
        </div>
    );
};

export default TrainTicket;
