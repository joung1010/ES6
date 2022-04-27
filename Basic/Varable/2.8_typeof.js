// typeof : 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable ;
console.log(typeof variable);

variable = '' ;
console.log(typeof variable);

variable = 1 ;
console.log(typeof variable);
// 할당된 값에 따라서 타입이 결정됨!!!

variable = {} ;
console.log(typeof variable);

variable = () => {} ;
console.log(typeof variable);

variable = Symbol() ;
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');