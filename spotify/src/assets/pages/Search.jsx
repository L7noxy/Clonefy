import { useState } from 'react'
import { songs } from '../data/songs'
import TrackList from '../components/TrackList'

function Search() {
  const [query, setQuery] = useState('')

  const handleSearch = (event) => {
    setQuery(event.target.value)
  }

  const filteredSongs = songs.filter(
    (song) => song.title.toLowerCase().includes(query.toLowerCase()) || song.artist.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="search">
      <input 
        type="text" 
        placeholder="Buscar músicas..." 
        value={query} 
        onChange={handleSearch} 
      />
      <TrackList tracks={filteredSongs} onPlay={(track) => console.log(`Reproduzindo: ${track.title}`)} />
    </div>
  )
}

export default Search
