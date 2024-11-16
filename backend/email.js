/*const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const app = express();

// Configuração do CORS (se for necessário para o seu frontend)
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

// Rota para enviar e-mail da página de contato
app.post('/send-email', (req, res) => {
    const { nome, telefone, email, assunto, descricao } = req.body;

    console.log('Dados recebidos (Contato):', req.body);

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

// Rota para enviar e-mail da página "Trabalhe Conosco"
app.post('/send-job-application', (req, res) => {
    const { nome, rg, cpf, nascimento, telefone, email, estado, cidade, endereco, cep, numero, formacao, pcd, deficiencia, descricao } = req.body;

    console.log('Dados recebidos (Trabalhe Conosco):', req.body);

    const mailOptions = {
        from: 'Bip Alimentos <richard.a.peghin@gmail.com>',
        to: 'malokasilva123.123@gmail.com',
        subject: 'Nova candidatura - Trabalhe Conosco',
        text: `
        Nome: ${nome}
        RG: ${rg}
        CPF: ${cpf}
        Data de Nascimento: ${nascimento}
        Telefone: ${telefone}
        Email: ${email}
        Estado: ${estado}
        Cidade: ${cidade}
        Endereço: ${endereco}, Nº ${numero}
        CEP: ${cep}
        Formação Acadêmica: ${formacao}
        PCD: ${pcd ? 'Sim' : 'Não'}
        Deficiência: ${deficiencia || 'N/A'}
        Mensagem: ${descricao}`,
        html: `<h2>Nova candidatura para Trabalhe Conosco</h2>
               <p><strong>Nome:</strong> ${nome}</p>
               <p><strong>RG:</strong> ${rg}</p>
               <p><strong>CPF:</strong> ${cpf}</p>
               <p><strong>Data de Nascimento:</strong> ${nascimento}</p>
               <p><strong>Telefone:</strong> ${telefone}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Estado:</strong> ${estado}</p>
               <p><strong>Cidade:</strong> ${cidade}</p>
               <p><strong>Endereço:</strong> ${endereco}, Nº ${numero}</p>
               <p><strong>CEP:</strong> ${cep}</p>
               <p><strong>Formação Acadêmica:</strong> ${formacao}</p>
               <p><strong>PCD:</strong> ${pcd ? 'Sim' : 'Não'}</p>
               <p><strong>Deficiência:</strong> ${deficiencia || 'N/A'}</p>
               <p><strong>Mensagem:</strong> ${descricao}</p>`
    };

    transport.sendMail(mailOptions)
        .then(() => {
            console.log('Email enviado com sucesso (Trabalhe Conosco)!');
            res.send('Candidatura enviada com sucesso!');
        })
        .catch((err) => {
            console.error('Erro ao enviar candidatura:', err);
            res.status(500).send('Erro ao enviar candidatura');
        });
});



//pedido carrinho 

// Rota para enviar e-mail com o pedido do carrinho
app.post('/enviar-pedido', (req, res) => {
  const { nome, email, produtos } = req.body;

  console.log('Dados do pedido recebidos:', req.body);

  if (!nome || !email || !produtos) {
    return res.status(400).send('Dados incompletos.');
  }

  const listaProdutos = produtos.map((produto, index) => `<li>${index + 1}. ${produto}</li>`).join('');

  const mailOptions = {
    from: 'Bip Alimentos <richard.a.peghin@gmail.com>',
    to: 'malokasilva123.123@gmail.com',
    subject: 'Novo Pedido - Bip Alimentos',
    text: `Novo pedido recebido de ${nome} (${email}):\nProdutos:\n${produtos.join(', ')}`,
    html: `<h2>Novo pedido recebido</h2>
           <p><strong>Nome:</strong> ${nome}</p>
           <p><strong>Email:</strong> ${email}</p>
           <h3>Produtos:</h3>
           <ul>${listaProdutos}</ul>`
  };

  transport.sendMail(mailOptions)
    .then(() => {
      console.log('Pedido enviado com sucesso!');
      res.send('Pedido enviado com sucesso!');
    })
    .catch((err) => {
      console.error('Erro ao enviar pedido:', err);
      res.status(500).send('Erro ao enviar o pedido');
    });
});


// Iniciar o servidor na porta 5000
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});

*/