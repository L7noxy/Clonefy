import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <input type="text" placeholder="Buscar músicas, artistas..." />
      <Link to={"/perfil"} className="profile">Perfil</Link>
    </header>
  );
} 

