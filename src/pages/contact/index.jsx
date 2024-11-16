import axios from 'axios';
import React, { useState } from 'react';
import resumeIcon from '../../assets/img/curriculo.png';
import emailIcon from '../../assets/img/email.png';
import phoneIcon from '../../assets/img/telefone.png';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import './style.css';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    descricao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verifique o conteúdo de formData antes de enviar
    console.log('Dados do formulário:', formData);
  
    // Enviar dados para o servidor
    axios.post('http://localhost:5000/send-email', {
      nome: formData.nome,
      telefone: formData.telefone,
      email: formData.email,
      assunto: formData.assunto,
      descricao: formData.descricao
    })
    .then(() => alert('Email enviado com sucesso!'))
    .catch((error) => alert('Erro ao enviar email: ' + error.message));
  };
  

  return (
    <div className='page'>
      <Header />

      <div className="contato-container">
        <h1>CONTATO</h1>
      </div>

      <div className="info-container_tela">
        <div className="info-icons">
          <div className="info-item">
            <img src={emailIcon} alt="E-mail" className="info-icon" />
            <p>contato@frigobip.com.br</p>
          </div>
          <div className="info-item">
            <img src={phoneIcon} alt="Telefone" className="info-icon" />
            <p>+55 (14) 3295-9500</p>
          </div>
          <div className="info-item">
            <img src={resumeIcon} alt="Currículo" className="info-icon" />
            <p>Envie seu currículo para rh@frigobip.com.br</p>
          </div>
        </div>

        <div className='forme'>
          <h2>ENVIE SUA MENSAGEM</h2>
          <form className="forme-contato" onSubmit={handleSubmit}>
            <label>Nome Completo</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />

            <label>Telefone com DDD</label>
            <input
              type="text"
              name="telefone"
              placeholder="Digite seu telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />

            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Assunto</label>
            <input
              type="text"
              name="assunto"
              placeholder="Assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
            />

            <label>Descrição</label>
            <textarea
              name="descricao"
              placeholder="Escreva sua mensagem"
              value={formData.descricao}
              onChange={handleChange}
              required
            />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contato;
