let numSquares= 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton= document.querySelector("#reset");
let easyButton = document.querySelector("#easyBtn");
let hardButton = document.querySelector("#hardBtn");


easyButton.addEventListener("click",function () {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numSquares =3;
    //generate random colors
    colors = generateRandomColors(numSquares);
    //pick a new color from array
    pickedColor = pickColor();
    //change color display to match new color
    colorDisplay.textContent= pickedColor;
    //change colors of six squares
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor =colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }

});
hardButton.addEventListener("click",function () {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares=6
    colors = generateRandomColors(numSquares);
    //pick a new color from array
    pickedColor = pickColor();
    //change color display to match new color
    colorDisplay.textContent= pickedColor;
    //change colors of six squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor =colors[i];
        squares[i].style.display = "block";
        }
});

resetButton.addEventListener("click",function(){
    //generate random colors
    colors =generateRandomColors(numSquares);
    //pick a new color from array
    pickedColor = pickColor();
    //change color display to match new color
    colorDisplay.textContent= pickedColor;
    this.textContent="New Colors";
    messageDisplay.textContent="";
    //change colors of six squares
    for (let i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="#steelblue";
});
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (pickedColor === clickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent="Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        arr.push(randomColor(i));
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a red
    r = Math.floor(Math.random() * 256);
    //pick a green
    g = Math.floor(Math.random() * 256);
    // pick a blue
    b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}