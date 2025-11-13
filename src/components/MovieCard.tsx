import { Star, Play } from 'lucide-react';
import { useState } from 'react';

interface MovieCardProps {
  title: string;
  rating: string;
  image: string;
  genre: string;
}

export function MovieCard({ title, rating, image, genre }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[2/3] glass-card">
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Play Button */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/40">
            <Play className="w-8 h-8 fill-white" />
          </div>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-xs">{genre}</span>
            </div>
          </div>
          <h4 className="font-bold line-clamp-2">{title}</h4>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
