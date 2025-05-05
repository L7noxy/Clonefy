import { songs } from '../data/songs'
import TrackList from '../components/TrackList'

function Library() {
  // Exemplo: pode ser uma lista de músicas salvas
  const favoriteSongs = songs.slice(0, 3)  // Exemplo: pegando as 3 primeiras músicas

  return (
    <div className="library">
      <h1>Sua Biblioteca</h1>
      <TrackList tracks={favoriteSongs} onPlay={(track) => console.log(`Reproduzindo: ${track.title}`)} />
    </div>
  )
}

export default Library
