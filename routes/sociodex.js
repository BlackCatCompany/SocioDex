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
  const { nome, descricao, dataNascimento, nacionalidade, principaisObras, imagem, caracteristicas } = req.body;

  try {
    const novoSociologo = new Sociologo({
      nome,
      descricao,
      dataNascimento,
      nacionalidade,
      principaisObras: principaisObras.split(',').map((obra) => obra.trim()),
      imagem,
      caracteristicas: Array.isArray(caracteristicas) ? caracteristicas : [caracteristicas], // Converte para array se necessário
    });

    await novoSociologo.save(); // Salva no MongoDB
    res.redirect('/sociodex');
  } catch (error) {
    res.status(500).send('Erro ao adicionar sociólogo: ' + error.message);
  }
});

// Rota para exibir a página de administração
router.get('/admin', async (req, res) => {
  try {
    const sociologos = await Sociologo.find();
    res.render('adminSociologos', { sociologos });
  } catch (error) {
    res.status(500).send('Erro ao carregar a página de administração: ' + error.message);
  }
});

// Rota para exibir o formulário de edição de um sociólogo
router.get('/editar/:id', async (req, res) => {
  try {
    const sociologo = await Sociologo.findById(req.params.id);
    if (!sociologo) {
      return res.status(404).send('Sociólogo não encontrado');
    }
    res.render('editarSociologo', { sociologo });
  } catch (error) {
    res.status(500).send('Erro ao carregar o formulário de edição: ' + error.message);
  }
});

// Rota para atualizar um sociólogo
router.post('/editar/:id', async (req, res) => {
  const { nome, descricao, dataNascimento, nacionalidade, principaisObras, imagem, caracteristicas } = req.body;

  try {
    await Sociologo.findByIdAndUpdate(req.params.id, {
      nome,
      descricao,
      dataNascimento,
      nacionalidade,
      principaisObras: principaisObras.split(',').map((obra) => obra.trim()),
      imagem,
      caracteristicas: Array.isArray(caracteristicas) ? caracteristicas : [caracteristicas],
    });
    res.redirect('/sociodex/admin');
  } catch (error) {
    res.status(500).send('Erro ao atualizar o sociólogo: ' + error.message);
  }
});

// Rota para excluir um sociólogo
router.post('/deletar/:id', async (req, res) => {
  try {
    await Sociologo.findByIdAndDelete(req.params.id);
    res.redirect('/sociodex/admin');
  } catch (error) {
    res.status(500).send('Erro ao excluir o sociólogo: ' + error.message);
  }
});

// Rota para detalhamento de um sociólogo (rota dinâmica deve ficar por último)
router.get('/:id', async (req, res) => {
  try {
    const sociologo = await Sociologo.findById(req.params.id); // Busca o sociólogo pelo ID
    if (!sociologo) {
      return res.status(404).send('Sociólogo não encontrado');
    }
    res.render('detalheSociologo', { sociologo }); // Renderiza o template detalheSociologo.ejs
  } catch (error) {
    res.status(500).send('Erro ao carregar o detalhamento: ' + error.message);
  }
});

module.exports = router;
