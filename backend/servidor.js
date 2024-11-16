const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const app = express();

// Configuração do CORS (para aceitar requisições do frontend)
app.use(cors());

// Habilitar o servidor para aceitar JSON
app.use(express.json());

// Configuração do Nodemailer
const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'richard.a.peghin@gmail.com',
    pass: 'emndtwiuokekwwkq',
  }
});

// Rota para enviar e-mail da página de Contato
app.post('/send-email', (req, res) => {
  const { nome, telefone, email, assunto, descricao } = req.body;

  const mailOptions = {
    from: 'Bip Alimentos <richard.a.peghin@gmail.com>',
    to: 'malokasilva123.123@gmail.com',
    subject: assunto,
    text: `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${descricao}`,
    html: `<h2>Nova mensagem de contato</h2>
           <p><strong>Nome:</strong> ${nome}</p>
           <p><strong>Telefone:</strong> ${telefone}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Mensagem:</strong> ${descricao}</p>`
  };

  transport.sendMail(mailOptions)
    .then(() => {
      console.log('Email enviado com sucesso (Contato)!');
      res.send('Email enviado com sucesso!');
    })
    .catch((err) => {
      console.error('Erro ao enviar e-mail (Contato):', err);
      res.status(500).send('Erro ao enviar e-mail');
    });
});

// Rota para enviar e-mail da página Trabalhe Conosco
app.post('/send-job-application', (req, res) => {
  const {
    nome,
    rg,
    cpf,
    nascimento,
    telefone,
    estado,
    cidade,
    endereco,
    cep,
    numero,
    formacao,
    pcd,
    deficiencia,
    descricao,
    email
  } = req.body;

  const mailOptions = {
    from: 'Bip Alimentos <richard.a.peghin@gmail.com>',
    to: 'malokasilva123.123@gmail.com',
    subject: 'Nova Candidatura - Trabalhe Conosco',
    text: `
      Nome: ${nome}
      RG: ${rg}
      CPF: ${cpf}
      Data de Nascimento: ${nascimento}
      Telefone: ${telefone}
      Email: ${email}
      Estado: ${estado}
      Cidade: ${cidade}
      Endereço: ${endereco}, Número: ${numero}
      CEP: ${cep}
      Formação Acadêmica: ${formacao}
      PCD: ${pcd}
      Deficiência: ${deficiencia}
      Mensagem: ${descricao}
    `,
    html: `
      <h2>Nova Candidatura Recebida</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>RG:</strong> ${rg}</p>
      <p><strong>CPF:</strong> ${cpf}</p>
      <p><strong>Data de Nascimento:</strong> ${nascimento}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Estado:</strong> ${estado}</p>
      <p><strong>Cidade:</strong> ${cidade}</p>
      <p><strong>Endereço:</strong> ${endereco}, Número: ${numero}</p>
      <p><strong>CEP:</strong> ${cep}</p>
      <p><strong>Formação Acadêmica:</strong> ${formacao}</p>
      <p><strong>PCD:</strong> ${pcd}</p>
      <p><strong>Deficiência:</strong> ${deficiencia}</p>
      <p><strong>Mensagem:</strong> ${descricao}</p>
    `
  };

  transport.sendMail(mailOptions)
    .then(() => {
      console.log('Email enviado com sucesso (Trabalhe Conosco)!');
      res.send('Candidatura enviada com sucesso!');
    })
    .catch((err) => {
      console.error('Erro ao enviar e-mail (Trabalhe Conosco):', err);
      res.status(500).send('Erro ao enviar candidatura');
    });
});


//carrinho rodando no servidor
/// Rota para enviar pedido por email
app.post('/enviar-pedido', (req, res) => {
  const { nome, email, produtos } = req.body;

  if (!nome || !email || !produtos) {
    return res.status(400).json({ message: 'Dados incompletos' });
  }

  const mailOptions = {
    from: `Bip Alimentos <${process.env.EMAIL_USER}>`,
    to: 'malokasilva123.123@gmail.com',
    subject: 'Novo Pedido',
    html: `
      <h2>Novo Pedido Recebido</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Produtos:</strong> ${produtos.join(', ')}</p>
    `
  };

  
  transport.sendMail(mailOptions)
    .then(() => {
      console.log('Email enviado com sucesso (Pedidos)!');
      res.send('Pedidos enviados com sucesso!');
    })
    .catch((err) => {
      console.error('Erro ao enviar e-mail (Pedidos):', err);
      res.status(500).send('Erro ao enviar pedidos');
    });
});


// Iniciar o servidor na porta 5000
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
