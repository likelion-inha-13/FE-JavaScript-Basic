let likelion = [
  { name: "장재혁", part: "FE_파트장", age: 23 },
  { name: "최효리", part: "FE_부회장", age: 25 },
  { name: "전수빈", part: "FE_기획", age: 25 },
  { name: "김예린", part: "FE_홍보", age: 23 },
];
let len = likelion.length;
let n = 0;
// 1번 문제 코드작성
while(n<len){
for(i=1;i<len;i++){
  let tmp = likelion[i-1];
  if(tmp.age>likelion[i].age){
    likelion[i-1] = likelion[i];
    likelion[i]=tmp;
  }
 }
 n++;
}
  console.log(likelion);
// 2번 문제 코드작성
let result2 = [];
for(i=0; i<len;i++){
  if(likelion[i].age>=24){
    result2.push(likelion[i]);
  }
}

console.log(result2);

// 3번 문제 코드작성
let targetName = "전수빈";
let result3 = null;
for(i=0;i<len;i++){
  if(likelion[i].name == targetName){
    result3 = likelion[i].part;
  }
}
console.log(result3);
