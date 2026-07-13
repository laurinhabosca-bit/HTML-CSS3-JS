const canvas = document.querySelector(".gameCanva");
const ctx = canvas.getContext("2d");
/* fillRedct, fill, arc */
const startMenu = document.querySelector(".menuGame");
const startBtn = document.querySelector("#btn-start");

/* config. gerais */
const boxSize = 30;
const canvasSize = 600;
const bgCanvas = "#cc40b5"; // cor do fundo do jogo
const snakeHead = "#4049cc";
const snakeBody = "#0d6434";
const appleColor = "#18688d";
let snake = [];
let apple = {};

/* esquerda = left, direita = right, cima = up, baixo = down */
let direction = ""; 
/* flag */
let gameInterval;

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
    direction = "RIGHT"; 

    /* desenhar a maçã na tela */
    drawApple();

    /*se aconteceu algum jogo anteriormente */
    if(gameInterval) {
        /* delete os dados da seção*/
        clearInterval(gameInterval);
    }
    gameInterval = setInterval(drawGame, 130)

}

function drawApple() {
    apple = {
        /* Math.floor(1.5) = 1 */
        x: Math.floor(
            /* Math,random "cospe" um valor aleatorio de 0 a 1 */
            Math.random() * (canvasSize / boxSize))  * boxSize,
        y: Math.floor(
            Math.random() * (canvasSize / boxSize) ) *boxSize
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
        if(key === 38 && direction != "DOWN") {
            direction = "UP"
        }else if(key === 37 && direction != "RIGHT") {
            direction = "LEFT";
        }else if(key === 39 && direction != "LEFT") {
            direction = "RIGHT";
        }else if(key === 40 && direction != "UP") {
            direction = "DOWN";
        }
        }
)

function drawGame() {
    // limpa o frame anterior (fundo)
    ctx.fillStyle = bgCanvas;
    ctx.fillRect(0, 0, canvasSize, canvasSize);
    // fillRect(x, y, width_final, heigth_final)

    // rendenizar a cobra varrendo o Array
    let tamanho_cobra = snake.length;
    for (let i = 0; i < tamanho_cobra; i++) {
        // a cabeça é mais escura que o corpo
        ctx.fillStyle = (i === 0) ? snakeHead : snakeBody;

        ctx.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
        // cria um "espaço" entre os quadrados da cobra, desenhando um contorno de 1px
        ctx.strokeStyle = bgCanvas;
        ctx.strokeRect(snake[i].x, snake[i].y, boxSize, boxSize);
    }
     // desenha a maça (formato circular)
     ctx.fillStyle = appleColor; // vermelho maça
     // beginPath apaga da memoria da ultima maça, caso contrario...
     ctx.beginPath();
     ctx.arc(apple.x + boxSize / 2, apple.y + boxSize / 2,  boxSize/2.2, 0, Math.PI * 2);

     ctx.fill(); // manda desenhar o que foi definido no beginPath

     // LOGICA DO ARRAY: posiçao atual da cabeça
     let snakeX = snake[0].x;
     let snakeY = snake[0].y;

     // calcula onde sera a NOVA cabeça
     if (direction == "LEFT") snakeX -= boxSize;
     if (direction == "UP") snakeY -= boxSize;
     if (direction == "RIGHT") snakeX += boxSize;
     if (direction == "DOWN") snakeY += boxSize;

     // verifica colisoes com paredes ou com o proprio corpo
     if (snakeX < 0 || snakeX >= canvasSize || snakeY < 0 || snakeY >= canvasSize || checkCollision(snakeX, snakeY, snake)) {
        clearInterval(gameInterval);
        alert("Fim de jogo! A cobra comeu " + (snake.length - 1) + " maçãs.");
        startMenu.style.display = "block";
        canvas.style.display = "none";
        return;
     }

     // || = or

     // LOGICA DO ARRAY: comer a maça ou andar
     if (snakeX === apple.x && snakeY === apple.y) {
        drawApple();
     } else {
        // se nao comeu, removemos  a cauda (ultimo elemento do array)
        snake.pop();
     }

     // cria o objeto da nova cabeça e insere no indice 0 do array 
     let newHead = { x: snakeX, y: snakeY};
     snake.unshift(newHead);

     // verifica se a cabeça bateu em algum elemento do proprio corpo

}

function checkCollision(headX, headY, array) {
    for (let i = 0; i < array.length; i++) {
        if (headX == array[i].x && headY == array[i].y) {
            return true;
        }
    }
    return false;
}

// evento de clique para iniciar

startBtn.addEventListener("click", initGame);
