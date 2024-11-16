import React from 'react';
import facebookIcon from '../../../src/assets/img/facebook.png';
import instagramIcon from '../../../src/assets/img/instagram.png';
import linkedinIcon from '../../../src/assets/img/linkedin.png';
import logo from '../../assets/img/logo-bip.png';
import './style.css';

const Footer = () => {  
  return (
      <footer className="footer">
        <div className="container">
          <div className="logo-container">
            <img src={logo} className="logo" alt="Logo Bip" />
          </div>

          <div className="conteudo">
            <div>
              <h3>Contato</h3>
              <p>+55 (17) 3301 4031/4028</p>
              <p>faleconosco@Bip.com.br</p>
            </div>
            <div>
              <h3>Endereço</h3>
              <p>Rua Penita, 2450, Boa Vista, São José do Rio Preto - SP, 15.025-150</p>
            </div>
            <div>
              <h3>Horário de Atendimento</h3>
              <p>Segunda à sexta: das 7:30h às 12:00h e das 13:30h às 17:30h</p>
            </div>
          </div>

          <div className="social-media-container">
            <ul>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                 <img src={instagramIcon} alt="Instagram" className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="Facebook" className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="Linkedin" className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Bip. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

  );
}

export default Footer;
