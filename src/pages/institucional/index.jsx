import React from 'react';
import imageGranja from '../../assets/img/granja.jpeg';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import './style.css';

import etica from '../../assets/etica.pdf'

function Institucional() {
  return (
    <div className='page'>
      <Header />
      <div className="empresa-container">
        <h1>NOSSA EMPRESA</h1>
      </div>
      <div className="info-container_tela">
        <div className="conteudo-historia">
          <img src={imageGranja} alt="historia" className="imagem-historia" />
          <div className="texto-historia">
            {/* Aqui você poderá adicionar o texto da história */}
            <h1>FrigoBip: Qualidade e Tradição desde 1990</h1>
            <p>A história do FrigoBip começou com o Grupo Bip Alimentos, que desde 1990 se dedica à criação de aves em granjas. Em 2003, ampliamos nossa atuação com a criação da Biprodutos, uma empresa especializada na criação de pintinhos. O crescimento não parou por aí: em 2015, inauguramos nossa fábrica de rações, dedicada à produção de alimentos para pintinhos, garantindo qualidade e nutrição desde o início do ciclo de vida das aves.</p>
            <p>Agora, em 2024, estamos dando mais um grande passo com a criação do frigorífico FrigoBip, especializado no abate de aves. Localizado em São José do Rio Preto, consolidamos nossa trajetória de mais de três décadas, sempre comprometidos com a qualidade e o respeito aos animais.</p>
            <p>Nosso compromisso com a qualidade e com o meio ambiente nos rendeu a confiança de consumidores em todo o país. Trabalhamos apenas com fornecedores certificados, garantindo total controle sobre a alimentação das aves e assegurando condições sanitárias adequadas. Cada etapa do nosso processo é regida por rigorosas práticas de qualidade.</p>
            <p>Nossas aves são tratadas com cuidado e respeito, seguindo as normas de Biosegurança e sob a supervisão de veterinários e técnicos especializados. Estamos comprometidos com os mais altos padrões de bem-estar animal, em conformidade com as diretrizes do Farm Animal Welfare Council (FAWC).</p>
            <p>O resultado desse trabalho cuidadoso é um produto final que se destaca pela qualidade e sabor excepcionais. No FrigoBip, sua confiança é a nossa maior conquista!</p>
          </div>
        </div>
        <div className="linha-do-tempo">
          <div className="ano" data-historia="Fundação da empresa">1990</div>
          <div className="ano" data-historia="Crescimento no mercado">2003</div>
          <div className="ano" data-historia="Expansão com Ração">2015</div>
          <div className="ano" data-historia="Liderança no setor">2024</div>
        </div>
        <br />
        <br />
        <div className='etica'>
          <h2>Conheça o Código de Ética e Conduta do FrigoBip</h2>
          <p>O Código de Ética e Conduta do FrigoBip estabelece diretrizes claras para as atividades organizacionais e colaborativas da empresa. Seu objetivo é comunicar de forma transparente as expectativas de comportamento e as normas adotadas, abordando temas essenciais para o clima organizacional e a valorização do nosso maior ativo: os colaboradores. Ao tornar essas diretrizes públicas, reforçamos nosso compromisso com um ambiente de trabalho ético e respeitoso.</p>
   
        
          

          <a href={etica} download="etica">
           <button className="btn-etica">AQUI</button>
          </a>


        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Institucional;
