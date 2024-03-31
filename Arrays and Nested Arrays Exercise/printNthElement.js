function printNthElement(input,step) {
    let myArray=[];
    for (i=0;i<input.length;i+=step) {
        myArray.push(input[i])
    }
    return myArray;
}

printNthElement(['5',

'20',

'31',

'4',

'20'],

2)

printNthElement(['1', '2', '3', '4', '5'], 6)