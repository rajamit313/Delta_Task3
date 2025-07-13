import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Orbitron:wght@400..900&display=swap');
          </style>
         <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,255,198,0.3),rgba(0,255,0,0))]">

            {children}         
          </div>
          
          <Footer />
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
        
      </body>
    </html>
  );
}
