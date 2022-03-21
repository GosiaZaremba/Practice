// function invokeWithCheck(isFunk) {
// if isFunk.typeof == function {
//     isFunk()
// };
// else console.log(isFunk)
// }

function invokeWithCheck(param) {
    if (typeof param === "function") {
        param();
        return;
    }
    console.log(param);
}

invokeWithCheck('Gosia');
invokeWithCheck(function () {
    console.log("funkcja testowa")
});