import { Geist, Geist_Mono } from "next/font/google";
import Navbar2 from "@/components/Navbar2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UniTick",
  description: "Your one stop solution for ticket booking!"
};

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <Navbar2/>
        <div className="min-h-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0.10)_100%)]">
          {children}
        </div>
       
      </body>
    </html>
  );
}
