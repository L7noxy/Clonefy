import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function CardMusica() {

  const [musica, setMusica] = useState([]);

  useEffect(() => {
    const buscarMusicas = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/musicas/buscar"
        );

        if (!response.ok) {
          throw new Error(`Erro ao buscar produtos: ${response.status}`);
        }

        const dados = await response.json();
        setProdutos(dados);
      } catch (erro) {
        console.error("Ocorreu um erro:", erro);
      }
    };

    buscarMusicas();
  }, []);

  const handleCurtir = (idMusica) => {
    setCurtidos((prevCurtidos) => ({
      ...prevCurtidos,
      [idMusica]: !prevCurtidos[idMusica],
    }));
  };

  return (
    <div>
      <div>
        <div className="container-produtos-home">
          {musicas.map((musica) => {
            const estaCurtido = curtidos[musica._id];

            return (
              <div key={musica._id} >
                <div>
                  <button
                    id={`btn-curtir-${musica._id}`}
                    className="btn-curtir"
                    onClick={() => handleCurtir(musica._id)}
                  >
                    {estaCurtido ? <FaHeart color="#A9A9A9" /> : <FaRegHeart />}
                  </button>
                </div>
                <div className="card">
                  <div>
                    <Link to={`/produtoDetalhada/${produto._id}`}>
                      <div className="imgBox">
                        <img src={produto.imagemUrl} alt={produto.nome} />
                      </div>
                      <div className="contentBox">
                        <hp className="card-nome-produto">{musica.nome}</hp>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}