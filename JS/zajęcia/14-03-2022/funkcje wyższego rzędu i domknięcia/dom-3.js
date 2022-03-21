function counter(value = 1) {
    let currentValue = value;
    function count() {
        return currentValue++;
    };
    function reset() {
        currentValue = 0;
        return currentValue;
    }
    const objectWithFunction = {
        count,
        reset
    };
    return objectWithFunction;
}

const counterObject = counter();

console.log(counterObject.count());
console.log(counterObject.count());

console.log(counterObject.reset());
console.log(counterObject.reset());
