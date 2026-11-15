import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-700 text-slate-100 flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-3xl space-y-6 bg-slate-800/80 border border-slate-600 p-10 rounded-3xl shadow-xl">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
          Digital Agency & Solutions
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Building Modern Web Experiences
        </h1>

        <p className="text-lg text-slate-200 max-w-xl mx-auto leading-relaxed">
          We design and engineer fast, scalable web applications tailored to grow your business.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/services"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-slate-600 hover:bg-slate-500 text-white font-semibold border border-slate-500 transition"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}