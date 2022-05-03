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