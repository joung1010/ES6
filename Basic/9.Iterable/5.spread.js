// Spread 연산자 , 전개 구문
// 모든 Iterable 은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 쫙 펼쳐 질 수 있다.
// func (...iterable)
// [...iterable]
// {...obj}

//EcmaScript 2018
function add (a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
//console.log(add(nums[0], nums[1], nums[2]));
console.log(...nums);
console.log(add(...nums));

//Rest parameter
function sum(frist, second, ...nums) {
    console.log(nums);
}
sum(1, 2, 0, 1, 2, 3); //[ 0, 1, 2, 3 ] 나머지는 배열 형태로 전달

// Array Concat
const fruit1 = ['apple', 'kiwi'];
const fruit2 = ['banana', 'grape'];
let arr = fruit1.concat(fruit2);
console.log(arr);
arr = [...fruit1,'strawberry' ,...fruit2];
console.log(arr);

//object
const mason = {name: 'mason', age: 20,home : {address:'home'}};
const updated = {
    ...mason,
    job : 's/w engineer',
};
console.log(updated);