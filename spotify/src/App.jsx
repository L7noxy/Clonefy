import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './assets/components/Sidebar'
import TopBar from './assets/components/topBar'
import Player from './assets/components/Player'
import Home from './assets/pages/Home'
import Search from './assets/pages/Search'
import Library from './assets/pages/Library'

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
        <Player />
      </div>
    </Router>
  )
}

export default App
