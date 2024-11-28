// Importações
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config'); // Importando o arquivo de configurações
const indexRouter = require('./routes/index'); // Suas rotas
const app = express();


// Configurando middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

// Conexão com MongoDB
mongoose
  .connect(config.mongoURI)
  .then(() => console.log('Conexão com MongoDB Atlas bem-sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Configuração do servidor
app.set('port', config.port);

module.exports = app;
