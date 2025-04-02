//2. map활용 문제
const numbers = [1, 2, 3, 4, 5];

let oddnum = []; // 홀수 담을 배열 생성
let evennum = []; // 짝수 담을 배열 생성

numbers.map(function(number){
  if (number % 2 === 1){
    oddnum.push(number);} //number의 요소가 홀수라면 홀수 배열으로 push
  else{
    evennum.push(number);} //number의 요소가 짝수라면 짝수 배열로 push
});


console.log("홀수", oddnum); // "홀수"라는 이름으로 oddnum 출력

console.log("짝수", evennum); // "짝수"라는 이름으로 evennum 출력
