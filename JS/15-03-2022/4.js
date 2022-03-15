var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];

function removeElement(array, number) {

    for (var i = 0; i < arr.length; i++) {

        if (array[i] === number) {

            array.splice(i, 1);
        }

    }
    return array
}

console.log(removeElement(arr, 56));