//1. 함수 로직 작성 문제

function solution(num, total) {
  let answer = [];
  let mid = total/num;
  let start = mid-(num-1)/2
  for(let i =0; i<num;i++){
    answer.push(start);
    start++;
  }

  return answer;
}
