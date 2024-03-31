function addAndRemoveElements(input) {
    let myArray = [];
    for (i=0;i<input.length;i++) {
        if (input[i] == `add`) {
            myArray.push(i+1);
        } else {
            myArray.pop();
        }
    }
    if (myArray.length>0) {
        console.log(myArray.join(`\n`));
    } else {
        console.log(`Empty`);
    }
}

addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])