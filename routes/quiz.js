var express = require("express");
var router = express.Router();
const Pergunta = require("../models/perguntas"); // Modelo MongoDB


// Função para embaralhar um array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
  }
  return array;
}

/* GET página inicial do quiz */
router.get("/", async function (req, res, next) {
  try {
    let questions = await Pergunta.find(); // Busca todas as perguntas no MongoDB

    if (!questions.length) {
      return res.render("quiz", {
        title: "Quiz de Sociologia",
        question: null,
        score: 0,
        feedback: "Nenhuma pergunta encontrada no banco de dados.",
      });
    }

    // Embaralha as perguntas
    questions = shuffleArray(questions);

    // Renderiza a primeira pergunta embaralhada
    res.render("quiz", {
      title: "Quiz de Sociologia",
      question: {
        question: questions[0].pergunta,
        options: shuffleArray(questions[0].alternativas), // Embaralha as alternativas também
      },
      currentIndex: 0,
      score: 0,
      feedback: null,
    });
  } catch (error) {
    res.status(500).send("Erro ao carregar perguntas: " + error.message);
  }
});

/* POST submissão da resposta */
router.post("/submit", async function (req, res, next) {
  try {
    const questions = await Pergunta.find();
    const currentIndex = parseInt(req.body.index); // Índice da pergunta atual
    const userAnswer = req.body.answer; // Resposta do usuário
    let score = parseInt(req.body.score) || 0; // Pontuação acumulada

    let feedback;
    if (userAnswer === questions[currentIndex].respostaCorreta) {
      feedback = "Correto! Boa resposta!";
      score++;
    } else {
      feedback = `Incorreto! A resposta certa é: "${questions[currentIndex].respostaCorreta}".`;
    }

    res.render("quiz", {
      title: "Quiz de Sociologia",
      question: {
        question: questions[currentIndex].pergunta,
        options: questions[currentIndex].alternativas,
      },
      currentIndex,
      score,
      feedback,
    });
  } catch (err) {
    next(err);
  }
});

/* POST avançar para próxima pergunta */
router.post("/next", async function (req, res, next) {
  try {
    const questions = await Pergunta.find();
    const currentIndex = parseInt(req.body.index); // Índice da pergunta atual
    const score = parseInt(req.body.score); // Pontuação acumulada

    if (currentIndex + 1 < questions.length) {
      res.render("quiz", {
        title: "Quiz de Sociologia",
        question: {
          question: questions[currentIndex + 1].pergunta,
          options: questions[currentIndex + 1].alternativas,
        },
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
  } catch (err) {
    next(err);
  }
});

module.exports = router;
