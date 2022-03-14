function counter(value = 1) {
    let currentValue = value;
    function count() {
        return currentValue++;
    };
    return count;
}

const count1 = counter();
const count2 = counter();

console.log(count1());
console.log(count1());

console.log(count2());
console.log(count2());
