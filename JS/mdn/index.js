let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];
const students = [
    { name: "Alex", grade: 15 },
    { name: "Devlin", grade: 15 },
    { name: "Eagle", grade: 13 },
    { name: "Sam", grade: 14 },
];

function compareNumbers(a, b) {
    return b - a;
}

console.log(numericStringArray.sort(compareNumbers));

let sortingResult = students.sort((firstItem, secondItem) => secondItem.grade - firstItem.grade);
console.log(sortingResult);