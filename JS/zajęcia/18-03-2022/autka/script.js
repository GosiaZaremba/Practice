// console.log("hello")

let cars = document.querySelectorAll('.car');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let baton = document.querySelector('.attach');
let baton2 = document.querySelector('.detach')

let moveBy = 5;
let isAttached = false;

const setStartPosition = () => {
    red.style.bottom = '190px';
    red.style.left = '220px';
    blue.style.bottom = '100px';
    blue.style.left = '220px'
}

const onAttachButton = () => {
    setStartPosition();
    isAttached = true;
};

const onReset = () => {
    setStartPosition();
    isAttached = false;
};

const processKey = event => {

    if (event.key == 'ArrowUp') {
        red.style.bottom = parseInt(red.style.bottom) + moveBy + 'px';
        if (isAttached) {
            blue.style.bottom = parseInt(blue.style.bottom) + moveBy + 'px';
        }
    }
    else if (event.key == 'ArrowDown') {
        red.style.bottom = parseInt(red.style.bottom) - moveBy + 'px';
        if (isAttached) {
            blue.style.bottom = parseInt(blue.style.bottom) - moveBy + 'px';
        }
    }
    else if (event.key == 'ArrowLeft') {
        red.style.left = parseInt(red.style.left) - moveBy + 'px';
        if (isAttached) {
            blue.style.left = parseInt(blue.style.left) - moveBy + 'px';
        }
    }
    else if (event.key == 'ArrowRight') {
        red.style.left = parseInt(red.style.left) + moveBy + 'px';
        if (isAttached) {
            blue.style.left = parseInt(blue.style.left) + moveBy + 'px';
        }
    }
};

window.addEventListener('keydown', processKey);
baton.addEventListener('click', onAttachButton);
baton2.addEventListener('click', onReset);
window.addEventListener('load', setStartPosition);
