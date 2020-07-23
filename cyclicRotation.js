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

function solution(A, K) {
    const modulo = K % A.length; //Tutaj obliczana jest reszta z dzielenia zmiennej K przez długość tablicy
    const sliceIndex = A.length - modulo; //Tutaj do zmiennej sliceIndex przypisuje się index tablicy, który będzie dzielił tablicę na dwie części
    return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)] //Tutaj dzięki wcześniejszym obliczeniom tworzymy tablicę złożoną z dwóch części - pierwsza: wcześniejsza druga - i druga - wcześniejsza pierwsza. W ten sposób posługując się metodą wbudowaną slice() w prosty sposób zwracamy tablicę z elementami pod właściwym indexem.
}

