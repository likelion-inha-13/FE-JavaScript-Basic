let likelion = [
  { name: "장재혁", part: "FE_파트장", age: 23 },
  { name: "최효리", part: "FE_부회장", age: 25 },
  { name: "전수빈", part: "FE_기획", age: 25 },
  { name: "김예린", part: "FE_홍보", age: 23 },
];

// 1번 문제 코드작성
let result1 = likelion;
for (let i = 0; i < result1.length - 1; i++){
  for (let j = 0; j < result1.length - 1 - i; j++){
    if (result1[j].age > result1[j+1].age){
      [result1[j], result1[j+1]] = [result1[j+1], result1[j]];
    }
  }
}
console.log("나이순:", result1);


// 2번 문제 코드작성
let result2 = [];
for (let i = 0; i < likelion.length; i++){
  if (likelion[i].age > 24){
    result2.push(likelion[i]);
  }
}
console.log("24세 이상 팀원:", result2);

// 3번 문제 코드작성
let targetName = "전수빈";
let result3 = null;
for (let i = 0; i < likelion.length; i++){
  if (likelion[i].name === targetName){
    result3 = likelion[i].part;
  }
}
console.log(targetName, "님 Part:", result3);
