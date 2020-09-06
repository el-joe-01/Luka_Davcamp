function sumOf3(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            for (let k = 2; k < arr.length; k++) {
                var sum = arr[i] + arr[j] + arr[k];
                if (sum === num) {
                    arr2 = [arr[i], arr[2], arr[3]];
                    console.log('Sum = ' + sum);
                    console.log('Num = ' + num);
                    break;
                }
            }
        }
    }
}

sumOf3([1,2,3,4,5,6], 6);