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