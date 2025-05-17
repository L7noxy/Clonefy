import './Content.css';

export default function Content() {
  return (
    <section className="content">
      <h2>Boa noite</h2>
      <div className="albums">
        <div className="card"><img src="./img/scotts.jpg" alt="" /></div>
        <div className="card">Album 2</div>
        <div className="card">Album 3</div>
      </div>
    </section>
  );
}
