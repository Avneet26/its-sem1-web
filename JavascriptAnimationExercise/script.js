const background = document.querySelector(".background-container");
const mainBox = document.querySelector(".main-box");
let id;

function startAnimation() {
    id = setInterval(move, 1);
}

function move() {
    const boxTop = parseInt(getComputedStyle(mainBox).top, 10);
    console.log('move')
    if (boxTop > 0) {
        mainBox.style.top = (boxTop - 1) + 'px';
    } else {
        clearInterval(id);
    }
}