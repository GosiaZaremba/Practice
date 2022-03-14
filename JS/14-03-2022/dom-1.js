function counter() {

    let currentValue = 0;

    let count = function () {

        currentValue += 1;
        return currentValue;

    };
    return count;
}

const count1 = counter();
const count2 = counter();

console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
