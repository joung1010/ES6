// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.

const number = 123// number 원시 타입
//number 원시타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString());
console.log(number); // number 원시 타입

// 즉 평소에는 primitive 타입 으로 사용되다가 . 을찍어서 유용한 함수를 호출한다면
// 그 원시타입을 한번더 그 해당하는 타입의 객체로 감싼다.


const text = 'test'; // string 문자열(원시타입)
console.log(text);
text.length; // String 객체 (Wrapper Object 로 변환)
text.trim();