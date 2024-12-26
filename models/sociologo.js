const mongoose = require('mongoose');

// Definição do schema para um sociólogo
const SociologoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  dataNascimento: { type: String, required: true },
  nacionalidade: { type: String, required: true },
  principaisObras: { type: [String], required: true },
  imagem: { type: String, required: true },
  caracteristicas: { type: [String], required: true } // Ex: ['Filósofo', 'Teórico', 'Revolucionário']
});

// Modelo do sociólogo
module.exports = mongoose.model('Sociologo', SociologoSchema, 'ListaSociologos');
