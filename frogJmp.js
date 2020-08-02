function solution(X, Y, D) {
    const realDistance = Y - X;
    const jumps = Math.ceil(realDistance / D);
    return jumps;
}

console.log(solution(10, 35, 10));



function solution(X, Y, D) {
    return Math.ceil((Y - X) / D)
}
