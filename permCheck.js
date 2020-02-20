/*function solution(A) {
    if(A.length === 1){
        return 0;
    }
    let sortArr = A.sort(function compareNumbers(a, b) {
        return a - b
    });
    for(let i = 1; i < A.length; i++){
        if(A[i] !== i + 1){
            return 0;
        }
    }
    return 1;
}




function solution(A) {
    let sortArr = A.sort(function compareNumbers(a, b) {
        return a - b
    });
    const elem = sortArr[sortArr.length - 1];
    /*for(let i = 1; i < A.length; i++){
        if(A[i] !== i + 1){
            return 0;
        }
    }
    return 1;
    if(elem === A.length){
        return 1
    }
    return 0;
}
*/



function solution(A) {
    const uniqueValues = Array.from(new Set(A));
    if(uniqueValues.length !== A.length){
        return 0;
    }
    let sortArr = A.sort(function compareNumbers(a, b) {
        return a - b
    });
    const elem = sortArr[sortArr.length - 1];
    if(elem === A.length){
        return 1
    }
    return 0;
}