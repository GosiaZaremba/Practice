function runBefore(fn, beforeHook) {

}

function add(a, b) {
    return a + b;
}

const hook = function (...args) {
    console.log(`In "before" hook, arguments: ${args.join(", ")}`);

    const addWithBeforeHook = runBefore(add, hook);
});

console.log(addWithBeforeHook(2, 3));

/*
function zalogujZdarzenie(text) {
    const d = new Date();
    // console.log(d.toString() + " ZDARZENIE: " + text);
    console.log(`${d.toString()} ZDARZENIE: ${text}`);
}

zalogujZdarzenie("PRZYJSCIE DO PRACY");
*/
