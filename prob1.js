//1. 함수 로직 작성 문제

function solution(num, total) {
  let center = Math.floor(total/num); //Math.floor : 주어진 숫자보다 작거나 같은 수 중 가장 큰 정수 (버림)
  let first = 0;

  if (num % 2 === 1){
    first = center - Math.floor(num / 2);} // 홀수일 떄 버림해야해서 Math.floor 함수 사용함함
  else {
    first = center - (num / 2) - 1;}; // 짝수일 때

  let answer = []; // answer 배열 생성
  answer[0]=first; // 이 배열 안에는 first를 넣을거다
  for (let i=0; i<num; i++){
    answer[i]=first+i // i가 num보다 작아질 떄까지, 배열 안에 더해서 넣음음
  }

  return answer;
}

let result = solution(3,12);
console.log(result);
