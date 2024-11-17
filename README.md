🐔 Frigo Bip - Website de E-commerce para Frigorífico
📋 Descrição do Projeto
Este é um website completo desenvolvido para o Frigo Bip, um frigorífico especializado em produtos de carne de frango. O sistema foi construído utilizando React (com Vite) no frontend e um servidor Node.js no backend, integrado a um banco de dados MySQL.

O projeto visa divulgar os produtos, serviços e informações institucionais da empresa, além de oferecer funcionalidades como:

📦 Carrinho de compras para clientes finais
🛒 Área de cadastro e login de usuários
✉️ Sistema de envio de pedidos por e-mail
🌐 Página de contato e formulários de feedback
🛠️ Tecnologias Utilizadas
Frontend: React (Vite), HTML, CSS, JavaScript
Backend: Node.js, Express, Nodemailer
Banco de Dados: MySQL
Outras Ferramentas: Visual Studio Code (VS Code), MySQL Workbench
⚙️ Pré-requisitos
Antes de começar, certifique-se de ter instalado em seu sistema:

Node.js (versão 18.x ou superior)
Git
Visual Studio Code (VS Code)
MySQL
Vite
🚀 Como Rodar o Projeto
Siga os passos abaixo para clonar, configurar e executar o projeto.

1. Clonar o Repositório
Abra o terminal e execute:

bash
Copiar código
git clone **https://github.com/RichardSilva12/projeto-frigobip**
cd projeto-frigobip
2. Configurar o Banco de Dados MySQL
Abra o MySQL Workbench e crie um banco de dados:
sql
Copiar código
CREATE DATABASE frigobip;
Importe o arquivo banco.sql localizado na pasta /db do projeto para criar as tabelas necessárias.
3. Configuração do Backend
Acesse a pasta api:
bash
Copiar código
cd api
Instale as dependências:
bash
Copiar código
npm install
Crie um arquivo .env na pasta api com as seguintes variáveis (baseadas no .env.example):
makefile
Copiar código
PORT=3001
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=frigobip
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app
Inicie o servidor:
bash
Copiar código
node servidor.js
O backend estará rodando em http://localhost:3001.

4. Configuração do Frontend
Volte para a pasta raiz do projeto:
bash
Copiar código
cd ..
Instale as dependências:
bash
Copiar código
npm install
Execute o servidor de desenvolvimento:
bash
Copiar código
npm run dev
O frontend estará disponível em http://localhost:5173.

5. Executando o Projeto Completo
Certifique-se de que:

O backend (node servidor.js) esteja rodando.
O frontend (npm run dev) esteja rodando.
Abra o navegador e acesse: http://localhost:5173

📄 Funcionalidades do Sistema
Listagem de produtos
Carrinho de compras
Cadastro e login de usuários
Envio de pedidos via e-mail
Página de contato com formulário
🛠️ Possíveis Problemas e Soluções
Erro de conexão com o banco de dados: Verifique as configurações do .env.
Porta já em uso: Certifique-se de que as portas 3001 e 5173 estão livres.
Dependências desatualizadas: Execute npm update para atualizar.
🤝 Contribuições
Contribuições são sempre bem-vindas! Sinta-se à vontade para enviar pull requests ou issues no GitHub.

📧 Contato
Para mais informações, entre em contato:

Richard Peghin - richard.a.peghin@gmail.com
