let likelion = [
  { name: "장재혁", part: "FE_파트장", age: 23 },
  { name: "최효리", part: "FE_부회장", age: 25 },
  { name: "전수빈", part: "FE_기획", age: 25 },
  { name: "김예린", part: "FE_홍보", age: 23 },
];

let result1 = likelion.sort((a,b) => a.age - b.age);
console.log('result1:', result1);

// 2번 문제 코드작성
let result2 = [];
likelion.map( a => {
  if (a.age >= 24) {
    result2.push(a)
  }
});

console.log(result2);


let targetName = "전수빈";
let result3 = null;

likelion.map(person => {
  if(person.name === '전수빈'){
    result3 = person.part;
  }
})
console.log(result3);
