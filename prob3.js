let likelion = [
  { name: "장재혁", part: "FE_파트장", age: 23 },
  { name: "최효리", part: "FE_부회장", age: 25 },
  { name: "전수빈", part: "FE_기획", age: 25 },
  { name: "김예린", part: "FE_홍보", age: 23 },
];

// 1번 문제 코드작성
for (let i=0; i<likelion.length-1; i++) { // 3번
    for (let j=0; j<likelion.length-1-i; j++) { // 2번씩
      if (likelion[j].age > likelion[j+1].age) {
          // 앞사람의 나이가 더 많으면 자리 교환
          let storage = likelion[j];
          likelion[j] = likelion[j+1];
          likelion[j+1] = storage;
      }
    }
}

console.table(likelion);

// 2번 문제 코드작성
let result2 = [];

for (let i in likelion) {
  if (likelion[i].age >= 24) {
    result2.push(likelion[i]);
  }
}

console.table(result2);

// 3번 문제 코드작성
let targetName = "전수빈";
let result3 = null;

for (let i in likelion) {
  if (likelion[i].name === targetName){
    result3 = likelion[i].part;
  }
}

console.log(result3);
