import React, { useState } from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import './style.css';

function TrabalheConosco() {
  // Estado para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    nome: '',
    rg: '',
    cpf: '',
    nascimento: '',
    telefone: '',
    estado: '',
    cidade: '',
    endereco: '',
    cep: '',
    numero: '',
    formacao: '',
    pcd: 'nao',
    deficiencia: '',
    descricao: '',
    email: '',
  });

  // Função para lidar com mudanças no input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/send-job-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Candidatura enviada com sucesso!');
        setFormData({
          nome: '',
          rg: '',
          cpf: '',
          nascimento: '',
          telefone: '',
          estado: '',
          cidade: '',
          endereco: '',
          cep: '',
          numero: '',
          formacao: '',
          pcd: 'nao',
          deficiencia: '',
          descricao: '',
          email: '',
        });
      } else {
        alert('Erro ao enviar candidatura');
      }
    } catch (error) {
      console.error('Erro ao enviar candidatura:', error);
      alert('Erro ao enviar candidatura');
    }
  };

  return (
    <div className="page">
      <Header />
      <div className="trabalhe-container">
        <h1>TRABALHE CONOSCO</h1>
      </div>
      <div className='info-container_tela'>
        <div className="form-curriculo-container">
          <form className="form-curriculo" onSubmit={handleSubmit}>
            <h1>Preencha o formulário abaixo e envie seu Currículo</h1>

            <label>Nome Completo</label>
            <input type="text" name="nome" placeholder="Digite seu nome completo" value={formData.nome} onChange={handleChange} required />

            <label>RG</label>
            <input type="number" name="rg" placeholder="Digite seu RG" value={formData.rg} onChange={handleChange} required />

            <label>CPF</label>
            <input type="number" name="cpf" placeholder="Digite seu CPF" value={formData.cpf} onChange={handleChange} required />

            <label>Data de Nascimento</label>
            <input type="date" name="nascimento" value={formData.nascimento} onChange={handleChange} required />

            <label>Telefone</label>
            <input type="tel" name="telefone" placeholder="Digite seu telefone com DDD" pattern="\d{11}" maxLength="11" value={formData.telefone} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" placeholder="Digite seu email" value={formData.email} onChange={handleChange} required />

            <label>Estado</label>
            <select name="estado" value={formData.estado} onChange={handleChange}>
              <option value="">Selecione o estado</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SP">SP</option>
              <option value="SC">SC</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
              <option value="DF">DF</option>
            </select>


            <label>Cidade</label>
            <input type="text" name="cidade" placeholder="Digite sua cidade" value={formData.cidade} onChange={handleChange} required />

            <label>Endereço</label>
            <input type="text" name="endereco" placeholder="Digite seu endereço" value={formData.endereco} onChange={handleChange} required />

            <label>CEP</label>
            <input type="text" name="cep" placeholder="Digite seu CEP" value={formData.cep} onChange={handleChange} required />

            <label>Número do Endereço</label>
            <input type="text" name="numero" placeholder="Digite o número do endereço" value={formData.numero} onChange={handleChange} required />

            <label>Formação Acadêmica</label>
            <input type="text" name="formacao" placeholder="Digite sua formação acadêmica" value={formData.formacao} onChange={handleChange} />

            <label>PCD?</label>
            <select name="pcd" value={formData.pcd} onChange={handleChange}>
              <option value="nao">Não</option>
              <option value="sim">Sim</option>
            </select>

            <label>Qual Deficiência (se houver)</label>
            <input type="text" name="deficiencia" placeholder="Descreva a deficiência" value={formData.deficiencia} onChange={handleChange} />

            <label>Descrição para Mensagem</label>
            <textarea name="descricao" placeholder="Escreva uma mensagem" value={formData.descricao} onChange={handleChange}></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrabalheConosco;
