console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 문자열 형태로 Javascript 코드를 작성하면 이걸 값으로 평가해서 출력 해줌
eval('const num= 2; console.log(num)');

console.log(isFinite(1)); // 숫자가 무한한지 유한한지 평가해줌
console.log(isFinite(Infinity));

console.log(parseFloat('123.4')); // 숫자로 변환
console.log(parseInt('123'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다

const URL = 'https://박정환.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

//전체 URL이 아니라 부분적인 것은 Component
const part = '박정환.com';
console.log(encodeURIComponent(part));