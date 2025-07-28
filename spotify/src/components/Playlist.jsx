import { useState } from 'react';

import './Playlist.css'

export default function() {
  function salvar() {
    console.log('salvou')
  }

  const [nome, setNome] = useState("");
  return (
    <div>
      <h2>Coloque o nome da sua playlist</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder='Colocar o nome da musica'
      />

      {nome && (
        <h3>Nome da musica: {nome}</h3>
      )}

      <button onClick={salvar}>Salvar</button>
    </div>
  )
}
