import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/img_produtos/carrinhoCompras.png';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import './style.css';

/* import image product */
import produto1Img from '../../assets/img_produtos/produto1.png';
import produto10Img from '../../assets/img_produtos/produto10.png';
import produto2Img from '../../assets/img_produtos/produto2.png';
import produto3Img from '../../assets/img_produtos/produto3.png';
import produto4Img from '../../assets/img_produtos/produto4.png';
import produto5Img from '../../assets/img_produtos/produto5.png';
import produto6Img from '../../assets/img_produtos/produto6.png';
import produto7Img from '../../assets/img_produtos/produto7.png';
import produto8Img from '../../assets/img_produtos/produto8.png';
import produto9Img from '../../assets/img_produtos/produto9.png';

function Produtos() {
  const produtos = [
    { id: 1, nome: 'Frango Inteiro', imagem: produto1Img },
    { id: 2, nome: 'Coxinha', imagem: produto2Img },
    { id: 3, nome: 'Asa', imagem: produto3Img },
    { id: 4, nome: 'Tulipa', imagem: produto4Img },
    { id: 5, nome: 'Sobrecoxa', imagem: produto5Img },
    { id: 6, nome: 'Peito', imagem: produto6Img },
    { id: 7, nome: 'Coração', imagem: produto7Img },
    { id: 8, nome: 'Pé', imagem: produto8Img },
    { id: 9, nome: 'Fígado', imagem: produto9Img },
    { id: 10, nome: 'Moela', imagem: produto10Img },
  ];

  // Estado para armazenar a quantidade total de itens no carrinho
  const [totalCarrinho, setTotalCarrinho] = useState(0);

  // Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    const totalDeItens = carrinhoSalvo.reduce((acc, item) => acc + item.quantidade, 0);
    setTotalCarrinho(totalDeItens); // Atualiza o totalCarrinho com base no carrinho salvo

    // Atualiza o localStorage se o carrinho estiver vazio
    if (totalDeItens === 0) {
      localStorage.removeItem('totalCarrinho');
    } else {
      localStorage.setItem('totalCarrinho', totalDeItens); // Armazena o total atualizado
    }
  }, []);

  // Função para comprar o produto
  const comprarProduto = (produto) => {
    // Recupera o carrinho do localStorage
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o produto já está no carrinho
    const produtoExistente = carrinhoSalvo.find((item) => item.id === produto.id);
    
    if (produtoExistente) {
      produtoExistente.quantidade += 1; // Aumenta a quantidade
    } else {
      // Adiciona um novo produto ao carrinho
      carrinhoSalvo.push({ ...produto, quantidade: 1 });
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinhoSalvo));

    // Atualiza o total de itens no carrinho
    const novoTotal = totalCarrinho + 1;
    setTotalCarrinho(novoTotal);
    localStorage.setItem('totalCarrinho', novoTotal); // Armazena o novo total no localStorage

    alert(`${produto.nome} foi adicionado ao carrinho!`);
  };

  return (
    <div className='page'>
      <Header />
      <div className="cart-container">
        <Link to="/card">
          <img src={cartIcon} alt="Carrinho" className="cart-icon-float" />
          {totalCarrinho > 0 && <span className='card-status'>{totalCarrinho}</span>} {/* Exibe apenas se totalCarrinho for maior que 0 */}
        </Link>
      </div>
      <div className="produtos-container">
        <h1>NOSSOS PRODUTOS</h1>
      </div>
      <div className="info-container_produto">
        <div className="produto-grid">
          {produtos.map((produto) => (
            <div key={produto.id} className="produto-texto">
              <img src={produto.imagem} alt={produto.nome} className="produto-img-texto" />
              <div className="produto-info">
                <h3>{produto.nome}</h3>
                <a href="/assets/produtosfrangos.pdf" download="produtosfrangos.pdf" className="receita-link">
                  <button className='btn-leia-mais'>Leia mais</button>
                </a>
                <button className="btn-comprar" onClick={() => comprarProduto(produto)}>COMPRAR</button>
              </div>
            </div>
          ))}
        </div>
        <button className="carregar-mais-produto">Carregar mais</button>
      </div>
      <Footer />
    </div>
  );
}

export default Produtos;
