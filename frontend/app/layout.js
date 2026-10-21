import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Modern Business Website',
  description: 'Professional services for local businesses',
};

export default function RootLayout({ children }) {
  // Replace with your actual WhatsApp phone number (include country code, e.g., 1234567890 without '+' or spaces)
  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent("Hello, I would like to inquire about your services!");

  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 min-h-screen flex flex-col relative">
        {/* Navigation Bar */}
        <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-extrabold text-indigo-400">
              corebuild<span className="text-slate-100">.</span>
            </Link>
            <div className="space-x-6 text-sm font-medium text-slate-300">
              <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
              <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
              <Link href="/services" className="hover:text-indigo-400 transition">Services</Link>
              <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition">Contact Us</Link>
            </div>
          </nav>
        </header>

        {/* Main Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp Icon SVG */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          
          {/* Optional Tooltip on Hover */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out text-sm font-semibold">
            Chat with Us
          </span>
        </a>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-500">
          <p>© 2026 corebuild Solutions. Built for Local Businesses.</p>
        </footer>
      </body>
    </html>
  );
}