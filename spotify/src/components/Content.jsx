import { IoIosPlay } from "react-icons/io";
import './Content.css';
import '../pages/Playlist/Playlist'

export default function () {
  return (
    <section className="content">
      <h2>Bem vindo ao clonefy</h2>
      <div className="albums">
        <div className="card">
          <img src="./img/scotts.jpg" alt="" />
          <div className='descricao-musica'>
            <h3>
              The Scotts
            </h3>
            <h5>
              Travis Scott
            </h5><button className="ouvir-musica"><IoIosPlay color="white" size={30}/></button>
          </div>
        </div>
      </div>
    </section>
  );
}
