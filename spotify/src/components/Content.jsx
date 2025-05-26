import './Content.css';
import './Playlist'

export default function Content({ nome }) {
  return (
    <section className="content">
      <h2>Boa noite</h2>
      <div className="albums">
        <div className="card">
          <img src="./img/scotts.jpg" alt="" />
          <div className='descricao-musica'>
            <span>
              {nome}
            </span>
          </div>
        </div> 
      </div>
    </section>
  );
}
