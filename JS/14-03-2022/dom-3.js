function counter(initialParam = 1) {
    let counterValue = initialParam;
    function count() {
        return counterValue++;
    }
    function reset() {
        counterValue = 0;
        return counterValue;
    }
    function decrease() {
        return counterValue--;
    }

    const obiectWithFunction = {
        count,
        decrease,
        reset,
    };
    return obiectWithFunction;
}

counterObject =

    console.log(counterObject.count(5)); // 5
console.log(counterObject.count(5)); // 6
console.log(counterObject.count(5)); // 7

console.log(counterObject.reset()); // 0
console.log(counterObject.count()); // 0
console.log(counterObject.count()); // 1