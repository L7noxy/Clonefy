import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
