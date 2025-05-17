import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Spotify</h2>
      <nav>
        <ul>
          <li>🏠 Início</li>
          <li>🔍 Buscar</li>
          <li>📚 Sua Biblioteca</li>
        </ul>
      </nav>
      <div className="playlist">
        <h3>Playlists</h3>
        <ul>
          <li>🎵 Rock</li>
          <li>🎶 Chill</li>
          <li>🎧 Estudo</li>
        </ul>
      </div>
    </aside>
  );
}
