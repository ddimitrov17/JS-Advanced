function magicMatrices(matrix) {
    let rowSums=[];
    let columnSums=[];
    for (let currentArray of matrix) {
        let sum=0;
        for (let currentElement of currentArray) {
            sum+=currentElement;
        }
        rowSums.push(sum);
    }
    for (i=0;i<matrix.length;i++) {
        let sum=0;
        for (j=0;j<matrix.length;j++) {
            sum+=matrix[j][i];
        }
        columnSums.push(sum);
    }
    let allEqualRows=rowSums.every(el => el===rowSums[0]);
    let allEqualColumns=columnSums.every(el => el===columnSums[0]);
    if (allEqualRows && allEqualColumns) {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
}

magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]])
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]])
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])

