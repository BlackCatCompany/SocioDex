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
  // Renderiza o template do quiz com as perguntas
  res.render("quiz", { title: "Quiz de Sociologia", questions });
});

/* POST submissão do quiz */
router.post("/submit", function (req, res, next) {
  const userAnswers = req.body; // Respostas do usuário enviadas pelo formulário
  let score = 0;

  // Valida as respostas do usuário
  questions.forEach((q) => {
    if (userAnswers[q.id] === q.answer) {
      score++;
    }
  });

  // Envia a pontuação como resposta JSON
  res.json({
    message: `Você acertou ${score} de ${questions.length} perguntas!`,
    score,
  });
});

module.exports = router;
