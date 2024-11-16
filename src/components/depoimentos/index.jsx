import React from 'react';
import './style.css';

const Depoimentos = () => {
  const depoimentos = [
    {
      id: 1,
      imagem: '/src/assets/img_pessoas/cliente1.png',
      texto: "Produtos frescos e de alta qualidade! Recomendo a todos.",
      nome: "João Silva",
      rating: 5,
    },
    {
      id: 2,
      imagem: '/src/assets/img_pessoas/cliente2.png',
      texto: "Sempre tenho uma excelente experiência de compra. Atendimento incrível!",
      nome: "Carlos Ferreira",
      rating: 4,
    },
    {
      id: 3,
      imagem: '/src/assets/img_pessoas/cliente3.png',
      texto: "Ótima qualidade, frescor garantido. Voltarei a comprar!",
      nome: "Maria Oliveira",
      rating: 5,
    },
    {
  id: 4,
  imagem: '/src/assets/img_pessoas/cliente4.png',
  texto: "Produto excelente, super fresquinho! Recomendo para todos.",
  nome: "Ana Clara Silva",
  rating: 5,
},
{
  id: 5,
  imagem: '/src/assets/img_pessoas/cliente5.png',
  texto: "Muito satisfeita com a compra, frescor e qualidade impecáveis.",
  nome: "Beatriz Almeida",
  rating: 4,
},
{
  id: 6,
  imagem: '/src/assets/img_pessoas/cliente6.png',
  texto: "Atendimento rápido e produto de qualidade. Comprarei de novo.",
  nome: "Carlos Eduardo Santos",
  rating: 4,
},
{
  id: 7,
  imagem: '/src/assets/img_pessoas/cliente7.png',
  texto: "A qualidade é surpreendente, muito melhor do que esperava!",
  nome: "Ricardo Martins",
  rating: 5,
},

  ];

  return (
    <section className="depoimentos">
      <h2>O que nossos clientes dizem</h2>
      <div className="carrossel">
        {depoimentos.map((depoimento) => (
          <div key={depoimento.id} className="card">
            <img src={depoimento.imagem} alt={`Foto de ${depoimento.nome}`} />
            <p>"{depoimento.texto}"</p>
            <div className="rating">{"★".repeat(depoimento.rating)}</div>
            <span>- {depoimento.nome}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;
