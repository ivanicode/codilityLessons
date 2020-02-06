
function sum(arr, start){
    /*return arr.reduce(function(sum, currentValue) {
            return sum + currentValue;  
        }, start);*/
    let sum = start;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function solution(A) {
    let difference = 0;
    let firstPart = 0;
    let secondPart = 0;
    const max = A.length - 1;
    let res = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < max; i++){
        firstPart = sum([...A].splice(0, i + 1), 0);
        secondPart = sum([...A].splice(i + 1, max - i), 0); 
        difference = Math.abs(firstPart - secondPart);
        if(difference < res){
            res = difference;
        }
    }
    return res;
}
