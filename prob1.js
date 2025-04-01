//1. 함수 로직 작성 문제
//-------------------------------
function solution(num, total) {
  let answer = [];

  // start 숫자를 수식으로 구하기
  let start = (total - (num * (num - 1)) / 2 ) / num;

  // start 부터 num 개의 숫자만큼 넣으면 정답 !
  for (let i=0; i<num; i++) {
      answer.push(start + i);
  }

  return answer; 
}

// solution(3, 12)  [3, 4, 5]
// solution(4, 14)  [2, 3, 4, 5]
// solution(5, 5)  [-1, 0, 1, 2, 3]

let result = solution(5, 5);
console.log(result);

