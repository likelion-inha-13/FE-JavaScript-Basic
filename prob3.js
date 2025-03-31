let likelion = [
  { name: "장재혁", part: "FE_파트장", age: 23 },
  { name: "최효리", part: "FE_부회장", age: 25 },
  { name: "전수빈", part: "FE_기획", age: 25 },
  { name: "김예린", part: "FE_홍보", age: 23 },
];
// 1번 문제 코드작성
//오름차순 정렬 
for(let i=0; i<likelion.length;i++)
{
  for(let j=0;j<likelion.length-1-i;j++)
  {
    if(likelion[j].age>likelion[j+1].age){
      [likelion[j].age,likelion[j+1].age] = [likelion[j+1].age,likelion[j].age]
    }
    
  }
}

console.log(likelion)

// 2번 문제 코드작성
let result2 = [];
for(let i=0; i<likelion.length;i++)
{
  if(likelion[i].age>=24)
  {
    result2[i]=likelion[i];
  }
}
console.log(result2);

// 3번 문제 코드작성
let targetName = "전수빈";
let result3 = null;
for(let i=0; i<likelion.length;i++)
{
  if(likelion[i].name=="전수빈")
  {
    result3=likelion[i].part;
  }
}
console.log(result3);
