let likelion = [
  { name: "장재혁", part: "FE_파트장", age: 23 },
  { name: "최효리", part: "FE_부회장", age: 25 },
  { name: "전수빈", part: "FE_기획", age: 25 },
  { name: "김예린", part: "FE_홍보", age: 23 },
];

// 1번 문제 코드작성


console.log("1번문제");

for(let i=0;i<likelion.length-1;i++){
  for(let j=i+1;j<likelion.length;j++){
    if(likelion[i].age > likelion[j].age){
      let temp = likelion[i];
      likelion[i]=likelion[j];
      likelion[j]=temp;
    }
  }
 }
console.log(likelion);

  

// 2번 문제 코드작성

console.log("2번문제");
let result2 = [];

for(let i=0;i<likelion.length;i++){
  if(likelion[i].age >=24){
    result2 = likelion[i];
    console.log(result2);
  }
}





// 3번 문제 코드작성
console.log("3번문제")
let targetName = "전수빈";
let result3 = null;

for(let i=0;i<likelion.length;i++){
  if(likelion[i].name === targetName){
    result3 = likelion[i].part;
  }
}

console.log(result3);
