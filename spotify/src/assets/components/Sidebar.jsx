import { Link } from 'react-router-dom'
import { FaHome, FaSearch, FaBook } from 'react-icons/fa'

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Clonefy</h2>
      <nav>
        <Link to="/" className="sidebar-link">
          <FaHome className="sidebar-icon" />
          Home
        </Link>
        <Link to="/search" className="sidebar-link">
          <FaSearch className="sidebar-icon" />
          Buscar
        </Link>
        <Link to="/library" className="sidebar-link">
          <FaBook className="sidebar-icon" />
          Sua Biblioteca
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar
