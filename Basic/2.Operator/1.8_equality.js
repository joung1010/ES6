// 동긍 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 == 3);
console.log(2 != 3);
console.log(2 == '2');  // true 해당 값만 비교하 하고싶다
console.log(2 === '2'); // false 해당 값과 타입까지 비교하고 싶다.

console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0);
console.log(false === 0);

console.clear();

const obj1 = {
    name : 'js'
};

const obj2 = {
    name : 'js'
};

console.log(obj1 == obj2); // 서로 다른 메모리 주소 값을 가지고 있기 때문이다.
console.log(obj1 === obj2); // 서로 다른 메모리 주소 값을 가지고 있기 때문이다.
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);


let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);


