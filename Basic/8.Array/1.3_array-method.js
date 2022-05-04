// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지지
const fruits = ['apple','banana','peach'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 이용
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('grape'));

//배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('apple'));

//추가 - 제일 뒤
let length = fruits.push('peach');   // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

//추가 - 제일 앞
length = fruits.unshift('strawberry');
console.log(fruits);
console.log(length);

//제거 - 제일 뒤
let lastItem = fruits.pop();    //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);


//제거 - 제일 앞
lastItem = fruits.shift(); //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

//중간에 추가 또는 삭제
//splice(start: number, deleteCount?: number),splice(start: number, deleteCount: number, ...items: T[])

let deleted = fruits.splice(1, 1);//배열 자체를 수정(업데이트)
console.log(fruits); // [ 'apple', 'peach' ]
console.log(deleted); //[ 'banana' ] // 배열 형태로 반환
fruits.splice(1, 0, 'banana','strawberry');
console.log(fruits); //[ 'apple', 'banana', 'strawberry', 'peach' ]

// 잘라진 새로운 배열을 만듬(slice)
// 아무 값도 지정하지 않으면 0 부터 슬라이스함

let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);
 newArr = fruits.slice();
console.log(newArr);

//여러개의 배열을 붙여줌(concat)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);//[ 1, 2, 3 ]
console.log(arr2);// [ 4, 5, 6 ]
console.log(arr3);//[ 1, 2, 3, 4, 5, 6 ]

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);//[ 6, 5, 4, 3, 2, 1 ]

console.clear();
// 중첩된 배열을 하나의 배열로 쫙 펴기(기본1단계)
let arr = [
  [1,2,3],
  [4,[5,6]],
];
console.log(arr);
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(2));//[ 1, 2, 3, 4, 5, 6 ]

arr = arr.flat(2);
// 특정한 값으로 배열을 채우기
arr.fill(0);
console.log(arr); // [ 0, 0, 0, 0, 0, 0 ]

arr.fill('s',1,3);
console.log(arr);//[ 0, 's', 's', 0, 0, 0 ]

arr.fill('a',1);
console.log(arr);

//배열을 문자열로 합하기
let text = arr.join();
console.log(text); // 0,a,a,a,a,a
text = arr.join(' | ');
console.log(text);//0 | a | a | a | a | a

