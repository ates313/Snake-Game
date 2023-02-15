const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const changeDirection = (e) => {
    if(e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
}

const initGAME = () => {
    let htmlMarkup = `<div class="food"  style="grid-area: ${foodY} / ${foodX}"></div>`;
    

    if(snakeX === foodX && snakeY === foodY) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]);
        console.log(snakeBody);
    }


    snakeX += velocityX;
    snakeY += velocityY;


    for (let index = 0; index < snakeBody.length; index++) {
        htmlMarkup += `<div class="head"  style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        
    }
    
    playBoard.innerHTML = htmlMarkup;
}

changeFoodPosition();
setInterval(initGAME, 125);
document.addEventListener("keydown", changeDirection);