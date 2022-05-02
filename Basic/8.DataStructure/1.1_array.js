// 배열 생성 방법
//1. 배열의 사이즈 지정
let array = new Array(3);
console.log(array); // [ <3 empty items> ]

//2. 생성자 함수에 인자 값 전달
array = new Array(1, 2, 3);
console.log(array); //[ 1, 2, 3 ]

// 3. Array의 static 함수 of 를 사용
array = Array.of(1,2)
console.log(array);

// 4. 배열 리터럴을 사용
const anotherArray = [1,2,3];
console.log(anotherArray );
// 5. Array.from 사용 기존에 배열을통해서 새로운 배열을 만들때
array = Array.from(anotherArray);
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 한다.
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사함
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Type Collections)

array = Array.from({
    0 : '안',
    1 : '녕',
    length: 2,
});
console.log(array);