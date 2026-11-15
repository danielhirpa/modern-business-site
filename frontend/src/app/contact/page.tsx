'use client';
import { useState } from 'react';
import { sendContactMessage } from '../services/api';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Sending...');
    setIsError(false);
    try {
      await sendContactMessage(form);
      setStatus('Message received! We will get back to you within 24 hours.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setIsError(true);
      setStatus('Something went wrong. Please check your connection and try again.');
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-20 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Get In Touch
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Book a Free Consultation
        </h1>
        <p className="text-slate-400 text-base">
          Have a project in mind? Tell us about your goals and we’ll craft a technical roadmap.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl space-y-6"
      >
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">Your Name</label>
          <input
            type="text"
            placeholder="e.g., Alex Morgan"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">Work Email</label>
          <input
            type="email"
            placeholder="alex@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">Project Details</label>
          <textarea
            placeholder="Tell us about your timeline, features, and goals..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition h-36 resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200 cursor-pointer"
        >
          Send Message
        </button>

        {status && (
          <div
            className={`p-4 rounded-xl text-sm text-center border ${
              isError
                ? 'bg-red-500/10 border-red-500/30 text-red-400'
                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            }`}
          >
            {status}
          </div>
        )}
      </form>
    </section>
  );
}