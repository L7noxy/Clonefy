import { useState } from 'react';

import './Playlist.css'

export default function 
  () {
    
    const [nome, setNome] = useState("");
  return (
    <div>
      <h2>Coloque o nome da musica</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder='Colocar o nome da musica'
      />

      {nome && (
        <h3>Nome da musica: {nome}</h3>
      )}
    </div>
  )
}
