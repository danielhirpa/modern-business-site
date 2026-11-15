import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Business Site",
  description: "Full-stack business web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-700 text-slate-100 min-h-screen antialiased flex flex-col">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-slate-800/90 backdrop-blur-md border-b border-slate-600">
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight text-white hover:text-cyan-300 transition"
            >
              Modern<span className="text-cyan-400">Biz</span>
            </Link>

            <div className="flex items-center gap-6 text-sm font-medium text-slate-200">
              <Link href="/" className="hover:text-cyan-300 transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-cyan-300 transition">
                About
              </Link>
              <Link href="/services" className="hover:text-cyan-300 transition">
                Services
              </Link>
              <Link href="/portfolio" className="hover:text-cyan-300 transition">
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Page Content */}
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}