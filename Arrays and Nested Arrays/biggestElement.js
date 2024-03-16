function biggestElement(arr) {
    let absolutMax=Number.MIN_SAFE_INTEGER;
    for (let currentArray of arr) {
        let currentMax=Math.max(...currentArray);
        if (currentMax>absolutMax) {
            absolutMax=currentMax;
        }
    }
    console.log(absolutMax);
}

biggestElement([[20, 50, 10],

    [8, 33, 145]])