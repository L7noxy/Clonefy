import { useState, useRef } from 'react'
import "./Player.css"

function Player({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="player">
      {currentTrack && (
        <>
          <img src={currentTrack.cover} alt={currentTrack.title} width={50} />
          <div>
            <h4>{currentTrack.title}</h4>
            <p>{currentTrack.artist}</p>
          </div>
          <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
          <audio ref={audioRef} src={currentTrack.url} />
        </>
      )}
    </div>
  )
}

export default Player
