document.addEventListener('click', function(event) {
    var target = event.target
    
    markX(target);
});

function markX(element){
    if (element.classList.contains("cell") && element.innerText == ""){
        element.innerText = "X";
        opponentMove();
    }
    else {
        // Do nothing
    }
}

function opponentMove(){
    //computer opponent makes a move

    //Get all possibleMoves
    let elements = Array.from(document.querySelectorAll(".cell"));
    elements = elements.filter(function(el){
        return el.innerText == ""
    });
    
    let randomNo = randomInteger(0, elements.length);

    let selectedElement = elements[randomNo];

    selectedElement.innerText = "O";

    //Pick random element from possible moves
    //Mark that element as O
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getRandomMove(){
    // analyses boards and calculates the next move
}

function whoWon(){
    //analyses the lines and calculates the winner
}

function isGameFinished(){

}

function resetGame(){

}

