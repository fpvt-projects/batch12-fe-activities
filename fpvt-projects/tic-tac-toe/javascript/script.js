'use strict'
console.log('Execute Program'); //Check if Script is working

//VARIABLES    
// const backgroundM = document.querySelector('#bgtune')
const buttonSet = document.querySelector('#button-wrapper')
const reviewBtn = document.querySelector('#review-button');
const winnerHeader = document.querySelector('.winner-header');
const reviewHistory = document.querySelector('.winner-board-wrapper');
const playerX = document.querySelector('#playerX');
const playerO = document.querySelector("#playerO");
const playerWrapper = document.querySelector('#player-selection-wrapper');
const boardWrapper = document.querySelector('#board-wrapper');
const boardCells = document.querySelectorAll('.cell');
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const resetBtn = document. querySelector('.reset');
const boardGame = document.querySelector('#actual-board');
let player = null;
let gameHistory = 0;
let drawCounter = 0;

//TEST-AREA-FOR-VARIABLES-AND-FUNCTIONS
backgroundM.style.display = 'none';


//PLAYER SELECTION
function playerSelection (mark)  {
    if(mark === 'X') {
        player = true;
    } else {
        player = false;
    }
    playerWrapper.classList.add('hide');
    // playerWrapper.style.display = 'none';
    boardWrapper.classList.add('show');

    if(player === true) {
        document.querySelector('.X').style.background = 'linear-gradient(135deg, #71b7e6, #9b59b6)';
        document.querySelector('.O').style.background = 'none';
    } else {
        document.querySelector('.X').style.background = 'none';
        document.querySelector('.O').style.background = 'linear-gradient(135deg, #71b7e6, #9b59b6)';
    }
    // backgroundM.play();
}

//WINNING CONDITIONS AND COMBINATIONS
const winState = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4 ,7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//BOARD GAME STATE
let gameState = [] //Empty array where we will push game history that makes it a 2D array

//FUNCTIONS
const selectCell = (e) => { 
    // console.log(e.target) //Check event target data
    const cellData = e.target;
    let playerMark;
    // console.log(cellIndex); //Check index of selected or clicked target
    player = !player;

    if(player === true) {
        document.querySelector('.X').style.background = 'linear-gradient(135deg, #71b7e6, #9b59b6)';
        document.querySelector('.O').style.background = 'none';
    } else {
        document.querySelector('.X').style.background = 'none';
        document.querySelector('.O').style.background = 'linear-gradient(135deg, #71b7e6, #9b59b6)';
    }

    if(player === true) {
        cellData.innerHTML = 'O';
        cellData.style.color = 'green';
        playerMark = 'O';
    } else {
        cellData.innerHTML = 'X';
        playerMark = 'X';
        cellData.style.color = 'red';
    }

    classifyWinnner(playerMark);
    StoreMove(cellData);
}

//Functions that Stores the Moive in an Array the pushes the move in gameState
const StoreMove = () => {
    let row1 = []
    let row2 = []
    let row3 = []
    // console.log(cellIndex) //check in index is still passed
    boardCells.forEach((cell, cellIndex) => {
        // console.log(cell, cellIndex);
        if(cellIndex < 3){
            row1.push(cell.innerText);
        } else if (cellIndex >= 3 && cellIndex <=5) {
            row2.push(cell.innerHTML);
        } else if (cellIndex >= 6 && cellIndex <= 8) {
            row3.push(cell.innerText);
        }
    })
    gameState.push([row1, row2, row3]);
    gameHistory = gameState.length-1;
    // console.log(gameState); //Checking if gameState is storing
}


//Checks the GameState for possible winning combinations
const classifyWinnner = (playerMark) => {
    for (let i = 0; i < boardCells.length; i++) {
        for (let j = 0; j < winState.length; j++) { 
            for (let k = 0; k < winState[j].length; k++) {
                const tile1 = boardCells[winState[j][0]].innerText 
                const tile2 = boardCells[winState[j][1]].innerText 
                const tile3 = boardCells[winState[j][2]].innerText
                if (tile1 === playerMark && tile2 === playerMark && tile3 === playerMark) {
                    // reviewHistory.style.display = 'flex';
                    reviewHistory.classList.remove('hide');
                    reviewHistory.classList.add('show');
                    winnerHeader.innerHTML = `Player ${playerMark} Wins!`;
                    console.log('Code reached here')
                    boardCells.forEach(boardCell => boardCell.removeEventListener('click', selectCell));
                    return;
                } 
            }
        }
    }
    boardCells.forEach(cell => {
        if(cell.innerText != '') {
            drawCounter++
        }
    })
    console.log(drawCounter === 9);
    if(drawCounter === 9) {
        console.log(`Draw!`);
        reviewHistory.classList.remove('hide');
        reviewHistory.classList.add('show');
        // reviewHistory.style.display = 'flex';
        winnerHeader.innerHTML = `Draw!`;
    }
    drawCounter = 0;
    // console.log(drawCounter);
}

function prevMove () {
    // gameState[gameHistory];
    // console.log(gameHistory)
    // console.log(gameState[gameHistory])
    if(gameHistory > 0){
        gameHistory -= 1;
        loadTiles(gameHistory);
    }
    console.log(gameState);
    console.log(gameHistory);
}

function nextMove() {
    if (gameHistory >= 0 && gameHistory < gameState.length-1){
        gameHistory += 1;
        loadTiles(gameHistory);
    }
}

function loadTiles (index) {
    boardGame.innerHTML = '';
    for (let i = 0; i < gameState[index].length; i++) {
        for (let j = 0; j < gameState[index][i].length; j++) {
            let div = document.createElement('div')
            div.innerText = gameState[index][i][j]
            div.classList.add('cell');
            // div.addEventListener('click', selectCell);
            console.log(div)
            boardGame.append(div)
        }
    }

    console.log(boardCells);
}

function resetBoard() {
    location.reload();
    // player = true;
    // gameHistory = 0;
    // drawCounter = 0;


    // gameState = []
    // boardGame.innerHTML = '';

    // for(let i = 0; i < 9; i++) {
    //     let div = document.createElement('div')

             

    //         div.innerText = ''
    //         div.classList.add('cell');
    //         div.addEventListener('click', selectCell);
    //         console.log(div)
    //         boardGame.append(div)
    // }
}

function reviewFunction() {
    reviewHistory.classList.remove('show');
    reviewHistory.classList.add('hide');
    buttonSet.style.display = 'flex';
}



//CLICK EVENTS
playerX.addEventListener('click', function () {
    playerSelection('X');
});
playerO.addEventListener('click',function () {
    playerSelection('O');
});
boardCells.forEach(boardCell => boardCell.addEventListener('click', selectCell));
prevBtn.addEventListener('click', prevMove);
nextBtn.addEventListener('click', nextMove);
resetBtn.addEventListener('click', resetBoard);
reviewBtn.addEventListener('click', reviewFunction);