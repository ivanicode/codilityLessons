function solution(A) {
    const unPairedNumbers = {};
    for(let i = 0; i < A.length; i++){
        const value = A[i];
        if(unPairedNumbers[value]){
            delete unPairedNumbers[value]
        } else {
            unPairedNumbers[value] = true;
        }
    }
    const keys = Object.keys(unPairedNumbers);
    return parseInt(keys[0], 10);
}

console.log(solution([1, 9, 1, 9, 3]));

function solution1(A) {
    const unPairedNumbers = {};
    A.forEach(function(number){
        if(unPairedNumbers[number]){
            delete unPairedNumbers[number]
        } else {
            unPairedNumbers[number] = true;
        }
    })
    const keys = Object.keys(unPairedNumbers);
    return parseInt(keys[0], 10);
}


console.log(solution1([1, 9, 1, 9, 3]));

