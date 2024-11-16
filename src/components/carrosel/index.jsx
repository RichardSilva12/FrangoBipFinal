import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick'; // Importa o carrossel
import './style.css'; // Estilos do carrossel

// Importando imagens corretamente
import image1 from '../../assets/img/carrosel_teste.jpg';
import image2 from '../../assets/img/fundo_teste2.png';
import image3 from '../../assets/img/fundo_teste3.png';

const Carousel = () => {
  const sliderRef = useRef(null); // Referência para o slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ativa os botões laterais
    nextArrow: <NextArrow />, // Define o botão "próximo"
    prevArrow: <PrevArrow />, // Define o botão "anterior"
  };

  // Efeito para autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Avança para o próximo slide
      }
    }, 5000); // 5000ms = 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <Slider {...settings} ref={sliderRef}>
      <div>
        <img src={image1} alt="Imagem 1" className="carousel-image" />
      </div>
      <div>
        <img src={image2} alt="Imagem 2" className="carousel-image" />
      </div>
      <div>
        <img src={image3} alt="Imagem 3" className="carousel-image" />
      </div>
    </Slider>
  );
};

// Botões personalizados
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      &gt;
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      &lt;
    </div>
  );
};

export default Carousel;
