function primeChecker(number) {
    var number, i, flag = true;
    number = parseInt(number)
    for (i = 2; i <= number - 1; i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        return true;
    } else {
        return false;
    }
}

console.log(primeChecker(21));