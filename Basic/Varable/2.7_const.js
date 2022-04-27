// let 재할당이 가능
let a= 1;
a =3;

// const 재할당이 불가능
// 1. 상수
// 2. 상수 변수 또는 변수
const text = 'hello';
//text = 'hi';  오류 발생 이렇게 발생하면 안됨

// 1. 상수 (대문자 사용)
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수

const  apple = {
    name:'apple',
    color : 'red',
    display : '🍎'
};
// apple = {};
console.log(apple);
apple.name = 'orange';
console.log(apple);
// 왜 가능할까???
// apple 이 가리키고 있는 메모리 셀에는 현재 heap 에 저장되어있는 객체의 메모리 주소가 할당되어져있다.
// 즉 이 apple 이 가리키는 값을 즉 메모리 주소를 변경하지 못하는 것이지 그 객체 내부의 값을 바꾸지 못하는 것은 아니다.
