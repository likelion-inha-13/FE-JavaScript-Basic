//2. map활용 문제
const numbers = [1, 2, 3, 4, 5];

let answer =
numbers.map(function(num){
    if (num % 2 == 0){
        return "짝수";
    } else{
        return "홀수";
    }
});

console.log(answer);
