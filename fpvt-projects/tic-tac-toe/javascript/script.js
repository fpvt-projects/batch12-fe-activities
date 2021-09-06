'use strict'
console.log('Execute Program'); //Check if Script is working

//VARIABLES
const modalDiv = document.querySelector('#modal-bg');
const modalExit = document.querySelector('#modal-exit-button');
const boardCells = document.querySelectorAll('.cell');
let player = true;

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
let gameState = [
    ['','',''],
    ['','',''],
    ['','','']
];


//FUNCTIONS
const selectCell = (e) => { 
    // console.log(e.target) //Check event target data
    const cellData = e.target;
    const cellIndex = parseInt(cellData.getAttribute('data-section-index'));
    console.log(cellIndex); //Check index of selected or clicked target
    player = !player;
    if(player === true) {
        cellData.innerHTML = 'O';
    } else {
        cellData.innerHTML = 'X';
    }
    StoreMove(cellData);
}

const StoreMove = (cellInfo) => {
    let row1 = []
    let row2 = []
    let row3 = []
    const cellIndex = parseInt(cellInfo.getAttribute('data-section-index'));
    console.log(cellIndex) //check in index is still passed

    if(cellIndex < 3) {
        row1.push()
    }
    
}

//CLICK EVENTS
boardCells.forEach(boardCell => boardCell.addEventListener('click', selectCell));


















































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

//     //Prevent if game not running
//     // for ( const i = 0; i < gameState.length; i++) {
//     //     const gameState = gameState[i]
//     //     for ( const j = 0; j <gameState.length; j++){
//     //         console.log(i + j);
//     //     }
//     // }
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