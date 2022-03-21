var arr = [13, 23, 12, 45, 22, 48, 66, 100]

function printEvenNumbers(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);

        }
    }
    return evenNumbers;
};

console.log(printEvenNumbers(arr));