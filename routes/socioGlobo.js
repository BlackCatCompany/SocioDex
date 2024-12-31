const express = require('express');
const router = express.Router();
const Sociologo = require('../models/sociologo'); // Pegando a estrutura do sociologo.js

// Rota para renderizar o mapa e passar os dados
router.get('/', async (req, res) => {
  try {
    const sociologos = await Sociologo.find(); // Recupera todos os sociólogos do banco de dados
    res.render('socioGlobo', { sociologos: sociologos }); // Renderizando SocioGlobo.ejs e passando os sociologos para o Front-end
    console.log(sociologos); // Deve exibir a lista de sociólogos.
  } catch (error) {
    res.status(500).send('Erro ao carregar os sociólogos: ' + error.message); // Exibir mensagem de erro
  }
});

module.exports = router;
