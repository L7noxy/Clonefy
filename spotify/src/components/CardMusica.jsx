import { IoIosPlay } from "react-icons/io";
export default function CardMusica() {
  return (
    <div>
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
  )
}
