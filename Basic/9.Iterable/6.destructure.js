// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치 (그룹화)를 쉽게 만들 수 있다.
const fruits = ['banana', 'strawberry', 'grape', 'kiwi'];
const [first, second, ...others] = fruits;
// banana 는 first, strawberry 는 second , grape, kiwi 는 others 에 들어온다.
console.log(first); //banana
console.log(second); //strawberry
console.log(others);//[ 'grape', 'kiwi' ]

const point = [1, 2,8];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
    return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const mason = {name: 'mason', age: 20, job: 's/w'};

/*
function display(person) {
    console.log('이름', person.name);
    console.log('나이', person.age);
    console.log('직업', person.job);
}*/
function display({name,age,job}) {
    console.log('이름', name);
    console.log('나이', age);
    console.log('직업', job);
}

display(mason);

const {name, age, job:occupation, pet='cat'} = mason; // job:occupation 키 값을 변경함
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);


// Quiz

const prop = {

    name: 'Button',

    styles: {

        size: 20,

        color: 'black',

    },

};
// 이중 구조 분해
function changeColor({styles:{color}}) {

    console.log(color);

}

changeColor(prop);