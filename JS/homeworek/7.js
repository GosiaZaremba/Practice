function addTo(parA) {
    return function (parB) {
        return parA + parB

    };
}

const addFunction = addTo(3);
const sum = addFunction(5); // 3+5 = 8F

console.log(sum);