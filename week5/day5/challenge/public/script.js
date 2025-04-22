let player = '';
let score = 0;

async function startGame() {
  player = document.getElementById('playerName').value.trim();
  if (!player) return alert('Please enter your name.');

  document.getElementById('nameInput').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';
  getNewEmoji();
}

async function getNewEmoji() {
  const res = await fetch(`/emoji/${player}`);
  const data = await res.json();

  document.getElementById('emoji').textContent = data.emoji;

  const form = document.getElementById('guessForm');
  form.innerHTML = '';
  data.options.forEach(option => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = option;
    btn.onclick = () => makeGuess(option);
    form.appendChild(btn);
  });
}

async function makeGuess(guess) {
  const res = await fetch('/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ player, guess })
  });
  const data = await res.json();

  document.getElementById('feedback').textContent = data.correct
    ? '✅ Correct!'
    : '❌ Wrong!';
  document.getElementById('score').textContent = data.score;
  getNewEmoji();
  updateLeaderboard();
}

async function updateLeaderboard() {
  const res = await fetch('/leaderboard');
  const leaderboard = await res.json();

  const ul = document.getElementById('leaderboard');
  ul.innerHTML = '';
  leaderboard.forEach(({ name, score }) => {
    const li = document.createElement('li');
    li.textContent = `${name}: ${score}`;
    ul.appendChild(li);
  });
}