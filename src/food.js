 export let foodCoordinates = {
    fx: Math.floor(Math.random() * 20) , fy: Math.floor(Math.random() * 20)
 }

export function updateFood(){
    
}




export function drawFood(game){
    let foodSegment = document.createElement("div")
    foodSegment.classList.add("food")
    foodSegment.style.gridRowStart = foodCoordinates.fy
    foodSegment.style.gridColumnStart = foodCoordinates.fx
    game.append(foodSegment)
    
}

