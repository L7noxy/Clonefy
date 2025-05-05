function TrackItem({ track, onPlay }) {
    return (
      <div className="track-item" onClick={() => onPlay(track)}>
        <img src={track.cover} alt={track.title} width={50} />
        <div>
          <h4>{track.title}</h4>
          <p>{track.artist}</p>
        </div>
      </div>
    )
  }
  
  export default TrackItem
  