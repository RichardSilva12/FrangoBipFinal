import React from 'react';
import './style.css';

const SeloQualidade = () => {
  const selos = [
    {
      id: 1,
      imagem: '/src/assets/img_certificado/selo_sif.png',
      titulo: 'SIF - Serviço de Inspeção Federal',
      descricao: 'Certificação que assegura a qualidade e a segurança alimentar dos nossos produtos.',
    },
    {
      id: 2,
      imagem: '/src/assets/img_certificado/selo_bem_estar.jpg',
      titulo: 'Selo de Qualidade de Limpeza',
      descricao: 'Garantia de altos padrões de higiene em todas as etapas de produção.',
    },
    {
        id: 3,
        imagem: '/src/assets/img_certificado/selo_sisbi.png',
        titulo: 'SISBI - Sistema Brasileiro de Inspeção',
        descricao: 'Certificação que garante a padronização e controle de qualidade dos produtos de origem animal.',
      },
  ];

  return (
    <section className="selo-qualidade">
      <h2>Nossos Selos de Qualidade</h2>
      <div className="selo-container">
        {selos.map((selo) => (
          <div key={selo.id} className="selo-card">
            <img src={selo.imagem} alt={selo.titulo} className="selo-imagem" />
            <h3>{selo.titulo}</h3>
            <p>{selo.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeloQualidade;
