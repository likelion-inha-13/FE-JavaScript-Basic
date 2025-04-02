let likelion = [
  { name: "장재혁", part: "FE_파트장", age: 23 },
  { name: "최효리", part: "FE_부회장", age: 25 },
  { name: "전수빈", part: "FE_기획", age: 25 },
  { name: "김예린", part: "FE_홍보", age: 23 },
];

// 1번 문제 코드작성

// 나이를 기준으로 오름차순 정렬 (선택 정렬)
for (let i = 0; i < likelion.length; i++) {
  for (let j = i + 1; j < likelion.length; j++) {
    if (likelion[j].age < likelion[i].age) {
      let temp = likelion[i];
      likelion[i] = likelion[j];
      likelion[j] = temp;
    }
  }
}



console.log("나이 오름차순 정렬 결과:", likelion);


// 2번 문제 코드작성
let result2 = [];
for (let i = 0; i < likelion.length; i++) { // 배열의 길이보다 작을 때, i를 늘려가며 배열을 봄봄
  if (likelion[i].age >= 24) { // i번째 요소의 나이가 24보다 작다면
    result2.push(likelion[i]); // result2 배열에 그 i번째 요소를 넣음
  }
}


console.log(result2); 


// 3번 문제 코드작성
let targetName = "전수빈";
let result3 = 0;

for (let i = 0; i < likelion.length; i++) { // 배열의 길이보다 작을 떄, i를 늘려가며 배열 안에 있는 타겟 이름을 찾음
  if (likelion[i].name === targetName) { //배열의 i번째 요소의 이름과 타겟 이름이 같으면
    result3 = likelion[i].part; // result3에 그 i번째 요소의 part를 넣음
    break; // 그리고 반복문 끝냄냄
  }
}

console.log(result3);

