// console.log("hello")

let cars = document.querySelectorAll('.car');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let baton = document.querySelector('.attach');
let baton2 = document.querySelector('.detach')
let moveBy = 5;

const start = () => {
    red.style.bottom = '190px';
    red.style.left = '220px';
    blue.style.bottom = '100px';
    blue.style.left = '220px'
}


const nonBtn = event => {

    if (event.key == 'ArrowUp') {
        red.style.bottom = parseInt(red.style.bottom) + moveBy + 'px';

    }
    else if (event.key == 'ArrowDown') {
        red.style.bottom = parseInt(red.style.bottom) - moveBy + 'px';

    }
    else if (event.key == 'ArrowLeft') {
        red.style.left = parseInt(red.style.left) - moveBy + 'px';

    }
    else if (event.key == 'ArrowRight') {
        red.style.left = parseInt(red.style.left) + moveBy + 'px';
    }
};



const withBtn = () => {
    red.style.bottom = '190px';
    red.style.left = '220px';

    window.removeEventListener('keydown', nonBtn);

    window.addEventListener('keydown', event => {

        if (event.key == 'ArrowUp') {
            red.style.bottom = parseInt(red.style.bottom) + moveBy + 'px';
            blue.style.bottom = parseInt(blue.style.bottom) + moveBy + 'px';
        }
        else if (event.key == 'ArrowDown') {
            red.style.bottom = parseInt(red.style.bottom) - moveBy + 'px';
            blue.style.bottom = parseInt(blue.style.bottom) - moveBy + 'px';
        }
        else if (event.key == 'ArrowLeft') {
            red.style.left = parseInt(red.style.left) - moveBy + 'px';
            blue.style.left = parseInt(blue.style.left) - moveBy + 'px';
        }
        else if (event.key == 'ArrowRight') {
            red.style.left = parseInt(red.style.left) + moveBy + 'px';
            blue.style.left = parseInt(blue.style.left) + moveBy + 'px';
        }
    })
}


const reset = () => {
    start();
    baton.removeEventListener('click', withBtn);
};



window.addEventListener('load', start)
window.addEventListener('keydown', nonBtn);
baton.addEventListener('click', withBtn);
baton2.addEventListener('click', reset);
