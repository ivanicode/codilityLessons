function solution(N, A) {
    let countersArray = Array(N).fill(0); //[0, 0, 0, 0 ,0]
    let biggestCounter = 0; //najwieksza liczba w tablicy
    let lastFillValue = 0; //ostatnia liczba, ktora zastapila wszystkie liczby w tablicy
    for(let i = 0; i < A.length; i++){
        if(A[i] > N){ //jezeli wartosc elementu w tablicy jest wieksza od N..
            //countersArray.fill(biggestCounter);
            lastFillValue = biggestCounter; //wypelniamy wszystkie elementy w tablicy najwieksza liczba
        } else { //jezeli wartosc elementu w tablicy jest mniejsza od N...
            const index = A[i] - 1; //tworzymy zmienna ktorej wartosc bedzie rowna indexowi elementu na ktorym pracujemy
            if(countersArray[index] < lastFillValue){ //warunek: jezeli element w tablicy jest mniejszy od ostatniej najwiekszej wartosci jaka wypelnilismy tablice
                countersArray[index] = lastFillValue; //to nadpisujemy ja ta najwieksza wartoscia
            }
            countersArray[index]++; //wykonujemy inkrementacje na kazdym elemencje tablicy po kolei
            if(countersArray[index] > biggestCounter){ //warunek: jezeli kazdy element tablicy jest wiekszy od najwiekszej poprzednio wartosci w tablicy
                biggestCounter = countersArray[index]; //to najwieksza wartosc w tablicy zostaje uaktualniona
            }
        }
    }
    for(let j = 0; j < N; j++){
        if(countersArray[j] < lastFillValue){ //warunek: jezeli jakis element w tablicy jest mniejszy od ostatniej najwiekszej liczby, ktora nadpisala wszystkie liczby w tablicy
            countersArray[j] = lastFillValue; //to tady element tablicy zostaje nadpisany przez ta liczbe
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
