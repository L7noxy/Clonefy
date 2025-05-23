import { Link } from 'react-router-dom';
import { LuSquareLibrary } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoIosMusicalNotes } from "react-icons/io";
import { GiMusicalNotes } from "react-icons/gi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Clonefy</h2>
      <nav>
        <ul>
          <Link><TiHome /> Início</Link>
          <Link><HiMiniMagnifyingGlass /> Buscar</Link>
          <Link to={"/library"}><LuSquareLibrary /> Sua Biblioteca</Link>
        </ul>
      </nav>
      <div className="playlist">
        <h3>Playlists</h3>
        <ul>
          <Link><IoIosMusicalNotes /> Rock</Link>
          <Link><GiMusicalNotes /> Chill</Link>
          <Link><FaHeadphonesAlt /> Estudo</Link>
        </ul>
      </div>
    </aside>
  );
}
