'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode to <html> tag
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-[#0F172A] border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-lg font-bold tracking-tight">&lt;SS /&gt;</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 text-sm">
          <a href="#work" className="hover:text-black dark:hover:text-white">Work</a>
          <a href="#testimonials" className="hover:text-black dark:hover:text-white">Testimonials</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/Sagar_CV.pdf"
            download
            className="text-sm font-medium bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Download CV
            
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-2 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}
