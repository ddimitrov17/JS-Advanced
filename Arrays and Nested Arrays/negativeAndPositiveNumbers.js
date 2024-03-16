function negativeAndPositiveNumbers(input) {
    let myArray = [];
    for (let currentNum of input) {
        if (currentNum < 0) {
            myArray.unshift(currentNum);
        } else {
            myArray.push(currentNum);
        }
    }
    console.log(myArray.join(`\n`));
}

negativeAndPositiveNumbers([7, -2, 8, 9])