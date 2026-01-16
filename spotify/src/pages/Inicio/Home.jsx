import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import './Home.css';
import Navbar from '../../components/Navbar';

export default function Home({nome}) {
  return (
    <div className="home-container">
      
      <Sidebar />
      <div className="main-content">      <Navbar />

        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
