import React from "react";
import frangoImg from '../../../src/assets/img/frango.jpeg'; // Altere o caminho da imagem conforme necessário
import './style.css';

function Sobre() {
  return (
    <div className="info">
      <div className="nome-sobre">
        <span>Mais que uma Indústria, uma Família!</span>
      </div>
      <div className="info-content">
        <img src={frangoImg} alt="Frango" className="info-image" />
        <div className="info-run">
          Desde 1995, a BIP Alimentos se destaca pela qualidade e pelo compromisso com seus clientes. Valorizamos nossos princípios familiares, buscamos parcerias alinhadas com nossa visão e seguimos aprimorando nossos serviços e equipe, sempre focados em novas oportunidades e inovação.
        </div>
      </div>
      {/*<div className="produtos-info">
        <button className="btn-veja-mais">AQUI</button>
      </div>*/}
    </div>
  );
}

export default Sobre;
