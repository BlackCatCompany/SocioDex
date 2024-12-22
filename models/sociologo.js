const mongoose = require('mongoose');

const sociologoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  nacionalidade: { type: String, required: true },
  principaisObras: { type: [String], required: true },
  imagem: { type: String, required: true }
});

module.exports = mongoose.model('Sociologo', sociologoSchema);