//2. map활용 문제
const numbers = [1, 2, 3, 4, 5];
let answer = numbers.map(function(element){
    if (element%2==1)
    {
        element = '홀수'
    }
    else element = '짝수'
    return element
})
//let answer;

console.log(answer);
