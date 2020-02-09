

/*
function solution(A) {
    let difference = 0;
    let firstPart = 0;
    let secondPart = 0;
    const length = A.length;
    const max = length - 1;
    let res = 100000000;
    for(let i = 0; i < max; i++){
        const val = i + 1;
        for(let j = 0; j < length; j++){
            if(j < val){
                firstPart += A[j];
            } else {
                secondPArt += A[j];
            }
        }
        const diff = firstPart - secondPart;
        difference = diff < 0 ? diff * -1 : diff;
        if(difference < res){
            res = difference;
        }
    }
    return res;
}
*/


function solution(A) {
    let leftSum = 0; 
    let rightSum = 0;
    let arr = []; 
    const sum = A.reduce((a, b) => a + b);
    const length = A.length;
    for (let i = 1; i < length; i++) {
      leftSum += A[i-1]; 
      rightSum = sum - leftSum; 
      arr.push(Math.abs(rightSum - leftSum));
    } 
      return Math.min(...arr);
  }
  solution([-10, -20, -30, -40, 100]);