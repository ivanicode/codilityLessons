function solution(X, A) {
  let leaves = []
  for (let i = 0; i < A.length; i++) {
      const val = A[i];
    if (val <= X && !leaves[val]) {
      leaves[val] = i;
    }
  }
  const filteredLeaves = leaves.filter(x => typeof x === 'number')
  if (filteredLeaves.length !== X) {
    return -1;
  }
  return Math.max(...filteredLeaves);
}

function solution(X, A) {
  const  leavesObj = A.reduce((acc, value, index) => {
      if(acc[value] === undefined){
          acc[value] = index;
      }
      return acc;
      
  }, {} );
  const leavesArr = Object.values(leavesObj);
  if(leavesArr.length === X){
      return Math.max(...leavesArr);
  }
  return -1;
}

function solution(X, A) {
    let set = new Set(); //Tworzymy obiekt Set, który gwarantuje nam niepowtarzalność elementów
    for(let i = 0; i < A.length; i++){ //Tworzymy pętlę dla tablicy A
        if(A[i] <= X){ //W tym warunku wrzucamy do Seta wszystkie liczby mniejsze bądź równe wartości X
            set.add(A[i]);
        }
        if(set.size === X){ //W tym warunku gdy ilość liczb w Secie jest taka sama co wartość X i mamy pewność, że wszystkie pozycje od 1 do X są, zwracamy index liczby równej wartości X, czyli sekunde, w której żabka przedostaje się na drugi brzeg.
            return i;
        }
    }
return -1; //Jeżeli żabka nie ma możliwości przeskoczyć na drugi brzeg mamy zwrócić -1
}
