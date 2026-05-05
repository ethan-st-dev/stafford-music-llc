interface ListPlayerProps {
  playlistId: string;
  title?: string;
  description?: string;
}

export default function ListPlayer({ playlistId, title, description }: ListPlayerProps) {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/20 hover:border-cyan-500/50 transition-all card-glow angular-cut overflow-hidden p-6">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="relative">
        {title && (
          <h3 className="text-2xl font-bold text-cyan-400 mb-2 uppercase tracking-wide">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-slate-400 mb-6">
            {description}
          </p>
        )}
        
        <div className="relative">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`}
            width="100%"
            height="352"
            loading="eager"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
