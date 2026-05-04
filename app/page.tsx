export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Dramatic background with gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,212,255,0.15)_0%,_transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="text-center">
            {/* Epic title with glow */}
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-cyan-400 to-blue-500 mb-6 glow-text uppercase tracking-tight">
              Stafford Music
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8" />
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Experience sound that transcends boundaries. Immerse yourself in a world of epic compositions and cinematic soundscapes.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/listen"
                className="group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold uppercase text-sm tracking-widest overflow-hidden angular-cut"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-cyan-500/30 blur-xl group-hover:bg-cyan-500/50 transition-all" />
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Start Listening
                </span>
              </a>
              <a
                href="/about"
                className="group relative px-10 py-4 border-2 border-cyan-500/50 text-cyan-400 font-bold uppercase text-sm tracking-widest hover:bg-cyan-500/10 transition-all angular-cut"
              >
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">Discover More</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-slate-950">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.03) 2px, rgba(0,212,255,0.03) 4px)',
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-4 uppercase tracking-tight">
              Experience The Power
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎵', title: 'Epic Compositions', desc: 'Cinematic soundscapes crafted with precision and passion' },
              { icon: '🎧', title: 'Immersive Audio', desc: 'High-fidelity tracks that transport you to another realm' },
              { icon: '🎸', title: 'Unique Vision', desc: 'A distinctive sound that defines a new era of music' },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 card-glow angular-cut"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-center">
                  <div className="text-5xl mb-6 filter drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-3 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
