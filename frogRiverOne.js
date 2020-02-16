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