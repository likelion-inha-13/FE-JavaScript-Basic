//1. 함수 로직 작성 문제

function solution(num, total) {
  let start = total / num - (num - 1) / 2;
  let answer  = [];
  for (let i = 0; i<num ; i++){
    answer.push(start+i);
  }
  return answer;
}



