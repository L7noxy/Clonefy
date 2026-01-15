import { Heart, Shuffle, SkipBack, Play, SkipForward, Repeat, Volume2, List } from 'lucide-react';

export default function Player() {
  return (
    <div className="spotify-player fixed bottom-0 left-0 right-0 w-full">
      <div className="w-full h-1 bg-[#282828] cursor-pointer hover:h-2 transition-all group">
        <div className="h-full w-1/3 bg-[#1DB954] group-hover:bg-[#1ed760]"></div>
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4 w-1/4 min-w-0">
          <img
            src="/images/album-placeholder-1.jpg"
            alt="Current Song"
            className="w-14 h-14 rounded object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="spotify-text-title text-sm font-semibold truncate">
              Domestic Sweater
            </p>
            <p className="spotify-text-body text-xs truncate">
              Wardall
            </p>
          </div>
          <button className="text-gray-400 hover:text-[#1DB954] transition-colors">
            <Heart size={20} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 flex-1">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Shuffle size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          <button className="spotify-player-button">
            <Play size={20} fill="currentColor" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Repeat size={20} />
          </button>
        </div>

        {/* Volume & Settings */}
        <div className="flex items-center justify-end gap-4 w-1/4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <List size={20} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Volume2 size={20} />
          </button>
          <div className="w-24 h-1 bg-[#282828] rounded cursor-pointer">
            <div className="h-full w-3/4 bg-white rounded"></div>
          </div>
        </div>
      </div>

      {/* Time Display */}
      <div className="absolute bottom-16 left-4 text-gray-400 text-xs">
        0:00
      </div>
      <div className="absolute bottom-16 right-4 text-gray-400 text-xs">
        4:20
      </div>
    </div>
  );
}
