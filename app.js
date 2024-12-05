// Importações
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config'); // Importando o arquivo de configurações
const app = express();

//CRIANDO ROTAS 1
var indexRouter = require('./routes/index');
var quizRouter = require('./routes/quiz');

// Configuração do motor de visualização (EJS) e pasta das views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Diretório onde estão os templates

//CHAMANDO ROTA 2
app.use('/', indexRouter);
app.use('/quiz', quizRouter);

// Configuração dos middlewares
app.use(logger('dev')); // Log das requisições HTTP
app.use(express.json()); // Parse de JSON
app.use(express.urlencoded({ extended: false })); // Parse de URL encoded
app.use(cookieParser()); // Parse de cookies
app.use(express.static(path.join(__dirname, 'public'))); // Arquivos estáticos (como CSS, JS, imagens)

// Conexão com MongoDB
mongoose
  .connect(config.mongoURI)
  .then(() => console.log('Conexão com MongoDB Atlas bem-sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Tratamento de erros 404 (quando a rota não existe)
app.use(function(req, res, next) {
  next(createError(404));
});

// Tratamento de erros gerais
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Definindo a porta do servidor
app.set('port', config.port || 3000); // Se não tiver no config, usa 3000 como padrão

module.exports = app;
