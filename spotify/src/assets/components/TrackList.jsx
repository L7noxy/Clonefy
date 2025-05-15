import TrackItem from './TrackItem'
import './TrackList.css'

function TrackList({ tracks, onPlay }) {
  return (
    <div className="track-list">
      {tracks.map((track) => (
        <TrackItem key={track.id} track={track} onPlay={onPlay} />
      ))}
    </div>
  )
}

export default TrackList
