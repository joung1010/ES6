// 불리언 타입
let trueData = true;
let falseData = false;

console.log(trueData);
console.log(falseData);

// 활용 예;
// is변수명 식으로 변수명을 작성한다.
let isFree = true;
let isActivate = false;
let isEnrolled = true;

console.log(isFree);
console.log(isActivate);
console.log(isEnrolled);
console.clear();
// Falshy 거짓인 값
console.log(!!0); // !! 특정값 boolean 타입으로 변환
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);

/*
* MDN Boolean: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean
*
* */