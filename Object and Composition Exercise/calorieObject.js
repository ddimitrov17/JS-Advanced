function calorieObject(input) {
    let output={};
    for(i=0;i<input.length;i+=2) {
        output[input[i]]=Number(input[i+1]);
    }
    console.log(output);
}

calorieObject(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])