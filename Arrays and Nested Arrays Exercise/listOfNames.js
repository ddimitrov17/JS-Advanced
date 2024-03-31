function listOfNames(input) {
    input.sort((a,b) => a.localeCompare(b));
    for (i=0;i<input.length;i++) {
        console.log(`${i+1}.${input[i]}`);
    }
}

listOfNames(["John",

"Bob",

"Christina",

"Ema"])