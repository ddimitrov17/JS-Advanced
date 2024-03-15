function cookingByNumbers(...input) {
    let number=Number(input.shift());
    for (let command of input) {
        switch (command) {
            case `chop`:number/=2; console.log(number); break;
            case `dice`:number=Math.sqrt(number); console.log(number); break;
            case `spice`:number++; console.log(number); break;
            case `bake`:number*=3; console.log(number); break;
            case `fillet`: number*=0.8; console.log(number); break;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')