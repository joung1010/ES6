//Math
// static properties, method
console.log(Math.E);    // 오일러의 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 PI 값

// static method
// 절대값
console.log(Math.abs(-10));
//소수점 이하를 올림
console.log(Math.ceil(1.4));
//소수점 이하를 내림
console.log(Math.floor(1.4));
//소수점이하 반올림
console.log(Math.round(1.4));
console.log(Math.round(1.7));
//정수만 반환
console.log(Math.trunc(1.59392));

//최대 최소값을 찾기
console.log(Math.max(1,2,5,6,));
console.log(Math.min(1,2,5,6,));

//거듭 제곱
console.log(3 ** 2);
console.log(Math.pow(3,2));

//제곱근
console.log(Math.sqrt(9));

//랜덤한 값을 반환(0~1 사이의 값)
console.log(Math.random());

//1~10 (0*10) +1< 값 < (1*10) +1
console.log(Math.floor(Math.random() * 10 + 1));