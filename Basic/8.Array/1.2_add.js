const fruits = ['apple','banana','peach','grape'];

//배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); // 배열의 길이

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식
// 인덱스를 이용해서 추가  만약 기존에 인덱스에 데이터가 있다면 해당 데이터가 덮어써짐, 또는 인덱스를 건너 뛰면 중간에 빈값이 들어감
fruits[5] = 'strawberry';
console.log(fruits); // [ 'apple', 'banana', 'peach', 'grape', <1 empty item>, 'strawberry' ]

delete fruits[1];
console.log(fruits);//[ 'apple', ' <1 empty item>,', 'peach', 'grape', <1 empty item>, 'strawberry' ]
