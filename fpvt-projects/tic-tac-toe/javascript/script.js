'use strict'
console.log('Execute Program'); //Check if Script is working

//VARIABLES
const modalDiv = document.querySelector('#modal-bg');
const modalExit = document.querySelector('#modal-exit-button');
const boardCells = document.querySelectorAll('.cell');
const prevBtn = document.querySelector('.Previous');
const nextBtn = document.querySelector('.Next')
const resetBtn = document. querySelector('.Reset')
const boardGame = document.querySelector('#actual-board')
let player = true;
let gameHistory = 0;
let drawCounter = 0;

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
        cellData.innerHTML = 'O';
        playerMark = 'O';
    } else {
        cellData.innerHTML = 'X';
        playerMark = 'X';
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
                    return console.log(`Player ${playerMark} Wins!`)
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
        //document
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
    player = true;
    gameHistory = 0;
    drawCounter = 0;


    gameState = []
    boardGame.innerHTML = '';

    for(let i = 0; i < 9; i++) {
        let div = document.createElement('div')

             

            div.innerText = ''
            div.classList.add('cell');
            div.addEventListener('click', selectCell);
            console.log(div)
            boardGame.append(div)
    }
}



//CLICK EVENTS
boardCells.forEach(boardCell => boardCell.addEventListener('click', selectCell));
prevBtn.addEventListener('click', prevMove);
nextBtn.addEventListener('click', nextMove);
resetBtn.addEventListener('click', resetBoard);

















































// //VARIABLES
// const boardCells = document.querySelectorAll('.cell');
// let playerX = true;

// //BOARD GAME STATE WHEN STARTING A PLAY


// //Handle Click
// const selectCell = (e) => {
//     console.log(e.target);
//     const cellInfo = e.target;
//     const cellIndex = parseInt(cellInfo.getAttribute('data-section-index'));
//     console.log(cellIndex);
//     cellInfo.innerHTML = 'O';

//     Prevent if game not running
//     for ( const i = 0; i < gameState.length; i++) {
//         const gameState = gameState[i]
//         for ( const j = 0; j <gameState.length; j++){
//             console.log(i + j);
//         }
//     }
//     checkWin();
// }


// for ( let i = 0; i < gameState.length; i++) {
//     let gameStates = gameState[i]
//     for ( let j = 0; j <gameStates.length; j++){
//         console.log(`[${i}][${j}] = ${gameStates[j]}`);
//     }
// }

// //check winState
// const checkWin = () => {
//     for( let i = 0; i < boardCells.length; i++) {
//         for ( let j = 0; j < winState.length; j++) {
//             for ( let x = 0; x < winState[j].length; x++){
//                 const cell = boardCells[winState[j][0]];
//                 console.log(cell.getAttribute('data-section-index'));
//             }
//         }
//     }
// }


// //Target
// const cellClicked = (e) => {
//     console.log(e.target);
// }


// boardCells.forEach(boardCell => boardCell.addEventListener('click', selectCell));