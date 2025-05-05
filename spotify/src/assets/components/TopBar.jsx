import React, { useState } from 'react'
import { FaSearch, FaUserCircle } from 'react-icons/fa'

function TopBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="topbar">
      <div className="topbar-left">
        <h2>Clonefy</h2>
      </div>
      
      <div className="topbar-search">
        <input 
          type="text" 
          placeholder="Buscar músicas..." 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="topbar-right">
        <FaUserCircle className="user-icon" />
      </div>
    </div>
  )
}

export default TopBar
