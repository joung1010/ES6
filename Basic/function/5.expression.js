// 함수 선언문 function namne () {  }
// 함수 표현식 const name = function () {  }
let add = function (a,b){
    return a + b;
}
console.log(add(1, 2));

// 화살표 함수 const name = () => {}
add = (a, b) =>  a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 객체 편에서 다룸

// IIFE (Immediately-Invoked Function Expression)
(function run() {
    console.log('run!!');
})();