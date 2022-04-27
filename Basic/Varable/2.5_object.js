let appleName = 'apple';
let color = 'red';
let display = '🍎';

let oreangeName = 'orange';
// 이렇게 변수명을 그냥 name 에서 appleName orangeName 등으로 하게되면 과일이 많아 질 수록 변수가 계속 증가하게된다.
// 또한 공통적으로 사용하는 변수 color 와 display 는 어떻게 구분해야할까?? 과일이 많아질 수록 이 값들은 반복되게 된다.
// 이렇게 연관된 데이터들을 하나로 그룹화할 수 있는 것이 객체이다.

let apple = {
    name:'apple',
     color : 'red',
     display : '🍎'
};
console.log(apple);
console.log(apple.name);   // apple 의 key 값에 . 을 통해 접근할 수 있다.
console.log(apple.color);
console.log(apple.display);
let orange = {
    name:'orange',
    color : 'orange',
    display : '🥭'
};
console.log(orange);