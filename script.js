// To-Do:  Change background? Mobile version?

let tool = "black";

function createDiv(num) {
    let newnum = Math.pow(num, 2);
    for (i = 0; i < newnum; i++) {
        let item = document.createElement('div');
        item.className = "grid-item";
        grid = document.getElementById('grid');
        grid.appendChild(item);
        grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    }
    clearDiv();
    divHover(tool);
    addGridlines();
    addEnhancement();
}

function addNone() {
    let divs = document.getElementsByClassName("grid-item");
    for (i = 0; i < divs.length; i++) {
        divs[i].style.boxShadow = "initial";
    }
}

function addGridlines() {
    if (document.getElementById("gridlines").checked === true) {
        let divs = document.getElementsByClassName("grid-item");
        for (i = 0; i < divs.length; i++) {
            divs[i].style.boxShadow = "inset 0px 0px 0px 2px #9E101C";
            divs[i].style.boxSizing = "border-box";
        }
    }
}

function addEnhancement() {
    if (document.getElementById("enhancement").checked === true) {
        let divs = document.getElementsByClassName("grid-item");
        for (i = 0; i < divs.length; i++) {
            divs[i].style.boxShadow = "0 0 15px 0 #FFF";
        }
    }
}

function divHover(option) {
    console.log(option);
    const items = document.getElementsByClassName('grid-item');
    for (i = 0; i < items.length; i++) {
        let div = items[i];
        div.addEventListener('mouseover', () => {
            if (option === "color") {div.style.backgroundColor = document.getElementById("color-picker").value;}
            else if (option === "black") {div.style.backgroundColor = "#000";}
            else if (option === "transparent") {div.style.backgroundColor = "transparent";}
            else if (option === "warm") {div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;}
            else if (option === "cool") { div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 30%)`;}
            else if (option === "erase") {div.style.backgroundColor = "#FFF";}
        });
    };
    tool = option; 
}

function clearDiv() {
    const items = document.getElementsByClassName('grid-item');
    for (i = 0; i < items.length; i++) {
        let div = items[i];
        div.style.backgroundColor = "#FFF";
    };
}