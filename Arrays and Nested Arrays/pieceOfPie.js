function pieceOfPie(arr,firstFlavor,lastFlavor) {
    let firstIndex=arr.indexOf(firstFlavor);
    let secondIndex=arr.indexOf(lastFlavor);
    return arr.slice(firstIndex,secondIndex+1);
}

pieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')