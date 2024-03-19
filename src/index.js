import {
  checkForEat,
  draw as drawSnake,
  update as updateSnake,
  gameOver
} from "./snake.js";
import { drawFood, updateFood } from "./food.js";
const game = document.querySelector(`.game`);
export let score = document.querySelector(`.score`)
let interval
let ms = 6
let lastRenderTime = 0;
const fps = 3;
export let direction = {
  dx: 0,
  dy: -1,
};

function main(currentTime) {
  window.requestAnimationFrame(main);
  let secondsTakenToRenderFrame = (currentTime - lastRenderTime) / 1000;
  if (secondsTakenToRenderFrame < 1 / fps) {
    return;
  }

  lastRenderTime = currentTime;

  update();
  draw();
}

function update() {
  updateSnake();
  checkForEat();
  gameOver()
}

function draw() {
  game.innerHTML = "";
  drawSnake(game);
  drawFood(game);
}

window.requestAnimationFrame(main);

window.addEventListener("keydown", (e) => {
  clearInterval(interval)
  if ((e.code == "KeyW" && direction.dy !== 1) && ms > fps) {
    direction = {
      dy: -1,
      dx: 0,
    };

  } else if ((e.code == "KeyS" && direction.dy !== -1) && ms > fps) {
    direction = {
      dy: 1,
      dx: 0,
    };
  }

  if ((e.code == "KeyA" && direction.dx !== 1) && ms > fps) {
    direction = {
      dy: 0,
      dx: -1,
    };
  } else if ((e.code == "KeyD" && direction.dx !== -1) && ms > fps) {
    direction = {
      dy: 0,
      dx: 1,
    };
  } 
  ms = 0
  interval = setInterval(() => {
    ms++
  }, 10)
});
