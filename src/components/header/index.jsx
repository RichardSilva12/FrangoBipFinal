import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import facebookIcon from '../../../src/assets/img/facebook.png';
import instagramIcon from '../../../src/assets/img/instagram.png';
import linkedinIcon from '../../../src/assets/img/linkedin.png';
import logo from '../../assets/img/logo-bip.png';
import './style.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  return (
    <header className="header"> 
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div> 
      
      <nav className={`conteudo ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/institucional">Institucional</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/receitas_tela">Receitas</Link></li>
          <li><Link to="/trabalheConosco">Trabalhe Conosco</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>

      <div className="header-right">
        <Link to="/login">
          <button>ENTRAR</button>
        </Link>
      </div>

      <div className="logos">
        <img src={instagramIcon} alt="Instagram" className="social-icon" />
        <img src={facebookIcon} alt="Facebook" className="social-icon" />
        <img src={linkedinIcon} alt="Linkedin" className="social-icon" />
      </div>

      {/* Botão de Menu para telas pequenas */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
