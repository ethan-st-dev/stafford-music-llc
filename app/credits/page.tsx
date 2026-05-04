export default function Credits() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.1)_0%,_transparent_50%)]" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-6 uppercase tracking-tight">
            Credits
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mb-6" />
          <p className="text-xl text-slate-300">
            The masterminds behind the music
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Album/Track Section */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6 uppercase tracking-wide flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500" />
                Album Title
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                <div className="flex gap-3">
                  <span className="text-cyan-500 font-bold uppercase text-sm tracking-wider min-w-[120px]">Written by:</span>
                  <span>Composer Name</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-500 font-bold uppercase text-sm tracking-wider min-w-[120px]">Produced by:</span>
                  <span>Producer Name</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-500 font-bold uppercase text-sm tracking-wider min-w-[120px]">Mixed by:</span>
                  <span>Engineer Name</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-500 font-bold uppercase text-sm tracking-wider min-w-[120px]">Mastered by:</span>
                  <span>Engineer Name</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-500 font-bold uppercase text-sm tracking-wider min-w-[120px]">Release Date:</span>
                  <span>Month 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contributors Section */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6 uppercase tracking-wide flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500" />
                Contributors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Musician Name', role: 'Lead Guitar' },
                  { name: 'Musician Name', role: 'Drums' },
                  { name: 'Musician Name', role: 'Bass' },
                  { name: 'Musician Name', role: 'Vocals' },
                ].map((contributor, i) => (
                  <div
                    key={i}
                    className="bg-slate-900/50 border border-cyan-500/20 p-4 hover:border-cyan-500/40 transition-all angular-cut"
                  >
                    <h3 className="font-bold text-cyan-400 mb-1 uppercase tracking-wide">
                      {contributor.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{contributor.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Special Thanks */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6 uppercase tracking-wide flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500" />
                Special Thanks
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                To everyone who supported this journey, believed in our vision, and helped bring these sonic experiences to life. Your contribution to this epic adventure will never be forgotten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
