var express = require("express");
var router = express.Router();

// Dados das perguntas (pode ser expandido ou armazenado em um banco de dados)
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

/* GET página do quiz */
router.get("/", function (req, res, next) {
  // Começa com a primeira pergunta
  res.render("quiz", { title: "Quiz de Sociologia", question: questions[0], currentIndex: 0, score: 0 });
});

/* POST submissão do quiz */
router.post("/submit", function (req, res, next) {
  const userAnswer = req.body.answer; // Resposta do usuário
  const currentIndex = parseInt(req.body.index); // Índice da pergunta atual
  let score = parseInt(req.body.score) || 0; // Pontuação (passa pela requisição)

  // Valida a resposta
  if (userAnswer === questions[currentIndex].answer) {
    score++; // Incrementa a pontuação se a resposta estiver correta
  }

  // Verifica se há mais perguntas
  if (currentIndex + 1 < questions.length) {
    // Se houver mais perguntas, renderiza a próxima
    res.render("quiz", { title: "Quiz de Sociologia", question: questions[currentIndex + 1], currentIndex: currentIndex + 1, score });
  } else {
    // Se não houver mais perguntas, exibe a pontuação final
    res.render("quiz", { title: "Quiz de Sociologia", question: null, score });
  }
});

module.exports = router;
