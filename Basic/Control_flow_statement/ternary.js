// 삼항 조건 연산자 Ternery Operator
// 조건 ? 참인경우 : 거짓인경우

let fruit = 'orange';
if (fruit === 'apple') {
    console.log('🍎');
} else {
    console.log('!!');
}

fruit === 'apple' ? console.log('🍎') : console.log('!!');

let res = fruit === 'apple' ? '🍎' : '!!';
console.log(res);

//MDN 삼항조건연산자: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator