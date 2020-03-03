function solution(N, A) {
    let countersArray = Array(N).fill(0); //[0, 0, 0, 0 ,0]
    let biggestCounter = 0;
    let lastFillValue = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] > N){
            //countersArray.fill(biggestCounter);
            lastFillValue = biggestCounter;
        } else {
            const index = A[i] - 1;
            if(countersArray[index] < lastFillValue){
                countersArray[index] = lastFillValue;
            }
            countersArray[index]++;
            if(countersArray[index] > biggestCounter){
                biggestCounter = countersArray[index];
            }
        }
    }
    for(let j = 0; j < N; j++){
        if(countersArray[j] < lastFillValue){
            countersArray[j] = lastFillValue;
        }
    }
    return countersArray;
}

[0, 0, 1, 2, 0, 0]


/*function solution(N, A) {
    var j;
    var i;
    var len = A.length;
    var lastMax = 0;
    var max = 0; 
    var counters = new Array (N);
    for(j = 0; j < N; j++) counters[j] = 0;
    var n1 = N + 1;
    
    for(j=0; j < len; j++){
        if(A[j] < n1){
            i = A[j] - 1;
            if (counters[i] < lastMax) counters[i] = lastMax;
            counters[i]++;
            if (max < counters[i]) max = counters[i];
        } else {
            lastMax = max;
        }
    }
    
    for(j = 0; j < N; j++){
      if (counters[j] < lastMax) counters[j] = lastMax;
    }
    
    return counters;
}*/
