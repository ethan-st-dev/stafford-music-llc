export default function Listen() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,212,255,0.1)_0%,_transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-6 uppercase tracking-tight">
            Listen
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mb-6" />
          <p className="text-xl text-slate-300 max-w-2xl">
            Immerse yourself in our epic soundscapes
          </p>
        </div>

        {/* Music Collection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/20 hover:border-cyan-500/50 transition-all card-glow angular-cut overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <div className="aspect-square bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-white/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2 uppercase tracking-wide">
                  Track Title {item}
                </h3>
                <p className="text-slate-400 mb-6">
                  Album Name • 2026
                </p>
                <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold uppercase text-sm tracking-wider hover:from-cyan-500 hover:to-blue-500 transition-all angular-cut">
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Streaming Platforms */}
        <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-10 border border-cyan-500/20 angular-cut card-glow">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 uppercase tracking-wide flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500" />
              Available On All Platforms
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Spotify', color: 'from-green-600 to-green-700' },
                { name: 'Apple Music', color: 'from-red-600 to-pink-600' },
                { name: 'SoundCloud', color: 'from-orange-600 to-orange-700' },
                { name: 'YouTube Music', color: 'from-red-600 to-red-700' },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href="#"
                  className={`group relative px-8 py-3 bg-gradient-to-r ${platform.color} text-white font-bold uppercase text-sm tracking-wider angular-cut overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
