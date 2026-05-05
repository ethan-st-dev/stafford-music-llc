import ListPlayer from '../components/ListPlayer';
import MusicVisualizer from '../components/MusicVisualizer';

export default function Listen() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* 3D Music Visualizer Background */}
      <MusicVisualizer />
      
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

        {/* Spotify Playlist */}
        <div className="mb-10">
          <ListPlayer 
            playlistId="3pJf1vKMi737HLW12iZeTK"
            title="Starcraft"
            description="Our latest tracks and favorites"
          />
        </div>

        {/* Second Playlist */}
        <div className="mb-10">
          <ListPlayer 
            playlistId="2m483sLzTsbJIcpM1pXsgz"
            title="Warcraft"
            description="Explore additional tracks"
          />
        </div>

        {/* Third Playlist */}
        <div className="mb-10">
          <ListPlayer 
            playlistId="47QhzsTfGKPC5PPqRN2CTd"
            title="Diablo"
            description="Even more tracks to discover"
          />
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
