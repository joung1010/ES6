// 산술연산자 (Arithmentic Operation)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기 값
// %  나머지 값
// ** (거듭제곱)

console.log(4 + 2);
console.log(4 - 2);
console.log(4 * 2);
console.log(4 / 2);
console.log(4 % 3);
console.log(4 ** 3); // es7
console.log(Math.pow(4,3));


// + 연산자 주의점 !!
let text = '두개의' + '문자를 연결'
console.log(text);
text = 1 + '1'; // 숫자와 문자열을 더하면 문자열로 변환됨
console.log(text);
console.log(typeof text);