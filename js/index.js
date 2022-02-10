const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bgc = document.getElementById("section")

const colors = ["red", "green", "blue", "yellow","orange","violet","cyan","magenta"];
btn.addEventListener("click", function(){
    const randNum = Math.round(Math.random()*colors.length);
    bgc.style.backgroundColor = colors[randNum];
    color.textContent = colors[randNum];
})