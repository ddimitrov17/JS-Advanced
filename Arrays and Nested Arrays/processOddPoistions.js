function processOddPoistions(arr) {
    arr=arr.filter((a,i) => i%2!==0).map((a) => a*=2).reverse();
    console.log(arr);
}

processOddPoistions([10, 15, 20, 25])