var express = require("express");
var router = express.Router();

// Dados das perguntas
const questions = [
  {
    id: "1",
    question: "Quem foi Karl Marx?",
    options: [
      "Um economista e filósofo alemão",
      "Um cientista político brasileiro",
      "Um sociólogo francês",
      "Um historiador italiano",
    ],
    answer: "Um economista e filósofo alemão",
  },
  {
    id: "2",
    question: "O que Émile Durkheim considerava 'fatos sociais'?",
    options: [
      "Eventos históricos",
      "Fenômenos sociais que exercem uma influência sobre os indivíduos",
      "Comportamentos individuais",
      "Teorias psicológicas",
    ],
    answer: "Fenômenos sociais que exercem uma influência sobre os indivíduos",
  },
  {
    id: "3",
    question: "Qual teoria é associada a Max Weber?",
    options: [
      "A ética protestante e o espírito do capitalismo",
      "A luta de classes",
      "A teoria do darwinismo social",
      "O funcionalismo estrutural",
    ],
    answer: "A ética protestante e o espírito do capitalismo",
  },
];

/* GET página inicial do quiz */
router.get("/", function (req, res, next) {
  res.render("quiz", {
    title: "Quiz de Sociologia",
    question: questions[0],
    currentIndex: 0,
    score: 0,
    feedback: null,
  });
});

/* POST submissão do quiz */
router.post("/submit", function (req, res, next) {
  const userAnswer = req.body.answer; // Resposta do usuário
  const currentIndex = parseInt(req.body.index); // Índice da pergunta atual
  let score = parseInt(req.body.score) || 0; // Pontuação acumulada

  // Valida a resposta e prepara o feedback
  let feedback;
  if (userAnswer === questions[currentIndex].answer) {
    feedback = "Correto! Boa resposta!";
    score++; // Incrementa a pontuação
  } else {
    feedback = `Incorreto! A resposta certa é: "${questions[currentIndex].answer}"`;
  }

  // Renderiza a página com o feedback antes de avançar
  res.render("quiz", {
    title: "Quiz de Sociologia",
    question: questions[currentIndex],
    currentIndex,
    score,
    feedback,
  });
});

/* POST avançar para a próxima pergunta */
router.post("/next", function (req, res, next) {
  const currentIndex = parseInt(req.body.index); // Índice da pergunta atual
  const score = parseInt(req.body.score); // Pontuação acumulada

  // Avança para a próxima pergunta ou exibe o resultado final
  if (currentIndex + 1 < questions.length) {
    res.render("quiz", {
      title: "Quiz de Sociologia",
      question: questions[currentIndex + 1],
      currentIndex: currentIndex + 1,
      score,
      feedback: null,
    });
  } else {
    res.render("quiz", {
      title: "Quiz de Sociologia",
      question: null,
      score,
      questions,
      feedback: null,
    });
  }
});

module.exports = router;
