import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/header/index';
import './style.css'; // Estilização da página do carrinho

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  // Carregar o carrinho do localStorage ao carregar a página
  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(carrinhoSalvo);
  }, []);

  // Função para remover um produto do carrinho
  const removerProduto = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  // Função para aumentar a quantidade de um produto
  const aumentarQuantidade = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho[index].quantidade += 1;
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  // Função para diminuir a quantidade de um produto
  const diminuirQuantidade = (index) => {
    const novoCarrinho = [...carrinho];
    if (novoCarrinho[index].quantidade > 1) {
      novoCarrinho[index].quantidade -= 1;
      setCarrinho(novoCarrinho);
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    }
  };

  // Função para finalizar o pedido e enviar por e-mail
  const finalizarPedido = async () => {
    if (!nome || !email) {
      alert('Por favor, preencha seu nome e e-mail.');
      return;
    }

    const pedido = {
      nome: nome,
      email: email,
      produtos: carrinho.map(
        (produto) => `${produto.nome} (Quantidade: ${produto.quantidade})`
      ),
    };

    try {
      const response = await fetch('http://localhost:5000/enviar-pedido', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedido),
      });

      if (response.ok) {
        const result = await response.text();
        alert(result);
        setCarrinho([]);
        localStorage.removeItem('carrinho');
      } else {
        alert('Erro ao enviar o pedido. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar o pedido:', error);
      alert('Ocorreu um erro ao enviar o pedido.');
    }
  };

  return (
    <div className="card-page">
      <Header />
      <div className="carrinho-container">
        <Link to="/produtos" className="btn-voltar">Voltar</Link>
        <br />
        <h1>Seu Carrinho</h1>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((produto, index) => (
            <div key={index} className="carrinho-item">
              <img src={produto.imagem} alt={produto.nome} className="carrinho-item-img" />
              <div className="carrinho-item-info">
                <h3>{produto.nome}</h3>
                <p>Quantidade: {produto.quantidade}</p>
                <div className="carrinho-item-controls">
                  <button onClick={() => diminuirQuantidade(index)}>-</button>
                  <span>{produto.quantidade}</span>
                  <button onClick={() => aumentarQuantidade(index)}>+</button>
                </div>
                <button onClick={() => removerProduto(index)} className="btn-remover">Remover</button>
              </div>
            </div>
          ))
        )}

        {/* Formulário para capturar o nome e e-mail do cliente */}
        {carrinho.length > 0 && (
          <div className="formulario-pedido">
            <h2>Informações do Cliente</h2>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn-finalizar" onClick={finalizarPedido}>Finalizar Pedido</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrinho;
