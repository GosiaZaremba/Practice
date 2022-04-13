let numbers = [2, 4, 5];

const square = (numbers) => {

    let squared = numbers.map((el) => el * el);
    console.log(squared)
    let sum = squared.reduce((curr, next) => curr + next)
    let average = sum / numbers.length

    return average

}

console.log(square(numbers));