const fruits = ['banana', 'strawberry', 'grape', 'strawberry'];
/*for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}*/

// 배열을 빙글 빙글 돌면서 원하는 것을 할떄
fruits.forEach((value, index, array) => console.log(value));

//조건에 맞는 (콜백 함수) 아이템을 찾을때
//find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = {name: 'milk', prime: 2};
const item2 = {name: 'cookie', prime: 3};
const item3 = {name: 'snack', prime: 1};
const products = [item1, item2, item3, item2];

let res = products.find((value => {
    return value.name === 'cookie';
}))
console.log(res);

//findIndex : 제일먼저 조건에 맞는 아이템의 인덱스를 반환
res = products.findIndex((value) => value.name === 'cookie');
console.log(res);

//배열의 아이템들이 부분적으로 조건(콜백함수)맞는지 확인
res = products.some((item) => item.name === 'cookie');
console.log(res);

//배열의 아이템들이 전부 조건(콜백함수)맞는지 확인
res = products.every((item) => item.name === 'cookie');
console.log(res);

// 조건에 맞는 모든 아이템들을 새로운 배열로 !
res = products.filter((item) => item.name === 'cookie');
console.log(res);

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
res = nums.map((item) => item * 2);
console.log(res);
res = nums.map((item) => {
    if (item % 2 === 0) {
        return item * 2;
    } else {
        return item;
    }
});
console.log(res);

//Flatmap : 중첩된 배열을 하나의 배열형태로 반환해줌
res = nums.map((item) => [1, 2]);
console.log(res); //[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]
res = nums.flatMap((item) => [1, 2]);
console.log(res); //[1, 2, 1, 2, 1,2, 1, 2, 1, 2]

res = ['mason', 'park'].map((text) => text.split(''));
console.log(res); // [ [ 'm', 'a', 's', 'o', 'n' ], [ 'p', 'a', 'r', 'k' ] ]
res = ['mason', 'park'].flatMap((text) => text.split(''));
console.log(res); // ['m', 'a', 's','o', 'n', 'p', 'a', 'r', 'k']

// sort 배열의 아이템을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts); //[ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);// [ 0, 1, 10, 2, 4, 5 ]
// 문자열로 변환됬을때 정렬방식으로 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); //[ 0, 1, 2, 4, 5, 10 ]
// 우리가 전달한 콜백함수가 0 보다 작다면 a 가 앞으로 정렬 -> 오름차순
// 0 보다 크다면 b가 앞으로 정렬 된다.   -> 내림차순

// reduce 배열의 요소들을 접어서 접어서 값을 하나로 콜백(누적값,배열의 각요소값),초기값
res = [1, 2, 3, 4, 5].reduce((sum, value) => sum += value, 0);
console.log(res); // 15