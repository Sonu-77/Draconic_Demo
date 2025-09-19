"use client";

import  { useRouter } from "next/navigation";



export default function Home() {
  

  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1d0f05] text-gray-200">
      {/* Glow gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-600/25 via-fuchsia-500/20 to-amber-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 blur-2xl" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      {/* Center content */}
      <section className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">
        {/* Glass card */}
        <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-wider text-gray-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AI Market Copilot
          </div>

          {/* Title */}
          {/* Replace with <motion.h1>…</motion.h1> if using Framer Motion */}
          <h1 className="text-center text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-br from-indigo-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(99,102,241,0.15)]">
              Welcome to Draconic.ai
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-gray-300 md:text-lg">
            Ask about support &amp; resistance, test areas, swing velocity/acceleration,
            and get an annotated chart—instantly.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => router.push("/trading-chat")}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-600/80 to-fuchsia-600/80 px-5 py-3 text-base font-medium text-white shadow-[0_8px_24px_rgba(99,102,241,0.35)] transition-all hover:shadow-[0_12px_36px_rgba(236,72,153,0.35)] focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
              aria-label="Open trading chat"
            >
              Ask Me about Trade
              <span className="translate-x-0 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>

            
          </div>

          {/* Feature chips */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-300">
            {["S/R Zones", "Test Area", "Swings A–E", "Velocity", "Acceleration", "Magnitude"].map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-black/30 px-3 py-1"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
