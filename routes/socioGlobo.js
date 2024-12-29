const express = require('express');
const router = express.Router();

// Dados das marcações no mapa
const locations = [
    {
        name: 'Fortaleza, Brazil',
        coordinates: [-38.5426, -3.71722],
        image: '/images/augustecomte.jpg'
    },
    {
        name: 'São Paulo, Brazil',
        coordinates: [-46.6333, -23.5505],
        image: '/images/Durkheim.jpg'
    },
    {
        name: 'Rio de Janeiro, Brazil',
        coordinates: [-43.1729, -22.9068],
        image: '/images/darwin.jpg'
    }
];

// Rota para renderizar o EJS e passar os dados das marcações
router.get('/', (req, res) => {
    res.render('socioGlobo', { locations });
});

module.exports = router;
