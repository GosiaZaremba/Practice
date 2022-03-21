let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

function sumOfArrIndex(arr1, arr2) {
    let sumOfIndex = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++)
            sumOfIndex = arr1[i] + arr2[j]
    }

    return sumOfIndex;
}

console.log(sumOfArrIndex(array1, array2));