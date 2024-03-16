function evenPositionElement(input) {
    let output=``;
    for (i=0;i<input.length;i++) {
        if (i%2==0) {
            output+=`${input[i]} `;
        }
    }
    console.log(output);
}

evenPositionElement(['20', '30', '40',

'50', '60'])