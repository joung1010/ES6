const pizza = {name: 'pizza', price: 2};
const ramen = {name: 'ramen', price: 3};
const sushi = {name: 'sushi', price: 1};
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1',store1);
console.log('store2',store2);

store2.push(sushi);
//서로 다른 배열
console.log('store1',store1);
console.log('store2',store2);

pizza.price = 4;
// store1 과 store 2 에 있는 pizz의 가격이 2 에서 4로 변경 되었다
console.log('store1',store1);
console.log('store2',store2);
// 새로운 배열을 만들때 object의 값을 할당하면 새로운 object 값이 할당되는 것이 아니라
// 배열안에 있는 object는 기존에 만들어진 object의 주소를 가리킨다.
// 즉 배열안에 해당 object의 주소값(레퍼런스)가 들어 있다.

// Array. from 을 통해서 새로운 배열을 만들어도 안에 들어있는 object는 동일한 주소값이 들어있다.
// 그래서 배열안에 들어있는 오브젝트를 수정한다면 실제 배열을 수정하지 않아도 해당 배열의 값이 변경된다.

// 이를 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
