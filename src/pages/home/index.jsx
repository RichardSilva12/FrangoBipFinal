import React from 'react';
import Carousel from '../../components/carrosel/index';
import Container from '../../components/conteiner/index';
import Depoimentos from '../../components/depoimentos/index';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import Produtos from '../../components/produtos/index';
import Receitas from '../../components/receitas/index';
import Selos from '../../components/seloQualidade/index';
import Sobre from '../../components/sobre/index';
import './style.css'; // Importa o arquivo CSS

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Receitas />
      <Container />
      <Produtos />
      <div className='info-container2'> 
        <main>
        </main>
      </div>
      {/*<ContainerBranco />*/}
      <Sobre />
      <Depoimentos />
      <Selos />
      <Footer />
    </div>
  );
}

export default Home;