let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let container = document.getElementById("container");
let change = document.getElementById("name");

function color1(){
    container.style.background = "#e0e0e0";
    change.textContent = "#e0e0e0";
}

function color2(){
    container.style.background = "#6fcf97";
    change.textContent = "#6fcf97";
}

function color3(){
    container.style.background = "#56ccf2";
    change.textContent = "#56ccf2";
}

function color4(){
    container.style.background = "#bb6bd9";
    change.textContent = "#bb6bd9";
}



button1.addEventListener("click",color1);
button2.addEventListener("click",color2);
button3.addEventListener("click",color3);
button4.addEventListener("click",color4);