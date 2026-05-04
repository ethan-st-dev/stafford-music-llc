import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stafford Music LLC",
  description: "Stafford Music - Your music destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="relative border-b border-cyan-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-sm z-50">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
          <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-30">
              {/* Logo on the left */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center group">
                  <div className="relative">
                    <div className="absolute inset-0 blur-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-all" />
                    <Image
                      src="/StaffordMusic.png"
                      alt="Stafford Music"
                      width={180}
                      height={32}
                      className="h-40 w-auto relative z-10"
                      priority
                    />
                  </div>
                </Link>
              </div>

              {/* Navigation links and Contact button */}
              <div className="flex items-center gap-8">
                <Link
                  href="/"
                  className="text-slate-300 hover:text-cyan-400 transition-all duration-300 font-semibold uppercase text-base tracking-wider relative group"
                >
                  <span className="relative z-10">Home</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-cyan-400 transition-all duration-300 font-semibold uppercase text-base tracking-wider relative group"
                >
                  <span className="relative z-10">About</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
                </Link>
                
                {/* Music Dropdown */}
                <div className="relative group">
                  <button className="text-slate-300 hover:text-cyan-400 transition-all duration-300 font-semibold uppercase text-base tracking-wider flex items-center gap-1">
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
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-4 w-48 bg-slate-900/95 backdrop-blur-md rounded border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />
                    <Link
                      href="/listen"
                      className="relative block px-6 py-3 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 border-b border-cyan-500/20 uppercase text-sm tracking-wide font-semibold"
                    >
                      Listen
                    </Link>
                    <Link
                      href="/credits"
                      className="relative block px-6 py-3 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 uppercase text-sm tracking-wide font-semibold"
                    >
                      Credits
                    </Link>
                  </div>
                </div>
                
                {/* Contact Button */}
                <Link
                  href="/contact"
                  className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold uppercase text-sm tracking-wider overflow-hidden group angular-cut"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/40 transition-all" />
                  <span className="relative z-10">Contact</span>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        
        <main className="flex-1">
          {children}
        </main>

        <footer className="relative border-t border-cyan-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-12">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-6 mb-4">
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wide">Home</Link>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wide">About</Link>
                <Link href="/listen" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wide">Listen</Link>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wide">Contact</Link>
              </div>
              <p className="text-center text-slate-500 text-sm uppercase tracking-wider">
                © {new Date().getFullYear()} Stafford Music LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
