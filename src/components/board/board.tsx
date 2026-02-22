export const moveVertical = (direction:Direction, arr:number[][], score:number) => {
const cloneArr = cloneDeep(arr);
for (let i = 0; i < cloneArr.length; i++) {
    const column = arrayColumn(cloneArr, i);
    const arrWithoutZeros = direction === Direction.UP
        ? column.filter(item => item !== 0)
        : column.filter(item => item !== 0).reverse();
    let shiftedColumn = [];
    for (let j = 0; j < arrWithoutZeros.length; j++) {
        if (arrWithoutZeros[j] === arrWithoutZeros[j + 1]) {
            shiftedColumn.push(arrWithoutZeros[j] * 2);
            score += arrWithoutZeros[j] * 2;
            j++;
        } else {
            shiftedColumn.push(arrWithoutZeros[j]);
        }
    }
    shiftedColumn = direction === Direction.UP
        ? shiftedColumn.concat(Array(4 - shiftedColumn.length).fill(0))
        : shiftedColumn.concat(Array(4 - shiftedColumn.length).fill(0)).reverse();
    for (let k = 0; k < cloneArr.length; k++) {
        cloneArr[k][i] = shiftedColumn[k];
    }
}
return {
    arr: arraysEqual(cloneArr, arr) ? cloneArr : setRandomValue(cloneArr),
    score: score,
};
}
