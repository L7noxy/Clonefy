import './Content.css';
import '../pages/Playlist/Playlist'
import CardMusica from './CardMusica';

export default function () {
  return (
    <section className="content">
      <h2>Bem vindo ao clonefy</h2>
      <div className="albums">
        <div className="card">
          <CardMusica />
        </div>
      </div>
    </section>
  );
}
