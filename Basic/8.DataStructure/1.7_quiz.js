// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['banana', 'strawberry', 'grape', 'strawberry']
// output: [ 'banana', 'kiwi', 'grape', 'kiwi' ]

// 내꺼

function replace(array,from,to) {
    return array.map((value) => value === from ? to : value);
}
let fruits1 = ['banana', 'strawberry', 'grape', 'strawberry'];
const res = replace(fruits1,'strawberry','kiwi');
console.log(fruits1);
console.log(res);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ 'banana', 'kiwi', 'grape', 'kiwi' ], 'kiwi'
// output: 2




function count(array, item) {
    return array.filter(value => value === item).length;
}
/*
function count2(array, item) {
    return array.reduce((count, value) => {
        if (value === item) {
            count ++;
        }
        return count;
            }, 0);
}
*/

let fruits2 = ['banana', 'kiwi', 'grape', 'kiwi'];
console.log(count(fruits2, 'kiwi'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['banana', 'kiwi', 'grape'],  ['banana', 'strawberry', 'grape', 'strawberry']
// output: [ 'banana', 'grape' ]


function match(input,search) {
    return input.filter(value => search.includes(value));
}

let arr1 = ['banana', 'kiwi', 'grape'];
let arr2 = ['banana', 'strawberry', 'grape', 'strawberry'];
console.log(match(arr1, arr2));

// 퀴즈 4
// 5초과(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];
const avg = nums.filter(value => value > 5).reduce((avg, value,_,array) =>avg += value/array.length ,0);

console.log(avg);