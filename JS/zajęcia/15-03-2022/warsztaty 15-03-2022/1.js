// function printArrayElements(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// };

// printArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

let students = [5, 7, 6, 4, 3, 2];

students.forEach(function (item, index, array) {
    console.log(item * 2, index, array);
});

