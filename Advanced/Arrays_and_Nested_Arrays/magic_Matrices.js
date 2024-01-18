function magic_Matrices(mtrx) {

    let [row1, row2, col1, col2] = [0, 0, 0, 0];

    for (let step = 0; step < mtrx.length - 1; step++) {
        mtrx[step].forEach(el => row1 += el);
        mtrx[step + 1].forEach(el => row2 += el);
        mtrx.forEach(el => col1 += el[step]);
        mtrx.forEach(el => col2 += el[step + 1]);
        if (row1 === row2 && col1 === col2) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(magic_Matrices([[11, 32, 45],

    [21, 0, 1],

    [21, 1, 1]]))