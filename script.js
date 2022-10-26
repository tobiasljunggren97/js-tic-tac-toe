const X_CLASS = 'x';
const CIRCLE_CLASS = 'o';
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let circleTurn

startGame();

function startGame(){
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: true});
    })
    circleTurn = false;
    setBoardHoverClass();


}



function handleClick(e){
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
        //place mark
    placeMark(cell, currentClass);
    //check for win
    if(checkWin(currentClass));
    //check draw
    //switch turns
    swapTurns();
    setBoardHoverClass();
}


function setBoardHoverClass(){
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }


}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn
}