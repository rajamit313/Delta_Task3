'use client';
import { useSearchParams } from 'next/navigation';

const TicketSummary = () => {
  const params = useSearchParams();

  const name = decodeURIComponent(params.get('Name') || '');
  const age = decodeURIComponent(params.get('Age') || '');
  const gender = decodeURIComponent(params.get('Gender') || '');
  const trainName = decodeURIComponent(params.get('trainName') || '');
  const trainNumber = decodeURIComponent(params.get('trainNumber') || '');
  const from = decodeURIComponent(params.get('from') || '');
  const to = decodeURIComponent(params.get('to') || '');
  const date = decodeURIComponent(params.get('date') || '');

  return (
    <main className="min-h-screen  text-white px-6 py-16 flex justify-center items-start">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-extrabold text-cyan-400 mb-6 text-center">
          Ticket Summary
        </h2>

        <div className="space-y-4 text-base text-white/90">
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-gray-300">Passenger Name:</span>
            <span className="font-medium">{name}</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-gray-300">Age:</span>
            <span className="font-medium">{age}</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-gray-300">Gender:</span>
            <span className="font-medium">{gender}</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-gray-300">Train:</span>
            <span className="font-medium">
              {trainName} ({trainNumber})
            </span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-gray-300">Route:</span>
            <span className="font-medium">
              {from} ➝ {to}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Date:</span>
            <span className="font-medium">{date}</span>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold hover:scale-105 transition">
            Proceed to Pay
          </button>
        </div>
      </div>
    </main>
  );
};

export default TicketSummary;
