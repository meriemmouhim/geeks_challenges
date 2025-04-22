const express = require('express');
const router = express.Router();

const triviaQuestions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

let currentQuestionIndex = 0;
let score = 0;

router.get('/quiz', (req, res) => {
    if (currentQuestionIndex >= triviaQuestions.length) {
        return res.redirect('/quiz/score');
    }
    const currentQuestion = triviaQuestions[currentQuestionIndex];
    res.send(`
        <html>
            <head>
                <title>Trivia Quiz</title>
            </head>
            <body>
                <h1>Trivia Quiz</h1>
                <form action="/quiz" method="POST">
                    <p>${currentQuestion.question}</p>
                    <input type="text" name="answer" required>
                    <button type="submit">Submit Answer</button>
                </form>
            </body>
        </html>
    `);
});

router.post('/quiz', (req, res) => {
    const userAnswer = req.body.answer.trim();
    const currentQuestion = triviaQuestions[currentQuestionIndex];

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        score++;
        res.send(`
            <html>
                <head>
                    <title>Trivia Quiz</title>
                </head>
                <body>
                    <h1>Correct!</h1>
                    <a href="/quiz">Next Question</a>
                </body>
            </html>
        `);
    } else {
        res.send(`
            <html>
                <head>
                    <title>Trivia Quiz</title>
                </head>
                <body>
                    <h1>Incorrect! The correct answer was: ${currentQuestion.answer}</h1>
                    <a href="/quiz">Next Question</a>
                </body>
            </html>
        `);
    }

    currentQuestionIndex++;
});

router.get('/quiz/score', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Trivia Quiz - Final Score</title>
            </head>
            <body>
                <h1>Quiz Complete!</h1>
                <p>Your final score is: ${score}/${triviaQuestions.length}</p>
                <a href="/quiz">Restart Quiz</a>
            </body>
        </html>
    `);

    currentQuestionIndex = 0;
    score = 0;
});

module.exports = router;