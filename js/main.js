console.log("JS file conneccted");



const theButtons = document.querySelectorAll("#buttonHolder img"),
puzzleboard = document.querySelector(".puzzle-board");
//console.log(theButtons);
console.log(puzzleboard);

function changeBGImage() {
    //console.log("changeBGImage calleed");
    //url('../images/backGround0.jpg');
    puzzleboard.style.backgroundImage = `url(images/backGround${this.id}.jpg)` 
}


//event listener
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach()