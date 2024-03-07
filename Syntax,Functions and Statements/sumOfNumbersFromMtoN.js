function sumOfNumbersFromMtoN(a,b) {
    let sum=0;
    a=Number(a);
    b=Number(b);
    for (i=a;i<=b;i++) {
        sum+=i;
    }
    console.log(sum);
}

sumOfNumbersFromMtoN(1,5)