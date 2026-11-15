import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Intro */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          About <span className="text-indigo-400">ApexDigital</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
          We are a full-service digital agency dedicated to helping small businesses, local contractors, and startups establish a powerful online presence.
        </p>
      </section>

      {/* Core Values / Stats */}
      <section className="grid sm:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-2">
          <div className="text-3xl font-bold text-indigo-400">50+</div>
          <div className="text-sm text-slate-300 font-medium">Projects Delivered</div>
          <p className="text-xs text-slate-500">Custom web applications built for clients across various industries.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-2">
          <div className="text-3xl font-bold text-indigo-400">99%</div>
          <div className="text-sm text-slate-300 font-medium">Client Satisfaction</div>
          <p className="text-xs text-slate-500">Fast turnaround, responsive design, and dedicated ongoing support.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-2">
          <div className="text-3xl font-bold text-indigo-400">2x - 3x</div>
          <div className="text-sm text-slate-300 font-medium">Average Lead Growth</div>
          <p className="text-xs text-slate-500">Helping businesses convert web traffic into paying customers.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl space-y-4">
        <h2 className="text-2xl font-bold text-slate-100">Our Mission</h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Many small companies miss out on valuable client opportunities simply because they lack an updated, mobile-friendly web presence. We bridge that gap by delivering fast, beautifully designed websites equipped with modern communication tools like direct WhatsApp links, clear call-to-actions, and interactive contact forms.
        </p>
        <div className="pt-2">
          <Link href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition">
            Work With Us
          </Link>
        </div>
      </section>
    </div>
  );
}