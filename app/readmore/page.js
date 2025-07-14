'use client';
import Link from 'next/link';

const ReadMore = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-16 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-teal-400 mb-6 text-center">About UniTick</h1>

        <section className="space-y-6 text-white/90 text-base leading-relaxed">
          <p>
            <span className="text-teal-300 font-semibold">UniTick</span> is a modern and intuitive ticket booking platform built to simplify your travel and entertainment planning.
            Whether you're booking a train journey, a movie night, or a concert, UniTick brings everything into one seamless, secure experience.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-amber-400 mb-2">🌟 Key Features</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🔍 Real-time train, movie, and concert ticket search</li>
              <li>🎫 Instant booking and ticket summary with QR verification</li>
              <li>🛡️ Secure user authentication and profile management</li>
              <li>📜 Booking history and digital records</li>
              <li>📷 Upload profile picture via Cloudinary integration</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-400 mb-2">💡 Our Mission</h2>
            <p>
              To make ticket booking as fast, secure, and user-friendly as possible. We believe that technology should remove barriers, not create them.
              UniTick is designed to support seamless experiences whether you're a student, traveler, or event enthusiast.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-400 mb-2">🛠️ Built With</h2>
            <p>
              Next.js • Tailwind CSS • MongoDB • JWT Auth • Cloudinary
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-400 mb-2">👨‍💻 Meet the Developer</h2>
            <p>
              This project is crafted by <span className="text-teal-300">Amit Raj</span>, an aspiring full-stack developer from NIT Trichy.
              If you're curious to explore the code, contribute, or collaborate, feel free to reach out!
            </p>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link href="/">
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold hover:scale-105 transition">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ReadMore;
