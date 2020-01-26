function solution(A) {
    if(!A.length){
        return 1;
    }
    A.sort(function compareNumbers(a, b) {
        return a - b;
    })
    const index = A.findIndex(function(number, index){
        return number !== index + 1;
    })
    if(index === -1){
        return A.length + 1;
    } else {
        return index + 1;
    }
}