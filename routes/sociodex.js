const express = require('express');
const Sociologo = require('../models/sociologo');
const router = express.Router();

// Endpoint para listar todos os sociólogos
router.get('/', async (req, res) => {
  try {
    const sociologos = await Sociologo.find();
    res.json(sociologos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar sociólogos.' });
  }
});

// Endpoint para adicionar um sociólogo
router.post('/', async (req, res) => {
  const { nome, descricao, dataNascimento, nacionalidade, principaisObras, imagem } = req.body;
  try {
    const novoSociologo = new Sociologo({
      nome,
      descricao,
      dataNascimento,
      nacionalidade,
      principaisObras,
      imagem
    });
    await novoSociologo.save();
    res.status(201).json(novoSociologo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar sociólogo.' });
  }
});

module.exports = router;
