const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '📚', name: 'Books' },
  { emoji: '🎉', name: 'Party' },
  { emoji: '🌞', name: 'Sun' }
];

let scores = {};
let currentRounds = {};

function getRandomEmojiQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [correct.name];

  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(random)) options.push(random);
  }

  return {
    emoji: correct.emoji,
    correctAnswer: correct.name,
    options: options.sort(() => Math.random() - 0.5)
  };
}

app.get('/emoji/:player', (req, res) => {
  const { player } = req.params;
  const question = getRandomEmojiQuestion();
  currentRounds[player] = question.correctAnswer;
  res.json({ emoji: question.emoji, options: question.options });
});

app.post('/guess', (req, res) => {
  const { player, guess } = req.body;
  const correct = currentRounds[player];

  if (!scores[player]) scores[player] = 0;

  if (guess === correct) {
    scores[player]++;
    res.json({ correct: true, score: scores[player] });
  } else {
    res.json({ correct: false, score: scores[player] });
  }
});

app.get('/leaderboard', (req, res) => {
  const sorted = Object.entries(scores)
    .map(([name, score]) => ({ name, score }))
    .sort((a, b) => b.score - a.score);
  res.json(sorted);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});