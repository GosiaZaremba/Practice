function sayHello(num) {
    let counter = 0;
    let intervalId = null;
    intervalId = setInterval(function () {
        console.log('Hello!');
        if (counter++ >= num) {
            clearInterval(intervalId);
        }
    }, 1000);
}

sayHello(2);























   // let counter = 0;
    // let intervalId = setInterval(() => {
    //     clearInterval(intervalId);

    // }, 0);