const express = require('express');
const router = express.Router();

const timelineData = [
  {
    date: "1838",
    event: "Criação do termo 'Sociologia'",
    description: "Auguste Comte introduz o termo 'sociologia' em sua obra 'Curso de Filosofia Positiva'.",
    icon: "/public/surgimento.jpg"
  },
  {
    date: "1897",
    event: "Publicação de 'O Suicídio'",
    description: "Émile Durkheim analisa o suicídio como um fenômeno social em seu estudo clássico.",
    icon: "/icons/durkheim.png"
  },
  {
    date: "1904",
    event: "Publicação de 'A Ética Protestante e o Espírito do Capitalismo'",
    description: "Max Weber explora a relação entre religião e capitalismo em uma obra seminal.",
    icon: "/icons/weber.png"
  }
];

router.get('/', (req, res) => {
  res.render('index', { timeline: timelineData });
});

module.exports = router;
