function gcd(arg1,arg2) {
    let smaller=Math.min(arg1,arg2);
    let greatestDivisor=0;
    for (i=1;i<=smaller;i++) {
        if(arg1%i==0 && arg2%i==0) {
            greatestDivisor=i;
        }
    }
    console.log(greatestDivisor);
}

gcd(5,15)