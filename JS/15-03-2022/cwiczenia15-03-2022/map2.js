let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351


console.log(arr_1.reduce((a, b) => a + b));


console.log(arr_2.reduce((a, b) => a + b));


const funkielNuwka = (ar) => {
    let suma = 0;
    for (let i = 0; i < ar.length; i++) {
        suma += ar[i];
    };
    return suma;
};
console.log(funkielNuwka(arr_1));


























// // let sum = 0;
// // const dupesia = (arr, inex, array) => {
// //     sum += arr;

// //     return sum.shift();

// // }
// // console.log(arr_1.map(dupesia));
// // // console.log(arr_2.map(dupesia));

// // //


// // //PIOTR console.log([1, 2, 3, 4].reduce((a, b) => a + b));
// // function zliczeniedebilne(a1) {
// //     for (let i = 0; i < a1.length; i++) {

// //     }
// // }

// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351

// function summer() {

//     let currentSum = 0;

//     function sum(currentValue, index, array) {
//         currentSum += currentValue;
//     }

//     function getCurrent() {
//         return currentSum;
//     }

//     return {
//         sum: sum,
//         getCurrent: getCurrent,
//     };

// }

// const summer1 = summer();
// const summer2 = summer();

// arr_1.map(summer1.sum);
// console.log(arr_1);
// console.log(summer1.getCurrent());

// arr_2.map(summer2.sum);
// console.log(arr_2);
// console.log(summer2.getCurrent());