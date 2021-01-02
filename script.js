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
    const list = document.getElementsByClassName('grid-item');
    divHover(list);
}

function divHover(items) {
    for (i = 0; i < items.length; i++) {
        let div = items[i];
        div.addEventListener('mouseenter', () => {
            div.style.boxShadow = "0 0 15px #FFF";
            div.style.backgroundColor = document.getElementById("color-picker").value;
        });
    };
}

function clearDiv() {
    const items = document.getElementsByClassName('grid-item');
    for (i = 0; i < items.length; i++) {
        let div = items[i];
        div.style.backgroundColor = "#FFF";
        div.style.boxShadow = "none";
    };
}