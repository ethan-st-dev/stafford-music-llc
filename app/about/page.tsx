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

          {/* Our Story Section */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-10 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6 uppercase tracking-wide flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500" />
                Our Story
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Born from a vision to revolutionize the music industry, Stafford Music represents the convergence of traditional artistry and modern innovation. Every composition we create is a testament to our commitment to excellence and our respect for the craft.
              </p>
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
