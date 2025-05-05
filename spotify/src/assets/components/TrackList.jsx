import TrackItem from './TrackItem'

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
