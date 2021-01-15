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
    checkEnhancement();
    checkGridlines();
}

function checkGridlines() {
    if (document.getElementById("gridlines").checked === true) {
        let divs = document.getElementsByClassName("grid-item");
        for (i = 0; i < divs.length; i++) {
            divs[i].style.boxShadow = "inset 0px 0px 0px 2px #9E101C";
            divs[i].style.boxSizing = "border-box";
        }
    }

    else if (document.getElementById("gridlines").checked === false) {
        removeGridlines();
    }
}

function removeGridlines() {
    let divs = document.getElementsByClassName("grid-item");
        for (i = 0; i < divs.length; i++) {
            divs[i].style.boxShadow = "none";
        }
}

function checkEnhancement() {
    if (document.getElementById("enhancement").checked === true) {
        let divs = document.getElementsByClassName("grid-item");
        for (i = 0; i < divs.length; i++) {
            divs[i].style.boxShadow = "0 0 15px 0 #FFF";
        }
    }

    else if (document.getElementById("enhancement").checked === false) {
        removeEnhancement();
    }
}

function removeEnhancement() {
    let divs = document.getElementsByClassName("grid-item");
        for (i = 0; i < divs.length; i++) {
            divs[i].style.boxShadow = "none";
        }
}

function divHover(option) {
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
}

function clearDiv() {
    const items = document.getElementsByClassName('grid-item');
    for (i = 0; i < items.length; i++) {
        let div = items[i];
        div.style.backgroundColor = "#FFF";
    };
}