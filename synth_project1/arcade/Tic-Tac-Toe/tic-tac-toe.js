/*

location of functions:

line 36: check for winner
line 131: alternate X and O and place in table
line 174: reset board

*/


let gameState = {};

function newBoard() {
    return [
        ["", "", "",
            "", "", "",
            "", "", ""],
    ];
};

function reset() {
    gameState.board = newBoard(),
        gameState.player = ['X', 'O'],
        gameState.turn = 0
    gameState.num = 1
    body.style.backgroundImage = 'radial-gradient(circle, white 25%, rgb(138, 138, 138) 82%)';
    result.style.display = 'block'
    result.innerText = ''
};

const boxes = document.getElementsByClassName('boxes');
const result = document.getElementById('alert');
const body = document.getElementsByTagName('body')[0];
const table = document.getElementsByTagName('table')[0];

// very roundabout and messy way of checking for the 8 winning patters and a tie...
function winner() {
    //col 1
    if (gameState.board[0] === 'X' && gameState.board[3] === 'X' && gameState.board[6] === 'X'
        || gameState.board[0] === 'O' && gameState.board[3] === 'O' && gameState.board[6] === 'O') {

        result.innerText = `The ${gameState.board[0]}s win!`
        table.classList.add('disabled')
        playAgain.style.display = 'flex'
        body.style.backgroundImage = 'linear-gradient(to bottom left, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
            if(result.innerText === "The Os win!"){
                body.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
            }

    }
    // col 2
    else if (gameState.board[1] === 'X' && gameState.board[4] === 'X' && gameState.board[7] === 'X'
        || gameState.board[1] === 'O' && gameState.board[4] === 'O' && gameState.board[7] === 'O') {

        result.innerText = `The ${gameState.board[1]}s win!`
        table.classList.add('disabled')
        playAgain.style.display = 'flex'
        body.style.backgroundImage = 'linear-gradient(to bottom left, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        if(result.innerText === "The Os win!"){
            body.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        }
    }
    // col 3
    else if (gameState.board[2] === 'X' && gameState.board[5] === 'X' && gameState.board[8] === 'X'
        || gameState.board[2] === 'O' && gameState.board[5] === 'O' && gameState.board[8] === 'O') {

        result.innerText = `The ${gameState.board[2]}s win!`
        table.classList.add('disabled')
        playAgain.style.display = 'flex'
        body.style.backgroundImage = 'linear-gradient(to bottom left, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        if(result.innerText === "The Os win!"){
            body.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        }
    }
    // row 1
    else if (gameState.board[0] === 'X' && gameState.board[1] === 'X' && gameState.board[2] === 'X'
        || gameState.board[0] === 'O' && gameState.board[1] === 'O' && gameState.board[2] === 'O') {

        result.innerText = `The ${gameState.board[0]}s win!`
        table.classList.add('disabled')
        playAgain.style.display = 'flex'
        body.style.backgroundImage = 'linear-gradient(to bottom left, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        if(result.innerText === "The Os win!"){
            body.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        }
    }
    // row 2
    else if (gameState.board[3] === 'X' && gameState.board[4] === 'X' && gameState.board[5] === 'X'
        || gameState.board[3] === 'O' && gameState.board[4] === 'O' && gameState.board[5] === 'O') {

        result.innerText = `The ${gameState.board[3]}s win!`
        table.classList.add('disabled')
        playAgain.style.display = 'flex'
        body.style.backgroundImage = 'linear-gradient(to bottom left, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        if(result.innerText === "The Os win!"){
            body.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        }
    }
    // row 3
    else if (gameState.board[6] === 'X' && gameState.board[7] === 'X' && gameState.board[8] === 'X'
        || gameState.board[6] === 'O' && gameState.board[7] === 'O' && gameState.board[8] === 'O') {

        result.innerText = `The ${gameState.board[6]}s win!`
        table.classList.add('disabled')
        playAgain.style.display = 'flex'
        body.style.backgroundImage = 'linear-gradient(to bottom left, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        if(result.innerText === "The Os win!"){
            body.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        }
    }
    // diag 1
    else if (gameState.board[0] === 'X' && gameState.board[4] === 'X' && gameState.board[8] === 'X'
        || gameState.board[0] === 'O' && gameState.board[4] === 'O' && gameState.board[8] === 'O') {

        result.innerText = `The ${gameState.board[0]}s win!`
        table.classList.add('disabled')
        playAgain.style.display = 'flex'
        body.style.backgroundImage = 'linear-gradient(to bottom left, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        if(result.innerText === "The Os win!"){
            body.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        }
    }
    // diag 2
    else if (gameState.board[2] === 'X' && gameState.board[4] === 'X' && gameState.board[6] === 'X'
        || gameState.board[2] === 'O' && gameState.board[4] === 'O' && gameState.board[6] === 'O') {

        result.innerText = `The ${gameState.board[2]}s win!`
        table.classList.add('disabled')
        playAgain.style.display = 'flex'
        body.style.backgroundImage = 'linear-gradient(to bottom left, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        if(result.innerText === "The Os win!"){
            body.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101),rgb(39, 177, 39),rgb(110, 185, 255),rgb(173, 60, 254),rgb(255, 191, 255)';
        }
    }
    // tie
    else if (gameState.turn === 9) {

        result.innerText = "Nice try but it's a tie!"
        table.classList.add('disabled')
        playAgain.style.display = 'flex'
        body.style.backgroundImage = 'linear-gradient(to bottom, rgb(250, 84, 84),rgb(253, 195, 88),rgb(243, 243, 101)';

    }

};


function gamePlay() {

    if(event.target.innerText === ""){
    gameState.turn++
    }
 
    let coordinates = event.target.getAttribute('data-coordinates')
    const [x] = coordinates

    if (gameState.num == 1) {
        event.target.innerText = gameState.player[0];
        event.target.classList.add('disabled');
        gameState.num = 0

    } else if (gameState.num == 0) {
        event.target.innerText = gameState.player[1];
        event.target.classList.add('disabled');
        gameState.num = 1
    }

    gameState.board[x] = event.target.innerText

    winner()

};

table.addEventListener('click', gamePlay)

// change color of board (can only select going down the list, can't go back to a previous color)
let chosenColor = 'salmon'
const options = document.getElementsByTagName('select')[0];
const tr = document.getElementsByClassName('row');

// default color
for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add(chosenColor)
};

function color(event) {
    chosenColor = event.target.value

    for (let i = 0; i < tr.length; i++) {

        tr[i].classList.add(chosenColor)
    }
};

options.addEventListener('change', color)

// reset game button
const playAgain = document.getElementById('play-again')

playAgain.addEventListener('click', function (event) {

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = ''
        boxes[i].classList.remove('disabled')
    
    }

    result.style.display = 'none'
    table.classList.remove('disabled')
    playAgain.style.display = 'none'
    reset()

});

reset()


