let ar = [1, 2, 3, 4, 5, 6];

const arrAvg = (arr) => {
    let sum = 0;
    arr.forEach((item) => sum += item)
    let avg = sum / arr.length;
    return console.log(avg)
};

arrAvg(ar);