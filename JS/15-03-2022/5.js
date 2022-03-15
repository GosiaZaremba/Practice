var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];

function removeElement(array) {

    for (var i = 0; i < arr.length; i++) {

        if (array[i] === array[i]) {

            array.splice(i);
        }

    }
    return array
}

console.log(removeElement(arr));