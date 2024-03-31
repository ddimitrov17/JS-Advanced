function sortingNumbers(input) {
    let printArray=[];
    for (i=0;i<input.length;i++) {
        input.sort((a,b) => a-b);
        printArray.push(input.shift());
        printArray.push(input.pop());
    }
    return printArray.concat(input);;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));