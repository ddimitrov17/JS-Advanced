function aggregateElements(input) {
    let sum=0;
    let inversedSum=0;
    for (let currentNum of input) {
        sum+=Number(currentNum);
    }
    for (let inversedNum of input) {
        inversedNum=1/inversedNum;
        inversedSum+=inversedNum;
    }
    console.log(sum);
    console.log(inversedSum);
    console.log(input.join(``));
}

aggregateElements([1,2,3])