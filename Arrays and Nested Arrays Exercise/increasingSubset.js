function increasingSubset(input) {
    let increasing=[input[0]];
    for (i=1;i<input.length;i++) {
        if (input[i]>=increasing[increasing.length-1]) {
            increasing.push(input[i]);
        }
    }
    return increasing;
}

console.log(increasingSubset([20,21,21,22,3,4,5,26,28]));