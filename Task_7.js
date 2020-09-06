const standardDeviation = (arr, usePopulation = false) => {
    const mean = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
    return Math.sqrt(
        arr.reduce((accumulator, currentValue) => accumulator.concat((currentValue - mean) ** 2), []).reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
        (arr.length - (usePopulation ? 0 : 1))
    );
};

console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21]));
console.log(standardDeviation([10, 2, 38, 23, 38, 23, 21], true));