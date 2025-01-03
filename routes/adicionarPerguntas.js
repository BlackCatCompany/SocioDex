var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  try{
    res.render('adicionarPerguntas');
  }catch(error){
    res.status(500).send('Erro ao carregar página de adicionar perguntas: ' + error.message);
  }
});

module.exports = router;