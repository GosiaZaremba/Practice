// console.log("hello")

let cars = document.querySelectorAll('.car');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let baton = document.querySelector('button')
let moveBy = 5;

window.addEventListener('load', () => {
    red.style.bottom = '190px';
    red.style.left = '220px';
    blue.style.bottom = '100px';
    blue.style.left = '220px'
})


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

window.addEventListener('keydown', nonBtn);



baton.addEventListener('click', () => {

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
})
