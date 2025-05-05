import { songs } from '../data/songs'
import TrackList from '../components/TrackList'

function Home() {
  const handlePlay = (track) => {
    console.log(`Reproduzindo: ${track.title}`)
  }

  return (
    <div className="home">
      <h1>Bem-vindo ao Clonefy</h1>
      <h3>Descubra suas músicas favoritas</h3>
      <TrackList tracks={songs} onPlay={handlePlay} />
    </div>
  )
}

export default Home
