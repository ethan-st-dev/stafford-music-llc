'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-28">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center group select-none">
            <Image
              src="/StaffordMusicLogo2.png"
              alt="Stafford Music"
              width={100}
              height={40}
              className="h-17 w-auto select-none transition-all duration-700 drop-shadow-[0_0_12px_rgba(30,100,180,0.5)] group-hover:brightness-105 group-hover:drop-shadow-[0_0_18px_rgba(30,100,180,0.7)]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation links and Contact button */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`transition-all duration-300 font-semibold uppercase text-base tracking-wider relative group ${
              pathname === '/' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
            }`}
          >
            <span className="relative z-10">Home</span>
            <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transition-transform ${
              pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`} />
          </Link>
          <Link
            href="/about"
            className={`transition-all duration-300 font-semibold uppercase text-base tracking-wider relative group ${
              pathname === '/about' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
            }`}
          >
            <span className="relative z-10">About</span>
            <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transition-transform ${
              pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`} />
          </Link>
          
          {/* Music Dropdown */}
          <div className="relative group">
            <button className={`transition-all duration-300 font-semibold uppercase text-base tracking-wider flex items-center gap-1 ${
              pathname === '/listen' || pathname === '/credits' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
            }`}>
              <span className="relative z-10">Music</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transition-transform ${
                pathname === '/listen' || pathname === '/credits' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-4 w-48 bg-slate-900/95 backdrop-blur-md rounded border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />
              <Link
                href="/listen"
                className={`relative block px-6 py-3 hover:bg-cyan-500/10 transition-all duration-200 border-b border-cyan-500/20 uppercase text-sm tracking-wide font-semibold ${
                  pathname === '/listen' ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-300 hover:text-cyan-300'
                }`}
              >
                Listen
              </Link>
              <Link
                href="/credits"
                className={`relative block px-6 py-3 hover:bg-cyan-500/10 transition-all duration-200 uppercase text-sm tracking-wide font-semibold ${
                  pathname === '/credits' ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-300 hover:text-cyan-300'
                }`}
              >
                Credits
              </Link>
            </div>
          </div>
          
          {/* Contact Button */}
          <Link
            href="/contact"
            className={`relative px-6 py-2.5 text-white font-bold uppercase text-sm tracking-wider overflow-hidden group angular-cut ${
              pathname === '/contact' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-600'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/40 transition-all" />
            <span className="relative z-10">Contact</span>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-10 h-10 text-slate-300 hover:text-cyan-400 transition-colors z-50"
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-28 bg-slate-950/98 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="relative h-full border-t border-cyan-500/20">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col p-8 gap-6 bg-slate-900/95 backdrop-blur-md rounded-lg mx-4 mt-6 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`transition-all duration-300 font-bold uppercase text-2xl tracking-wider py-3 border-b border-cyan-500/20 ${
                pathname === '/' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`transition-all duration-300 font-bold uppercase text-2xl tracking-wider py-3 border-b border-cyan-500/20 ${
                pathname === '/about' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
              }`}
            >
              About
            </Link>
            
            {/* Mobile Music Section */}
            <div className="border-b border-cyan-500/20 pb-3">
              <div className={`font-bold uppercase text-xl tracking-wider mb-3 ${
                pathname === '/listen' || pathname === '/credits' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
              }`}>
                Music
              </div>
              <div className="flex flex-col gap-3 pl-4">
                <Link
                  href="/listen"
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-all duration-300 font-semibold uppercase text-lg tracking-wide ${
                    pathname === '/listen' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  Listen
                </Link>
                <Link
                  href="/credits"
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-all duration-300 font-semibold uppercase text-lg tracking-wide ${
                    pathname === '/credits' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  Credits
                </Link>
              </div>
            </div>
            
            {/* Mobile Contact Button */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`relative px-8 py-4 text-white font-bold uppercase text-lg tracking-wider text-center angular-cut mt-4 ${
                pathname === '/contact' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gradient-to-r from-cyan-600 to-blue-600'
              }`}
            >
              <span className="relative z-10">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
