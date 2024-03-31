function rotateArray(array,num) {
    for (i = 0; i < num; i++) {
        let a = array.pop();
        array.unshift(a);
    }
    console.log(array.join(` `));
}

rotateArray(['1',

'2',

'3',

'4'],2)

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)