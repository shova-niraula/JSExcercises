
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver= false;
var winningScore=5;
var h2Display= document.querySelector("h2");
var reset = document.querySelector("#reset");

p1Button.addEventListener("click",function(){
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore){
            p1Display.style.color="green";
            h2Display.textContent = "Game over!";
            gameOver=true;
        }
        p1Display.textContent = p1Score;
    }
    });



p2Button.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.style.color="green";
            h2Display.textContent ="Game over!";
            gameOver=true;
        }
    }
    p2Display.textContent= p2Score;
});
reset.addEventListener("click",function(){
   p1Display.textContent = 0;
   p2Display.textContent = 0;
   p1Display.style.color="black";
   p2Display.style.color="black";
   h2Display.textContent="";
   gameOver=0;

});