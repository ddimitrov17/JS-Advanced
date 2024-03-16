function biggerHalf(input) {
    let myArray=[];
    input.sort((a,b) => a-b);
    for (i=Math.floor(input.length/2);i<input.length;i++) {
        myArray.push(input[i])
    }
    return myArray;
}

// biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])