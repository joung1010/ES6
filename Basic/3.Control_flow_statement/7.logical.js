// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온것)
// !! 불리언값으로 변환 (단항연산자 응용)

let num = 8;

if (num >= 0 && num < 9) {
    console.log('&& true');
}

if (num >= 0 || num < 9) {
    console.log(' || true');
}

if (!(num >= 0 || num < 9)) {
    console.log(' ! true');
}

if (num != 9) {
    console.log(' ! true');
}

console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false


console.log(!'text');   // 어떤값은 true 인데 그걸 부정 했으니 false
console.log(!!'text');  // flas 값인 것을 다시 부정하니까 true -> 특정 값을 boolean 으로 변경하는 것과 같음