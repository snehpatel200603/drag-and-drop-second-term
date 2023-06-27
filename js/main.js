//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
    puzzlePiecesDiv = document.querySelector(".puzzle-pieces")
    dropZones = document.querySelectorAll(".drop-zone"); 
//console.log(theButtons);
//console.log(puzzleBoard);

let draggedPieces;

function changeBGImage() {
    //console.log("changeBGImage called");
    //url('../images/backGround0.jpg');
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`

    // bug fix 2 will go hear
    // will use for each loop and if statement
    // oi want ot loop through dropzones and check if there is?
    //check with firstChild 
    // if there is a child 
    // puzzlePieceDiv.appendChild(something needs to go hear )
}

function handleDragOver(e) {
    e.preventDefault();
    // thisd will prevent the default dragover behaviour
    //e is short for the event , could be e , evt as well
    console.log("draded over me");
}

function handleStartDrag() {
    console.log("Started dragging this piece:", this)
    draggedPieces = this
}

function handleDrop (e) {
    e.preventDefault();
    console.log("dorpped something on me");
    //this line moves the draged peace form the ;est sode of the board into ehatever dropzone we choose 
    /* BUG-FIX 1 hear we have given the event to solve the multiple drop bug so when we put any peace in drop area we do not get to put another drop peace to that same drop area
    this code fragment is used to determine whether there are one or more child elements and, if so, to stop the execution of the current function or block. */
    if(this.children.length >= 1){
        return;
      }
    this.appendChild(draggedPieces);
}



//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));