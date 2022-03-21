// function runBefore(fn, beforeHook) {
//     function innerFunk(...args) {
//         beforeHook(...args)
//     }
//     return innerFunk // ()


// };

// function add(a, b) {
//     return a + b;
// };

// const hook = function (...args) {

//     console.log(`in before hook, arguments: ${args.join(", ")}`);
// };

// const hook2 = function () {
//     console.log('AAAA');
// }


// const addWithBeforeHook = runBefore(add, hook);
// const addWithBeforeHook2 = runBefore(add, hook2);

// console.log(addWithBeforeHook(2, 3));
// console.log(addWithBeforeHook2(2, 3));

function runBefore(fn, beforeHook) {
    function innerFunction(...args) {
        beforeHook(...args);
        return fn(...args);
    }
    return innerFunction;
}

function add(a, b) {
    return a + b;
}

const hook = function (...args) {
    console.log(`In "before" hook, arguments: ${args.join(", ")}`);
};

const hook2 = function () {
    console.log("AAA");
};

const addWithBeforeHook = runBefore(add, hook);
const addWithBeforeHook2 = runBefore(add, hook2);

console.log(addWithBeforeHook(2, 3));
// `In "before" hook, arguments: 2,3`
// 5
console.log(addWithBeforeHook2(2, 3));
  // AAA
  // 5