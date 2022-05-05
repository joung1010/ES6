// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축 평가 : short - circuit evaluation

const obj1 = {name: 'dog'};
const obj2 = {name: 'cat', owner: 'mason'};

if (obj1 || obj2) {
    console.log('둘다 true');
}

// && 둘다 true 그래서 마지막에 obj2 가 변수에 할당
let result = obj1 && obj2;
console.log(result);

// || 둘중 하나만 true이면 됨 obj1 이 true 이기 때문에 뒤에 검사할 필요가 없어 바로 ob1 이 변수에 할당
// 즉 true 인 값이 할당된다.
result = obj1 || obj2;
console.log(result);


// 활용 예
//  조건이 truthy 일때  && 무언가를 해야 할 경우
//  조건이 falshy 일떄  || 무언가를 해야 할 경우

function changeOwner(animal) {
    if (!animal.owner) {
        throw new Error('주인이 없어!');
    }
    animal.owner = '바뀐주인!';
}

function makeNewOwner(animal) {
    if (animal.owner) {
        throw new Error('주인이 있어!!');
    }
    animal.owner = '새로운 주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2); // ob2.owner 가 true 이기 때문에 뒤에 있는 함수가 실행되지 않는다.
console.log(obj1);
console.log(obj2);


//&& :  null 또는 undefined 인 경우를 확인할때
let item  = {price: 1};
const price = item && item.price;
console.log(price);

// || : 기본값을 설정
// default Parameter 는 null 과 undefined 인 경우 설정
// || falshy 한 경우 설정(할당)
function print(message = 'Hi') {
     const text = message || 'Hello';
    console.log(text);
}

print('안녕');
print();
print('');