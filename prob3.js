let likelion = [
  { name: "장재혁", part: "FE_파트장", age: 23 },
  { name: "최효리", part: "FE_부회장", age: 25 },
  { name: "전수빈", part: "FE_기획", age: 25 },
  { name: "김예린", part: "FE_홍보", age: 23 },
];

// 1번 문제 코드작성 
//인접한 두 원소를 비교하서 순서대로 되어있지 않으면 스왑
let result1 = [];
for (let i = 0; i < likelion.length; i++) {
  for (let j = i + 1; j < likelion.length; j++) {
    if (likelion[i].age > likelion[j].age) {
      let temp = likelion[i];
      likelion[i] = likelion[j];
      likelion[j] = temp;
    }
  }
}
console.log("오름차순", likelion);


// 2번 문제 코드작성 
// 나이를 돌면서 24세 이상인 경우에만 결과 배열에 푸시 해보기
let result2 = [];
let criteria= 24;
for (let i=0;i<likelion.length;i++){
  if (likelion[i].age>=criteria){
    result2.push(likelion[i]);
   
  }

    
  
}

console.log(result2);

// 3번 문제 코드작성
// 그냥 돌면서 이름 같은 사람찾고 foundPerson.part
let targetName = "전수빈";
let result3 = null; 
for (let i=0;i<likelion.length;i++){
  if(likelion[i].name==targetName){
    result3=likelion[i].part;

  }


}
console.log(result3);
