function counter(value = 1) {
    let currentValue = value;
    function count() {
        return currentValue++;
    }
    function reset() {
        currentValue = 0;
        return currentValue;
    }
    function decrease() {
        return --currentValue;
    }
    const objectWithFunction = {
        count,
        reset,
        decrease
    };
    return objectWithFunction;
}

const counterObject = counter();

console.log(counterObject.count());
console.log(counterObject.count());

console.log(counterObject.reset());
console.log(counterObject.reset());

console.log(counterObject.decrease());
console.log(counterObject.decrease());
