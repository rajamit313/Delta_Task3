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
        <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,255,198,0.3),rgba(0,255,0,0))]">
          {children}
        </div>
       
      </body>
    </html>
  );
}
