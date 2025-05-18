import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Clonefy</h2>
      <nav>
        <ul>
          <li>🏠 Início</li>
          <li>🔍 Buscar</li>
          <Link to={"/library"}>📚 Sua Biblioteca</Link>
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
