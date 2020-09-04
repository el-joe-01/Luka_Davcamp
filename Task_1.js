
function positive(arr) {
    result = [];
    var sumOfEvenNumbers = 0;
    var sumOfOddNumbers = 0;

    for (i=0; i < arr.length+1; i++) {
        // Even
        if (i%2 == 0) {
            sumOfEvenNumbers = sumOfEvenNumbers + i;
            // console.log('Even: ' + sumOfEvenNumbers);
        } else {
            // Odd
            sumOfOddNumbers = sumOfOddNumbers + i;
            // console.log('Odd: ' + sumOfOddNumbers);
        }
    }

    result[0] = sumOfEvenNumbers;
    result[1] = sumOfOddNumbers;
    return result;
}

console.log(positive([1,2,3,4,5,6,7,8,9]));