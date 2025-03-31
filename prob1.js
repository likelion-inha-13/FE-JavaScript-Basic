//1. 함수 로직 작성 문제

function solution(num, total) {

  
    //배열의 중앙 인덱스의 값임
    let mNum= total/num;
    let firstNum = mNum-((num-1)/2) //짝수개

    let answer = [];

    for(i=0;i<num;i++){
        answer[i] = firstNum;
        firstNum++;
    }
    return answer;
}
