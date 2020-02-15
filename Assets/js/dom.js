var button= document.querySelector("button");
var paragraph=document.querySelector("#buttonclick");
document.querySelector("UL").addEventListener("click",function(){
    console.log("You clicked he UL!");
});
button.addEventListener("click",function() {
    paragraph.textContent ="Someone Clicked the button!";
});