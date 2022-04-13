//Use the map() function with arrow notation => to multiply each number by 10 and return the result.

let list = [1, 2, 3, 4, 5, 6, 7, 8];

const multiplyArrayBy10 = (arr) => {

    let multipliedArray = arr.map((el) => el * 10)
    return multipliedArray;
}

console.log(multiplyArrayBy10(list))