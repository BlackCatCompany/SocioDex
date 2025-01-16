// selecionarFuncao.js
const express = require('express');
const router = express.Router();

// Rota para exibir a tela de escolher função
router.get('/', (req, res) => {
  res.render('selecionarFuncao');
});

module.exports = router;
