function diagonalSums(arr) {
    let firstSum=0;
    let secondSum=0;
    for (let currentArray of arr) {
        let index=arr.indexOf(currentArray);
        firstSum+=currentArray[index];
    }
    for (let currentArray of arr.reverse()) {
        let index=arr.indexOf(currentArray);
        secondSum+=currentArray[index];
    }
    console.log(`${firstSum} ${secondSum}`);
}

diagonalSums([[20, 40], 
              [10, 60]])

diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])