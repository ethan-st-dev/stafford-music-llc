import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Navigation from "./components/Navigation";
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
          <Navigation />
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
                <Link 
                  href="/" 
                  className="inline-flex items-center group select-none mr-1 font-mono hover-static-glitch transition-colors duration-150"
                >
                  @
                </Link>
                {new Date().getFullYear()} Stafford Music LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
