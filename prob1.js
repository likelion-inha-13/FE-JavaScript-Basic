//1. 함수 로직 작성 문제
let num = 0;
let total = 0;
let first = 0;
function solution(num, total) {
  let answer = [];
  first = Math.ceil(total / num) - Math.floor(num / 2);
  for(let i = 0; i < num; i++){
    answer[i] = first++;
  }
  return answer;
}

console.log(solution(3, 12));
console.log(solution(4, 14));
console.log(solution(5, 5));