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