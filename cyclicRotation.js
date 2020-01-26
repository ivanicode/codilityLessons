function solution(arr, K){
    const length = arr.length;
    const newK = K%length;
    if(!newK){
        return arr;
    }
    const newArr = arr.map(function(number, index, arr){
        let newIndex = index + newK;
        if(index >= newK) {
            return arr[index - newK];
        } else {
            return arr[length - newK + index];
        }
    })
    return newArr;
}
console.log(solution([1, 2, 3, 4, 5], 2));


function solution1(arr, K){
    const newK = K%length;
    if(!newK){
        return arr;
    }
    for(let i = 0; i < arr.length; i++){
        if(index >= newK) {
            return arr[index - newK];
        } else {
            return arr[length - newK + index];
        }
    }
    return newArr;
}
console.log(solution([1, 2, 3, 4, 5], 2));