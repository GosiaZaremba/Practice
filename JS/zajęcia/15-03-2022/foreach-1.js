function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

function addOne(input) {
    return input + 1;
}

const result = copyArrayAndManipulate([1, 2, 3], function (input) {
    return input * 2;
});
const result2 = copyArrayAndManipulate([0, 0, 0], addOne);

// console.log("result1", result, "result2", result2);

function customForEach(array, callback) {


}

result.forEach(function (element, index, array) {
    console.log(element, index, array);
});

customForEach(result, function (element, index, array) {
    console.log(element, index, array);
});