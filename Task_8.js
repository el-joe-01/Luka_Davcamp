function numof3s(num) {
    let count = 0;

    while (num > 0) {
        if (num % 10 === 3) {
            count++;
        }
        num = num / 10;
    }

    return count;
}

function numOf3sInArr(num) {
    let count = 0;
    let arr = [];

    for (i = 1; i <= num; i++) {
        arr = arr.push(i);
    }

    for (let i = 3; i <= num; i++) {
        count += numof3s(i);
    }

    return count;
}

console.log('count: ' + numOf3sInArr(10));