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
        <>
            <div className="p-6 md:mx-70 w-auto md:w-[60vw]">
                <h2 className="text-2xl font-bold mb-4">Ticket Summary</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Train:</strong> {trainName} ({trainNumber})</p>
                <p><strong>Route:</strong> {from} ➝ {to}</p>
                <p><strong>Date:</strong> {date}</p>
            </div>
            <div className='flex justify-center my-2'>
                <button className='w-29 h-9 cursor-pointer bg-teal-400 rounded-md border-teal-500 border-3 hover:bg-teal-500'>Proceed to pay</button>
            </div>
        </>
    );
};

export default TicketSummary;
