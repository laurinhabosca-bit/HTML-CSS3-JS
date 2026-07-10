const canvas = document.querySelector("gameCanva");
const ctx = canvas.getContext("2d");
/* fillRedct, fill, arc */
const startMenu = document.querySelector("menuGame");
const startBtn = document.querySelector("btn-start");

/* config. gerais */
const boxSize = 30;
const canvasSize = 600;
let snake = [];
let apple = {};

/* esquerda = left, direita = right, cima = up, baixo = down */
let direction = ""; 
/* flag */
let getInterval;

function initGame() {
    /* faz o menu sumir */
    startMenu.style.display = "none";
    /* coloca a tela de jogo */
    canvas.style.display = "block";

    /* a cabeça inicie no centro da tela */
    snake = [
        {
            x: 9 * boxSize,
            y: 9 * boxSize
        }
    ]
}

direction = "RIGHT"; 

/* desenhar a maçã na tela */
drawApple();

/*se aconteceu algum jogo anteriormente */
if(gameInterval) {
    /* delete os dados da seção*/
    clearInterval(gameInterval);

    gameInterval = setInterval(drawGame, 130)
}

function drawApple() {
    apple = {
        /* Math.floor(1.5) = 1 */
        x: Math.floor(
            /* Math,random "cospe" um valor aleatorio de 0 a 1 */
            Math.random() * (canvasSize / boxSize) * boxSize)
        y: Math.floor(
            Math.random() * (canvasSize / boxSize) * boxSize)
    }
}

/* adicionar "escutador de eventos"/ "secretario de eventos", o seu "executador/secretario" é quem informa. nos informa quando algum clique ou tecla foi pressionada */
/* keydown = tecla pressionada */
document.addEventListener("keydown",
    (event) => {
        let key = event.keyCode;

    const arrayKeys = [37, 38, 39, 40];

    if(arrayKeys.includes(key)) {
        /* previnir que uma tecla pressionada faça scrol da tela */
        event.preventDefault();
    }
    if(key === 38 && direction != "down") {
        direction = "UP"
    }else if(key === 37 && direction != "RIGHT") {
        direction = "LEFT";
    }else if(key === 39 && direction != "LEFT") {
        direction = "RIGHT";
    }else if(key === 40 && direction != "UP") {
        direction = "DOWN";
    }
)