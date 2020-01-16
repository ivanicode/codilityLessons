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