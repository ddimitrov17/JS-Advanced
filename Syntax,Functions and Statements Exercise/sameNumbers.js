function sameNumbers(input) {
    let stringInput=String(input);
    let arrayInput=stringInput.split(``);
    let sum=0;
    let isIdentical=true;
    for (let current of arrayInput) {
        sum+=Number(current);
    }
    for (i=0;i<arrayInput.length;i++) {
        if (arrayInput[0]!==arrayInput[i]) {
            isIdentical=false;
            break;
        }
    }
    if (isIdentical) {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
    console.log(sum);
}

sameNumbers(1234)