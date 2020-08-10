function solution(A) {
    const cleanArr = Array.from(new Set(A)).sort((a, b) => a - b);
    const index = cleanArr.findIndex(element => element === 1);
    if(index === -1){
        return 1;
    }
    let res = 1;
    for(let i = 0; i < cleanArr.length; i++){
        if(cleanArr[i] > 0){
            if(cleanArr[i] === res){
                res++;
            } else {
                return res;
            }
        }
    }
    return res;
}

function solution(A) {
    if (!A.length) return 1;
    let n = A.length + 1;
    return (n + (n * n - n) / 2) - A.reduce((a, b) => a + b);
}
