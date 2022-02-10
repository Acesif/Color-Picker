const btn = document.getElementById("btn");
const section = document.getElementById("section");
const color = document.querySelector(".color");

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener("click", function(){
    let randHex = '';
    for (let index = 0; index < 6; index++) {
        randHex += hex[Math.floor(Math.random()*hex.length)];
    }
    color.textContent = `#${randHex}`;
    section.style.backgroundColor = `#${randHex}`;
})