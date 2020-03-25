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