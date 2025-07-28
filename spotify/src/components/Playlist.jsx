import { useState } from 'react';

import './Playlist.css'

export default function () {
  function salvar() {
    console.log('salvou')
  }

  const [nome, setNome] = useState("");
  return (
    <div>
      {/* Seção da Direita */}
      <aside className="right-section">
        <img
          className="track-cover"
          src="https://upload.wikimedia.org/wikipedia/en/9/99/Travis_Scott_-_Goosebumps.png"
          alt="goosebumps"
        />
        <div className="track-title">goosebumps</div>
        <div className="artist">Travis Scott</div>
      </aside>

      {/* Player */}
      <div className="player">
        <div className="track-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/9/99/Travis_Scott_-_Goosebumps.png"
            alt="cover"
          />
          <div>
            <div className="title">goosebumps</div>
            <div className="artist">Travis Scott</div>
          </div>
        </div>

        <div className="player-controls">
          <button>⏮️</button>
          <button>⏯️</button>
          <button>⏭️</button>
        </div>
      </div>
    </div>
  )
}
