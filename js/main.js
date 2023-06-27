//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
// this code is used for all the puzzele piece in the div nad it will help to chnage the puzzele peaces with the change of the background change 
const puzzlePiecesDiv = document.querySelector(".puzzle-pieces")
const dropZones = document.querySelectorAll(".drop-zone"); 
//console.log(theButtons);
//console.log(puzzleBoard);

let draggedPieces;

function changeBGImage() {
    //console.log("changeBGImage called");
    //url('../images/backGround0.jpg');
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`

    // bug fix 2 will go hear
    // Reset puzzle by removing dropped pieces from drop zones
    dropZones.forEach((zone) => {
        if (zone.firstChild) {
          const piece = zone.firstChild;
          puzzlePiecesDiv.appendChild(piece);
          piece.classList.remove("dropped");
        }
      });
    // hera the code exicute the chnage of the images of the puzzele peaces 
    //In summary, this code loops through an array of puzzle pieces, replaces any digit in their image source URLs with the id of the current context, and updates the image source accordingly.
      for (let i = 0; i < puzzlePieces.length; i++) {
        const piece = puzzlePieces[i];
        const originalPieceImage = piece.getAttribute('src');
        const newPieceImage = originalPieceImage.replace(/\d/g, this.id);
        piece.src = newPieceImage;
    }
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
// this function is added to make the reset button work and to reset the whole puzzele
function resetPuzzle() {
    // Reset puzzle by reparenting the puzzle pieces to the puzzlePiecesDiv
    puzzlePieces.forEach((piece) => {
      piece.classList.remove("dropped");
      piece.parentNode.removeChild(piece);
      puzzlePiecesDiv.appendChild(piece);
    });
  }



//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

// this is for the event to add the reset button ad and this will resert all the puzzele peaces when the code is exicuted
const resetButton = document.getElementById("resetBut");
resetButton.addEventListener("click", resetPuzzle);