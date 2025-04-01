//1. 함수 로직 작성 문제

function solution(num, total) {

  let start = (total - (num * (num - 1) / 2)) / num;
  let result = [];


  for (let i = 0; i < num; i++){
    result.push(start+i);
  }

  return result;
}

console.log(solution(3,12));
console.log(solution(4,14));
console.log(solution(5,5));