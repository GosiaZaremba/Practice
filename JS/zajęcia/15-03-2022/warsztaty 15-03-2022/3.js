var arr = [{ number: 13 }, { number: 23 }, { number: 12 }, { number: 45 }, { number: 22 }]

function printEvenNumbers(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].number % 2 === 0) {
            evenNumbers.push(array[i].number);

        }
    }
    return evenNumbers;
};

console.log(printEvenNumbers(arr));