// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['banana', 'strawberry', 'grape', 'strawberry']
// output: [ 'banana', 'kiwi', 'grape', 'kiwi' ]

// 내꺼
function changeStrawberry(fruits) {
    if (!fruits.includes('strawberry')) {
        return;
    }

    return  fruits.map((fruits,index)=>{
        if (fruits === 'strawberry') {
            return fruits[index] = 'kiwi';
        } else {
            return fruits;
        }
    });;
}

function replace(array,from,to) {
    const replaced = Array.from(array);
    for (let i = 0; i < replaced.length; i++) {
        if (replaced[i] === from) {
            replaced[i] = to;
        }
    }
    return replaced;
}

let fruits1 = ['banana', 'strawberry', 'grape', 'strawberry'];
const changedFruits = changeStrawberry(fruits1);
const res = replace(fruits1,'strawberry','kiwi');
console.log(fruits1);
console.log(changedFruits);
console.log(res);




// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ 'banana', 'kiwi', 'grape', 'kiwi' ], 'kiwi'
// output: 2

// 내꺼
function findFruit(fruits,targetFruit) {
    return fruits.filter((fruit) => fruit === targetFruit).length;
}

function count(array, item) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            counter++;
        }
    }
    return counter;
}

let fruits2 = ['banana', 'kiwi', 'grape', 'kiwi'];
console.log(findFruit(fruits2, 'kiwi'));
console.log(count(fruits2, 'kiwi'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['banana', 'kiwi', 'grape'],  ['banana', 'strawberry', 'grape', 'strawberry']
// output: [ 'banana', 'grape' ]

// 내꺼
function removeDuplication(arr1, arr2) {
    return arr1.filter((item,index) => arr2.includes(item));
}

function match(input,search) {
    const result = [];
    for (let i = 0; i < input.length; i++) {
        if (search.includes(input[i])) {
            result.push(input[i]);
        }
    }
    return result;
}

let arr1 = ['banana', 'kiwi', 'grape'];
let arr2 = ['banana', 'strawberry', 'grape', 'strawberry'];
console.log(removeDuplication(arr1, arr2));
console.log(match(arr1, arr2));