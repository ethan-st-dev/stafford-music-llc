import Image from 'next/image';

export default function About() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,212,255,0.1)_0%,_transparent_50%)]" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-6 uppercase tracking-tight">
            About Us
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mb-8" />
        </div>
        
        <div className="space-y-12">
          {/* Main Content Card */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-10 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl text-cyan-400 font-semibold">
                Welcome to Stafford Music LLC.
              </p>
              <p>
                We are dedicated to bringing quality music experiences that resonate with the soul and ignite the imagination. Our journey is one of passion, creativity, and relentless pursuit of sonic excellence.
              </p>
              <p>
                Our mission transcends mere entertainment—we craft soundscapes that tell stories, evoke emotions, and create lasting memories for our audience.
              </p>
            </div>
          </div>

          {/* Composers Section */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-10 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-cyan-400 mb-8 uppercase tracking-wide flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500" />
                The Composers
              </h2>
              
              <div className="space-y-12">
                {/* Glenn Stafford */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/30 angular-cut overflow-hidden">
                      <Image
                        src="/Glenn.jpg"
                        alt="Glenn Stafford"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-3">Glenn Stafford</h3>
                    <div className="text-slate-300 leading-relaxed space-y-3">
                      <p>
                          Glenn Stafford is an award-winning AAA video game composer and audio professional, creating iconic music and soundscapes for games and immersive worlds. His work spans across decades of highly popular game franchises - including Warcraft, Starcraft, Diablo, Heroes of the Storm, Gorilla Tag and Orion Drift.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Aaron Stafford */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/30 angular-cut overflow-hidden">
                      <Image
                        src="/Aaron.jpg"
                        alt="Aaron Stafford"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-300 mb-3">Aaron Stafford</h3>
                    <div className="text-slate-300 leading-relaxed space-y-3">
                      <p>
                        [Bio content for Aaron Stafford - Add his background, achievements, and musical journey here]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-10 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-cyan-400 mb-8 uppercase tracking-wide flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500" />
                Awards & Recognition
              </h2>
              
              <div className="space-y-4">
                {[
                  { category: 'Excellence in Audio', game: 'Diablo II', award: 'Game Developers Choice Award', year: 2001, status: 'Winner' },
                  { category: 'Best Sound Editing', game: 'World of Warcraft', award: 'Golden Reel Award', year: 2005, status: 'Nominee' },
                  { category: 'Best Original Score', game: 'Diablo III', award: 'HMMA Award', year: 2012, status: 'Winner' },
                  { category: 'Best Original Music', game: 'Diablo III', award: 'BAFTA Games Award', year: 2013, status: 'Nominee' },
                  { category: 'Best Original Score', game: 'World of Warcraft: Legion', award: 'HMMA Award', year: 2016, status: 'Nominee' },
                  { category: 'Best Original Score', game: 'World of Warcraft: Battle For Azeroth', award: 'HMMA Award', year: 2018, status: 'Nominee' },
                  { category: 'Best Original Score', game: 'World of Warcraft: The War Within', award: 'HMMA Award', year: 2024, status: 'Nominee' },
                ].map((award, i) => (
                  <div
                    key={i}
                    className="relative bg-gradient-to-r from-slate-800/50 to-slate-900/30 p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all angular-cut group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${award.status === 'Winner' ? 'bg-yellow-400' : 'bg-cyan-400'}`} />
                          <div>
                            <h3 className="text-lg font-bold text-cyan-300">{award.category}</h3>
                            <p className="text-slate-400 text-sm italic">{award.game}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <span className="text-slate-300 font-semibold">{award.award}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-cyan-400 text-sm">{award.year}</span>
                          <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider angular-cut ${
                            award.status === 'Winner' 
                              ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-yellow-100' 
                              : 'bg-gradient-to-r from-cyan-600/50 to-blue-600/50 text-cyan-100'
                          }`}>
                            {award.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-10 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-cyan-400 mb-8 uppercase tracking-wide flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500" />
                Our Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Composing */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-cyan-500/30 angular-cut group hover:border-cyan-500/60 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 angular-cut flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-3 uppercase tracking-wide">Composing</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Original compositions crafted to bring your vision to life, from epic orchestral scores to intimate melodies.
                    </p>
                  </div>
                </div>

                {/* Sound Design/Implementation */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-cyan-500/30 angular-cut group hover:border-cyan-500/60 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 angular-cut flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0-7.072a5 5 0 00-1.414 1.414M12 12v.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-3 uppercase tracking-wide">Sound Design & Implementation</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Immersive audio experiences and seamless integration for games, films, and interactive media.
                    </p>
                  </div>
                </div>

                {/* Voice Production */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-cyan-500/30 angular-cut group hover:border-cyan-500/60 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 angular-cut flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-3 uppercase tracking-wide">Voice Production</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Professional voice recording, direction, and post-production for characters, narration, and dialogue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Innovation', desc: 'Pushing boundaries with every creation' },
              { title: 'Excellence', desc: 'Uncompromising quality in every note' },
              { title: 'Passion', desc: 'Driven by love for the art' },
              { title: 'Community', desc: 'Building connections through music' },
            ].map((value, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-slate-900 to-slate-950 p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all card-glow angular-cut group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="relative text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="relative text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-10 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6 uppercase tracking-wide flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500" />
                Get In Touch
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                Ready to collaborate, book a session, or just want to connect? We're here to make it happen.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold uppercase text-sm tracking-wider hover:from-cyan-500 hover:to-blue-500 transition-all angular-cut"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
