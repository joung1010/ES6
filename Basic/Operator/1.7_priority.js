let a = 2;
let b = 3;
let res = a + b * 4;
console.log(res);   // 14 <- a + (b*4) 더하기 보다 곱하기가 우선순위가 더 높다.
res = a++ + b*4;
console.log(res);  // 14 <- a++ + (b*4) , a++ (3)
res = (a+b) * 4 // () 이용해서 우선수위를 조절한다.
console.log(res);
/*
*
* MDN 연산자 우선순위: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
* */