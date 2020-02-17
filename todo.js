let lis = document.querySelectorAll("li");

for(let i=0;i<lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function () {
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click",function (){
     this.classList.toggle("done");
    }

    )
}
/**
 * Could be done this way using forEach loop and flat arrow.
  lis.forEach(node => {
    node.addEventListener("mouseover", () => {
        node.style.color = "green";
    });
    node.addEventListener("mouseout", () => {
        node.style.color = "black";
    });
})

 */
