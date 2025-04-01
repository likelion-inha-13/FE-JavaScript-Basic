//2. map활용 문제
//-------------------------------
const numbers = [1, 2, 3, 4, 5];
let answer = [];

numbers.forEach((num) => {
    if (num % 2 === 0) {
        answer.push("짝수")
    } else {
        answer.push("홀수")
    }
});

console.log(answer);
