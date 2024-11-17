import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function LoginCadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  // Função de login
  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.email === email && u.senha === senha);
    
    if (user) {
      alert('Login bem-sucedido!');
      navigate('/'); // Página inicial
    } else {
      setErrorMessage('Email ou senha inválidos!');
    }

    setEmail('');
    setSenha('');
  };

  // Função de cadastro
  const handleCadastro = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar se o e-mail já está cadastrado
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      setErrorMessage('Usuário já cadastrado! Faça o login.');
      return;
    }

    if (senha.length < 6) {
      setErrorMessage('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Criar um novo usuário
    const newUser = { nome, email, senha };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Cadastro realizado com sucesso! Agora faça login.');
    setNome('');
    setEmail('');
    setSenha('');
    setIsLogin(true); // Redireciona para a tela de login
  };

  return (
    <div className="login-cadastro-container">
      <div className="form-wrapper">
        <button onClick={() => navigate(-1)} className="btn-voltar-home">Voltar</button>
        <h1>{isLogin ? 'Entrar' : 'Cadastrar'}</h1>
        
        <div className="button-container">
          <button onClick={() => { setIsLogin(true); setErrorMessage(''); }}>Login</button>
          <button onClick={() => { setIsLogin(false); setErrorMessage(''); }}>Cadastrar</button>
        </div>

        <div className="form-container">
          {isLogin ? (
            <div className="login-section">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Senha:</label>
                  <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit">Entrar</button>
              </form>
            </div>
          ) : (
            <div className="cadastro-section">
              <h2>Cadastrar Novo Usuário</h2>
              <form onSubmit={handleCadastro}>
                <div>
                  <label>Nome:</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Senha:</label>
                  <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit">Cadastrar</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginCadastro;
