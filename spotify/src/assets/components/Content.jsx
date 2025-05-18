import './Content.css';

export default function Content() {
  return (
    <section className="content">
      <h2>Boa noite</h2>
      <div className="albums">
        <div className="card">
          <img src="./img/scotts.jpg" alt="" />
          <div className='descricao-musica'>
            <span>
              The Scotts
            </span>
          </div>
        </div>
        <div className="card">
          <img src="./img/juice.jpg" alt="" />
          <div className='descricao-musica'>
            <span>
              juice WRDL
            </span>
          </div>
        </div>
        <div className="card">
          <img src="./img/eminem.jpg" alt="" srcset="" />
          <div className='descricao-musica'>
            <span>
              Eminem
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
