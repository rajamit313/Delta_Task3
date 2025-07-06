import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative top-10">
        <div className="text-black flex justify-center flex-col h-40 items-center gap-3">
          <h1 className="text-5xl">UniTick</h1>
          <p className="text-xl">One stop solution for ticket booking</p>
        </div>
        <div className="flex justify-center gap-3">
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 to-blue-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Start Now</button>
          </Link>
          <Link href={"/readmore"}>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 to-blue-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Read More</button>
          </Link>
        </div>
        <div className="gap-6 flex justify-center py-16 ">
          <div className="w-70 h-70 bg-yellow-200 rounded-2xl overflow-hidden">
            <img src="train.jpg" alt="train" className="h-46 w-full " />

          </div>
          <div className="w-70 h-70 bg-yellow-200 rounded-2xl overflow-hidden">
            <img src="movie.jpg" alt="movie" className="h-46 w-full" />
          </div>
          <div className="w-70 h-70 bg-yellow-200 rounded-2xl overflow-hidden">
            <img src="flight.jpg" alt="flight" className="h-46 w-full" />
            Book flight tickets at lowest price
          </div>
          <div className="w-70 h-70 bg-yellow-200 rounded-2xl overflow-hidden">
            <img src="concert.jpg" alt="concert" className="h-46 w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
