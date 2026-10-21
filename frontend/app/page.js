import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-extrabold text-white mb-6">
        Reliable Solutions for <span className="text-indigo-400">Local Businesses</span>
      </h1>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
        We provide top-tier construction, cleaning, and digital agency services designed to elevate your company to the next level.
      </p>
      <div className="space-x-4">
        <Link href="/services" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition">
          View Our Services
        </Link>
        <Link href="/contact" className="border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold px-6 py-3 rounded-xl transition">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}