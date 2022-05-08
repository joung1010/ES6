// 자바스크립트 함수는 만능
// 함수처럼 사용, 생성자 함수로 사용 (클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체) 생성됨

const dog ={
  name:'Dog',
  play: function ()  { // () => {
    console.log('놀자아!');
  },
};
dog.play();

 const obj = new dog.play();
console.log(obj);

//ES6
const cat ={
  name: 'cat',
  play() { // 객체의 메서드 (오브젝트에 속한 함수)
    console.log('나옹');
  }
}
cat.play();
// const obj2 = new cat.play(); // 생성자 함수로 사용 할 수 없음!

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 X)
 * 3. 함수 자체 arguments (arrow 함수 외부의 arguments를 참조만함)
 * 4. this 바인딩이 정적으로 결정됨
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 */

function sum(a, b) {
  console.log(arguments);
}

sum(1, 2);

const add = (a, b) => {
  console.log(arguments); // arrow 함수 외부의 arguments를 참조만함
};

add(1, 2);

const printArrow = () => {
  console.log(this);
};
printArrow();

cat.printArrow = printArrow;
cat.printArrow();