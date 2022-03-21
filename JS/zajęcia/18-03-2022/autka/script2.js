console.log('hello2')

let button = document.querySelector('button');
let street = document.querySelector('.street');


button.addEventListener('click', function btn(event) {
    let nowyDivek = document.createElement('div');
    nowyDivek.classList.add('bigDiv');
    console.log(nowyDivek);
    street.append(nowyDivek);

}
)