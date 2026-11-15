'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-wide text-indigo-400">
          ApexDigital
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link href="/services" className="hover:text-indigo-400 transition">Services</Link>
          <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            ) : (
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4 text-slate-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-400">Contact</Link>
        </div>
      )}
    </header>
  );
}