import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app'; // Agora importando App em vez de Header diretamente

// Importando estilos do slick-carousel
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

