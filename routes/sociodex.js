var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// Modelo Sociologo (Certifique-se de que o modelo está correto)
const Sociologo = mongoose.model('Sociologo', new mongoose.Schema({
  nome: String
}), 'ListaSociologos')

// Rota para exibir os sociólogos
router.get('/', (req, res) => {
  Sociologo.find() // Busca todos os sociólogos
    .then(sociologos => {
      // Passa os dados para o EJS
      res.render('sociodex', { sociologos: sociologos }); 
    })
    .catch(err => {
      console.error('Erro ao buscar sociólogos', err);
      res.status(500).send('Erro ao buscar sociólogos');
    });
});

module.exports = router;