// 퀴즈
let num = 3;
// num의 숫자가 홀수 이면 good 홀수라면 bad
// if
if (num % 2 === 0) {
    console.log('good');
} else {
    console.log('bad');
}


//ternery
num % 2 === 1 ? console.log('bad') :  console.log('good');

let res = num % 2 === 1 ? 'bad' : 'good';
console.log(res);