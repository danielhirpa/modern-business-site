'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState('2026'); // Safe initial static fallback

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-slate-800 py-8 bg-slate-950 text-center text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {year} Apex Digital Agency. All rights reserved.</p>
        <p className="text-xs text-slate-600">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}