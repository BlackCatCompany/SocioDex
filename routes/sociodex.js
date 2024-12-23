const express = require('express');
const Sociologo = require('../models/sociologo');
const router = express.Router();

// Rota para exibir a página principal da SocioDex
router.get('/', async (req, res) => {
  try {
    const sociologos = await Sociologo.find(); // Recupera todos os sociólogos do banco de dados
    res.render('sociodex', { sociologos }); // Renderiza a página sociodex.ejs
  } catch (error) {
    res.status(500).send('Erro ao carregar os sociólogos: ' + error.message);
  }
});

// Rota para exibir o formulário de adição de sociólogos
router.get('/adicionar', (req, res) => {
  res.render('adicionarSociologo');
});

router.post('/adicionar', async (req, res) => {
  const { nome, descricao, dataNascimento, nacionalidade, principaisObras, imagem } = req.body;

  try {
    const novoSociologo = new Sociologo({
      nome,
      descricao,
      dataNascimento,
      nacionalidade,
      principaisObras: principaisObras.split(','), // Converte para array
      imagem,
    });

    await novoSociologo.save(); // Salva no MongoDB
    res.redirect('/sociodex');
  } catch (error) {
    res.status(500).send('Erro ao adicionar sociólogo: ' + error.message);
  }
});

module.exports = router;
