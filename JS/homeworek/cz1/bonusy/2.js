var myArray = [5, 3, 7, 16, 12];

//1
function sum(myArray) {
    let sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i];
    }
    return sum;
}
let mySum = sum(myArray);
console.log(mySum);

//2

function ArrayAvg(mySum, myArray) {
    return mySum / myArray.length;
}
let myArrayAvg = ArrayAvg(mySum, myArray);
console.log(myArrayAvg);

//3
function multi(myArray) {
    let myArrayMulti = 1;
    for (var i = 0; i < myArray.length; i++) {
        myArrayMulti = myArrayMulti * myArray[i];
    }
    return myArrayMulti;
}
let myArrayMyMulti = multi(myArray);
console.log(myArrayMyMulti);

//4

function EvenNumbers(myArray) {
    let myArrayEven = [];
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 === 0) {
            myArrayEven.push(myArray[i]);
        }
    }
    return myArrayEven;
}
function calculateAvg(myArray) {
    let sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i];
    }
    return sum / myArray.length;

}
let myArrayEvenNumbers = EvenNumbers(myArray);

console.log(calculateAvg(myArrayEvenNumbers))

//5

let max = myArray[0];
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] > max) {
        max = myArray[i];
    }
}
console.log(max);

//6

let min = myArray[0];
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] < min) {
        min = myArray[i];
    }
}
console.log(min);