


function counter(value) {

    let currentValue = value;

    let count = function () {

        currentValue += 1;
        return currentValue;

    };
    return count;
}

const count1 = counter(5);
const count2 = counter(2);

console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
