//1. 함수 로직 작성 문제

function solution(num, total) {
  let answer = [];
  let x = (total - num*(num-1)/2)/num;
  for (let i=0; i<num; i++){
    answer.push(x+i);
  }

  return answer;
}
console.log(solution(3, 12));
console.log(solution(4, 14));
console.log(solution(5, 5));
