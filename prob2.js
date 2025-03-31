//2. map활용 문제
const numbers = [1, 2, 3, 4, 5];

let answer =[];


answer = numbers.map(function(num){
    return num%2===0?"짝수":"홀수";
});
console.log(answer);

