import { direction } from "./index.js";
import { foodCoordinates } from "./food.js";
import {score} from "./index.js"

export let coordinates = [
  { x: 10, y: 9 },
  { x: 10, y: 10 },
  { x: 10, y: 11 },
];

export function draw(game) {
  coordinates.forEach((coordinate) => {
    let segment = document.createElement("div");
    segment.classList.add("snake");
    segment.style.gridRowStart = coordinate.y;
    segment.style.gridColumnStart = coordinate.x;
    game.append(segment);
  });
}

export function update() {
  for (let i = coordinates.length - 1; i > 0; i--) {
    coordinates[i] = { ...coordinates[i - 1] };
  }
  coordinates[0].x += direction.dx;
  coordinates[0].y += direction.dy;
}

export function checkForEat() {
  if (
    foodCoordinates.fx == coordinates[0].x &&
    foodCoordinates.fy == coordinates[0].y
  ) {
    let randomCoorX = Math.round(Math.random() * 20);
    while (randomCoorX == foodCoordinates.fx) {
     randomCoorX = Math.round(Math.random() * 20);
    }
    let randomCoorY = Math.round(Math.random() * 20);
    while (randomCoorY == foodCoordinates.fy) {
     randomCoorY = Math.round(Math.random() * 20);
    }
    foodCoordinates.fx = randomCoorX
    foodCoordinates.fy = randomCoorY
    score.innerText = parseInt(score.innerText) + 1
    let NewPartCoordinates = {}
    if(direction.dx == -1 ){
      NewPartCoordinates = {
        x: coordinates[coordinates.length-1].x + 1 , y:coordinates[coordinates.length-1].y
      }
     
    }
    if(direction.dy == 1){
      NewPartCoordinates = {
        x: coordinates[coordinates.length-1].x , y:coordinates[coordinates.length-1].y + 1 
      }
    }
    coordinates.push( NewPartCoordinates)
    
    
  }
}

export function gameOver() {
  for( let i=1; i<coordinates.length; i++) {
    if (coordinates[0].x == coordinates[i].x && coordinates[0].y == coordinates[i].y) {
      alert("GameOver")
      window.location.reload()
    }
  };
   
  if(coordinates[0].x<1 || coordinates[0].x>20 ||coordinates[0].y<1 || coordinates[0].y>20) {
    alert("GameOver")
    coordinates = []
    let gameOverCoordinates = [
        { x: 10, y: 9 },
        { x: 10, y: 10 },
        { x: 10, y: 11 },
      ];
      coordinates = gameOverCoordinates
      window.location.reload()
      
  }

}