import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative top-10 px-4">
        <div className="text-white flex justify-center flex-col h-40 items-center gap-3">
          <h1 className="text-5xl text-green-300 font-semibold">UniTick</h1>
          <p className="text-xl text-gray-300">One stop solution for ticket booking</p>
        </div>

        <div className="flex justify-center gap-3 flex-wrap">
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 to-emerald-500 hover:from-emerald-500 hover:to-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 cursor-pointer">
              Start Now
            </button>
          </Link>
          <Link href="/readmore">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 to-emerald-500 hover:from-emerald-500 hover:to-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 cursor-pointer"
            >
              Read More
            </button>
          </Link>
        </div>

        <div className="gap-6 flex justify-center flex-wrap py-16">
          {[
            {
              src: "train.jpg",
              alt: "Train",
              title: "Train Tickets",
              desc: "Book train tickets easily and instantly",
            },
            {
              src: "movie.jpg",
              alt: "Movie",
              title: "Movie Tickets",
              desc: "Reserve your seats at top cinemas",
            },
            {
              src: "flight.jpg",
              alt: "Flight",
              title: "Flight Tickets",
              desc: "Book flights at the best prices",
            },
            {
              src: "concert.jpg",
              alt: "Concert",
              title: "Concert Passes",
              desc: "Get your passes for live events",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-64 bg-white/10 text-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-105">
                
              <img src={item.src} alt={item.alt} className="w-full h-40 object-cover" />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-green-300">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
