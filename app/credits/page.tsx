import Image from 'next/image';
import CreditsVisualizer from '../components/CreditsVisualizer';

export default function Credits() {
  const glennCredits = [
    { title: 'World of Warcraft: Midnight', year: 2026, role: 'Composer', image: '/Boxart/World_of_Warcraft_Midnight_cover_art.jpg' },
    { title: 'World of Warcraft: The War Within', year: 2024, role: 'Composer', image: '/Boxart/World_of_Warcraft_The_War_Within_cover_art.jpg' },
    { title: 'World of Warcraft: Dragonflight', year: 2022, role: 'Composer', image: '/Boxart/World_of_Warcraft_Dragonflight_key_art.webp.png' },
    { title: 'World of Warcraft: Shadowlands', year: 2020, role: 'Composer', image: '/Boxart/Shadowlands.jpg' },
    { title: 'World of Warcraft: Battle for Azeroth', year: 2018, role: 'Composer', image: '/Boxart/World_of_Warcraft_Battle_for_Azeroth.jpg' },
    { title: 'World of Warcraft: Legion', year: 2016, role: 'Composer', image: '/Boxart/Legion-Standard_front_cover.jpg' },
    { title: 'Heroes of the Storm', year: 2015, role: 'Composer', image: '/Boxart/HeroesofTheStorm.jpg' },
    { title: 'World of Warcraft: Warlords of Draenor', year: 2014, role: 'Composer', image: '/Boxart/Warlords_of_Draenor_cover.jpg' },
    { title: 'Hearthstone: Heroes of Warcraft', year: 2014, role: 'Composer', image: '/Boxart/Heartjstone.jpg' },
    { title: 'World of Warcraft: Mists of Pandaria', year: 2012, role: 'Composer', image: '/Boxart/Mists-boxcover.jpg' },
    { title: 'Diablo III', year: 2012, role: 'Composer', image: '/Boxart/Diablo_III_cover.jpg' },
    { title: 'World of Warcraft: Cataclysm', year: 2010, role: 'Composer', image: '/Boxart/Cata-boxcover.png' },
    { title: 'StarCraft II: Wings of Liberty', year: 2010, role: 'Composer', image: '/Boxart/StarCraft_II_-_Box_Art.jpg' },
    { title: 'World of Warcraft: Wrath of the Lich King', year: 2008, role: 'Composer', image: '/Boxart/World_of_Warcraft_Wrath_of_the_Lich_King.png' },
    { title: 'World of Warcraft', year: 2004, role: 'Composer, Sound Designer', image: '/Boxart/World_of_Warcraft.png' },
    { title: 'Warcraft III: The Frozen Throne', year: 2003, role: 'Composer, Sound Designer', image: '/Boxart/Warcraftiii-frozen-throne-boxcover.jpg' },
    { title: 'Warcraft III: Reign of Chaos', year: 2002, role: 'Composer, Sound Designer', image: '/Boxart/WarcraftIII.jpg' },
    { title: 'Diablo II: Lord of Destruction', year: 2001, role: 'Composer, Sound Designer', image: '/Boxart/Diablo_II_-_Lord_of_Destruction_Coverart.jpg' },
    { title: 'Diablo II', year: 2000, role: 'Composer, Sound Designer', image: '/Boxart/Diablo_II_Coverart.jpg' },
    { title: 'StarCraft: Brood War', year: 1998, role: 'Composer, Sound Designer', image: '/Boxart/BroodWar.jpg' },
    { title: 'StarCraft', year: 1998, role: 'Composer, Sound Designer', image: '/Boxart/Starcraft.png' },
    { title: 'Diablo', year: 1997, role: 'Composer, Sound Designer', image: '/Boxart/Diablo.jpg' },
    { title: 'Warcraft II: Beyond the Dark Portal', year: 1996, role: 'Composer, Sound Designer', image: '/Boxart/Warcraftii-beyond-the-dark-portal-cover-art.jpg' },
    { title: 'Warcraft II: Tides of Darkness', year: 1995, role: 'Composer, Sound Designer', image: '/Boxart/Warcraft-2-Tides-Of-Darkness-Pc.jpg' },
    { title: 'Warcraft: Orcs & Humans', year: 1994, role: 'Composer, Sound Designer', image: '/Boxart/Warcraft.jpg' },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950">
      <CreditsVisualizer />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.1)_0%,_transparent_50%)]" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-6 uppercase tracking-tight">
            Credits
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mb-6" />
          <p className="text-xl text-slate-300">
            A visual journey through legendary game soundscapes
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {glennCredits.map((credit, i) => (
                  <div
                    key={i}
                    className="group relative bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 angular-cut overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Image Container */}
                    <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
                      <div className="absolute inset-0">
                        <Image
                          src={credit.image}
                          alt={credit.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Year Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1 bg-cyan-600/90 backdrop-blur-sm angular-cut">
                        <span className="text-white font-bold text-sm">{credit.year}</span>
                      </div>
                    </div>
                    
                    {/* Info Panel */}
                    <div className="relative p-4 space-y-2">
                      <h3 className="font-bold text-cyan-300 text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
                        {credit.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-cyan-500" />
                        <p className="text-slate-400 text-xs uppercase tracking-wider">{credit.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Note Section */}
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-10 border border-cyan-500/20 angular-cut card-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="relative text-center">
              <p className="text-slate-300 leading-relaxed text-lg">
                From legendary classics to modern hits — decades of musical excellence
              </p>
              <p className="text-cyan-400 mt-4 text-sm uppercase tracking-wider">
                Glenn Stafford: Where every note tells a story
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
