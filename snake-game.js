// Snake Game in Node.js
const sound = new Audio('path_to_sound_effect.mp3');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const grid = [];
const height = 20;
const width = 20;
let snake = [{x: 5, y: 5}]; // Starting position of the snake
let food = {x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height)};
let direction = 'RIGHT';
let gameOver = false;

function drawGrid() {
  // Clear grid
  console.clear();
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < width; j++) {
      if (snake.some(segment => segment.x === j && segment.y === i)) {
        row += 'O'; // Snake segment
      } else if (food.x === j && food.y === i) {
        row += '*'; // Food
      } else {
        row += '.'; // Empty space
      }
    }
    console.log(row);
  }
}

function updateGame() {
  const head = {...snake[0]};

  switch (direction) {
    case 'UP': head.y--; break;
    case 'DOWN': head.y++; break;
    case 'LEFT': head.x--; break;
    case 'RIGHT': head.x++; break;
  }

  // Check if the snake eats food
  if (head.x === food.x && head.y === food.y) {
    snake.unshift(head); // Add new head
    food = {x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height)}; // Generate new food
  } else {
    snake.unshift(head); // Add new head
    snake.pop(); // Remove tail
  }

  // Check for collision with walls or itself
  if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height || snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
    gameOver = true;
  }
}

function askForDirection() {
  if (gameOver) {
    console.log('Game Over!');
    rl.close();
    return;
  }

  drawGrid();
  rl.question('Enter direction (UP, DOWN, LEFT, RIGHT): ', answer => {
    direction = answer.toUpperCase();
    updateGame();
    askForDirection();
  });
}

askForDirection();