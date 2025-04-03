//1. 함수 로직 작성 문제

function solution(num, total) {

  let answer = [];
  let start = (total/num)-(total%num);
  for(let i=1;i<=num;i++){
     answer[i]= start+i;
  }
  return answer;
}

console.log(solution(3,12));