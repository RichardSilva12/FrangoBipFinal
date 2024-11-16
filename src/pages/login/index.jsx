import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function LoginCadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, senha });
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    console.log('Cadastro:', { nome, email, senha });
  };

  return (
    <div className="login-cadastro-container">

      <div className="form-wrapper">
      <button onClick={() => navigate(-1)} className="btn-voltar-home">Voltar</button>
        <br />  <br />
        <h1>Entrar / Cadastrar</h1>
        <div className="button-container">
          <button onClick={() => setIsLogin(true)}>Login</button>
          <button onClick={() => setIsLogin(false)}>Cadastrar</button>
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
