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


function solution1(N){
    const binary = (N).toString(2).split("");
    console.log(binary);
    let current = 0;
    let longest = 0;
    let firstOne = false;
    binary.forEach(function(binElement){
        if(binElement === "1"){
            firstOne = true;
        }
        if(firstOne && binElement === "0"){
            current++;
        }
        if(firstOne && binElement === "1"){
            if(current > longest){
                longest = current;
            }
            current = 0;
        }
    })
    return longest;
}

console.log(solution1(529));

function solution(N) {
    const binary = N.toString(2)
    let zeros = 0;
    let longestZeros = 0;
   
    for(let i = 0; i < binary.length; i++){
        if(binary[i] === '0'){
            zeros++;
        } else {
            if(zeros > longestZeros){
                longestZeros = zeros;
            }
            zeros = 0;
        }
    }
    return longestZeros;
}
