function solution(N) {
    const binary = (N).toString(2);
    let current = 0;
    let longest = 0;
    let firstOne = false;
    for(let i = 0; i < binary.length; i++){
        if(binary[i] === "1"){
            firstOne = true;
        }
        if(firstOne && binary[i] === "0"){
            current++;
        }
        if(firstOne && binary[i] === "1"){
            if(current > longest){
                longest = current;
            }
            current = 0;
        }
    } 
    return longest;
}

console.log(solution(529));