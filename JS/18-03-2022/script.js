// console.log("hello")

let cars = document.querySelectorAll('.car');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');



document.addEventListener('keydown', event => {
    if (event.key == 'ArrowUp') {
        let move = red.style.bottom;
        move = move.substr(0, 3);
        move = Number(move);

        let move2 = blue.style.bottom;
        move2 = move2.substr(0, 3);
        move2 = Number(move2);

        red.style.bottom = move + 5 + 'px';
        blue.style.bottom = move2 + 5 + 'px';

    }
})

document.addEventListener('keydown', event => {
    if (event.key == 'ArrowDown') {
        let move = red.style.bottom;
        move = move.substr(0, 3);
        move = Number(move);

        let move2 = blue.style.bottom;
        move2 = move2.substr(0, 3);
        move2 = Number(move2);

        blue.style.bottom = move2 - 5 + 'px';
        red.style.bottom = move - 5 + 'px';

    }
})
