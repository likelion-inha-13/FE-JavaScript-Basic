//1. 함수 로직 작성 문제

function solution(num, total) {
  let answer = [];
  let aver = total / num;
  let start = aver- num/2+0.5;
  for(let i=0; i<num;i++)
  {
    answer[i]=start+i; 
  }
  return answer;
}
console.log(solution(3,12));// aver =4 //num=3 //total =12   
console.log(solution(4,14));// aver =4 //num=3 //total =12   
console.log(solution(5,5));// aver =4 //num=3 //total =12   
// aver 3.5  num 4   total  14
                              
