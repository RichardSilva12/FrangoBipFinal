// src/routes.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProdutosHome from './components/produtos/index';
import Contato from './pages/contact/index'; // Certifique-se de que o caminho e nome do arquivo estão corretos
import Home from './pages/home/index'; // Certifique-se de que o caminho e nome do arquivo estão corretos
import Institucional from './pages/institucional/index';
import Login from './pages/login/index';
import Carrinho from './pages/produtos/card/index';
import Produtos from './pages/produtos/index';
import Receita from './pages/receitas_tela/index';
import TrabalheConosco from './pages/trabalheConosco/index';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contato />} />
        <Route path="/receitas_tela" element={<Receita />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/trabalheConosco" element={<TrabalheConosco />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/card" element={<Carrinho />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/produtos" element={<ProdutosHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
