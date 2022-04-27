//원시 타입은 값이 복사되어 전달됨
let a = 1;
let b = a;  // 1
b = 2;
console.log(a);
console.log(b);

// 객체 타입은 참조값(메모리 주소, 레퍼런스)이 복사되어 전달
let apple = { // 주소값 : 0x1234
    name: 'apple'
};
let orange = apple; // orange 에 apple 의 주소값이 복사되어 전달됨 0x1234
orange.name = '오렌지';
console.log(apple);
console.log(orange);

// 주소값을 전달했기 때문에 실제적으로 같은 객체를 가리키고 있다
// 따라서 orange.name 을 오렌지로 바꾸면 apple의 name 도 같이 바뀐다.