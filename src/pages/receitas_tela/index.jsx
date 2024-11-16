import React from 'react';
import iconePessoa from '../../assets/img/icons8-pessoa-30.png';
import iconeTempo from '../../assets/img/icons8-relog.png';
import receita1Img from '../../assets/img/receita1.jpeg';
import receita2Img from '../../assets/img/receita2.jpeg';
import receita3Img from '../../assets/img/receita3.jpeg';
import receita4Img from '../../assets/img/receita4.jpeg';
import receita5Img from '../../assets/img/receita5.jpeg';
import receita6Img from '../../assets/img/receita6.jpeg';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import './style.css';

function Receita() {
  const receitas = [
    { id: 1, nome: 'Filé de Frango ao Molho Branco Cremoso', imagem: receita1Img },
    { id: 2, nome: 'Filé de Frango ao Molho Branco com Champignon', imagem: receita2Img },
    { id: 3, nome: 'Sobrecoxa Recheada Gourmet com Ervas', imagem: receita3Img },
    { id: 4, nome: 'Frango com Aspargos ao Molho Cremoso de Alho e Limão', imagem: receita4Img },
    { id: 5, nome: 'Frango Inteiro com Quiabo à Mineira', imagem: receita5Img },
    { id: 6, nome: 'Macarrão Cremoso com Frango e Ervas', imagem: receita6Img },
  ];

  return (
    <div className="receita-page">
      <Header />
      <div className="receita-container">
        <h1>RECEITAS</h1>
      </div>
      <div className='info-container_tela'>
        <div className="receitas-grid">
          {receitas.map((receita) => (
            <div key={receita.id} className="receita-texto">
              <img src={receita.imagem} alt={receita.nome} className="receita-img-texto" />
              <div className="receita-info">
                
                {receita.id === 1 && (
                  <>
                    <h3>{receita.nome}</h3>
                    <p><img src={iconeTempo} alt="Ícone de tempo" className="icone" /> 30 min</p>
                    <p><img src={iconePessoa} alt="Ícone de pessoa" className="icone" /> 2 pessoas</p>
                    <a href="https://www.youtube.com/watch?v=DRq_6wLRLEI" className="receita-link">
                      <button>MODO PREPARO</button>  
                    </a>
                  </>
                  
                )}
                {receita.id === 2 && (
                  <>
                    <h3>{receita.nome}</h3>
                    <p><img src={iconeTempo} alt="Ícone de tempo" className="icone" /> 40 min</p>
                    <p><img src={iconePessoa} alt="Ícone de pessoa" className="icone" /> 2 pessoas</p>
                    <a href="https://www.youtube.com/watch?v=DRq_6wLRLEI" className="receita-link">
                      <button>MODO PREPARO</button>    
                    </a>
                  </>
                )}
                {receita.id === 3 && (
                  <>
                    <h3>{receita.nome}</h3>
                    <p><img src={iconeTempo} alt="Ícone de tempo" className="icone" /> 1 hr</p>
                    <p><img src={iconePessoa} alt="Ícone de pessoa" className="icone" /> 6 pessoas</p>
                    <a href="https://www.youtube.com/watch?v=DRq_6wLRLEI" className="receita-link">
                      <button>MODO PREPARO</button>  
                    </a>
                  </>
                )}
                {receita.id === 4 && (
                  <>
                    <h3>{receita.nome}</h3>
                    <p><img src={iconeTempo} alt="Ícone de tempo" className="icone" /> 1 hr</p>
                    <p><img src={iconePessoa} alt="Ícone de pessoa" className="icone" /> 5 pessoas</p>
                    <a href="https://www.youtube.com/watch?v=DRq_6wLRLEI" className="receita-link">
                      <button>MODO PREPARO</button>
                    </a>
                  </>
                )}
                {receita.id === 5 && (
                  <>
                    <h3>{receita.nome}</h3>
                    <p><img src={iconeTempo} alt="Ícone de tempo" className="icone" /> 50 min</p>
                    <p><img src={iconePessoa} alt="Ícone de pessoa" className="icone" /> 2 pessoas</p>
                    <a href="https://www.youtube.com/watch?v=DRq_6wLRLEI" className="receita-link">
                      <button>MODO PREPARO</button>
                    </a>
                  </>
                )}
                {receita.id === 6 && (
                  <>
                    <h3>{receita.nome}</h3>
                    <p><img src={iconeTempo} alt="Ícone de tempo" className="icone" /> 1 hr</p>
                    <p><img src={iconePessoa} alt="Ícone de pessoa" className="icone" /> 4 pessoas</p>
                    <a href="https://www.youtube.com/watch?v=DRq_6wLRLEI" className="receita-link">
                      <button>MODO PREPARO</button>
                    </a>
                    
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="carregar-mais">Carregar mais</button>
      </div>
      <Footer />
    </div>
  );
}

export default Receita;
