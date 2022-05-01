const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); //number
console.log(typeof num2); // object

// Class 레벨 필드
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 -> e+308 은 10 에 308승
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 === Number.NaN) {
    console.log('숫자다');
}

if (Number.isNaN(num1)) {
    console.log('숫자다');
}

// toExponential 지수표기법 (매우 크거나 작은 숫자를 표기할떄 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 숫자를 지수표기법으로 변경

//toFixed 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

//toString  숫자를 문자열로 변환
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG')); // 해당 국가 언어로 표기

//toPrecision 원하는 자릿수까지 유요하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2));   // 전체 자릿수 표기가 안될때는 지수표기법으료 표기

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
    console.log(Number.EPSILON); // 0 과 1사이에서 나타낼 수 있는 가장 작은 숫자
}

const num = 0.1 + 0.2 - 0.2;    /// 0.1
console.log(num); // 0.10000000000000003
// Javascript 는 내부적으로 계산을 할때는 해당 숫자들을 2진수로 변환해서 계산한 다음에 다시 10진수로 변환한다.
// 그래서 실수값을 계산할때, 그때 발생할 수 있는 작은 오차를 나타내는 것을 EPSILON이라고 볼 수 있다.

function isEqual(original, expected) {
    //return original === expected; // 그래서 아주 미묘한 오차값을 신경쓰고 싶지 않다면
    return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1));     //true
console.log(isEqual(0.1, 0.1)); //true
console.log(isEqual(num, 0.1)); //false
