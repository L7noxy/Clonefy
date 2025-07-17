import { Link } from 'react-router-dom';
import { LuSquareLibrary } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoIosMusicalNotes } from "react-icons/io";
import { GiMusicalNotes } from "react-icons/gi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className='titulo-sidebar'>
        <h2>Clonefy</h2>

      </div>
      <nav>
        <ul>
          <Link to={"/playlist"} className='playlist-link'><FaCirclePlus /></Link>
          <Link to={"/"}><TiHome /> Início</Link>
          <Link><HiMiniMagnifyingGlass /> Buscar</Link>
          <Link to={"/library"}><LuSquareLibrary /> Sua Biblioteca</Link>
        </ul>
      </nav>
      <div className="playlist">
        <h3>Playlists</h3>
        <ul>
          <Link><IoIosMusicalNotes /> Rock</Link>
          <Link><GiMusicalNotes /> Chill</Link>
          <Link to={"/estudos"}><FaHeadphonesSimple /> Estudo</Link>
        </ul>
      </div>
    </div>
  );
}
