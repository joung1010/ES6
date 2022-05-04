// Symbol
// 유일한 키를 생성할 수 있음
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = Symbol('key');
// symbol 으로 만들면 같은 키값이라도 다른 값이 생성됨
map.set(key1, 'hello');
console.log(map.get(key2));
console.log(key1 === key2); // false

// 동일한 이름으로 하나의 키를 사용하도 싶다면 Symbol.for
// 전역 심벌 레지스토리 (Global Symbol Registry)
// Symbol.for 을 이용하면 Global Symbol Registry 에 해당 이름('key')의 symbol 이 만들어지고
//이 해당 이름을 요구하면 동일한 심볼을 재사용
// 즉 동일한 키값은 같은 값을 가진다.
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); //true

console.log(Symbol.keyFor(k1)); // 해당 심벌이 가지고 있는 문자열 값을 알려줌
                                // 단, 전역 레지스토리에 보관중인 값만 가져올 수 있다.

console.log(Symbol.keyFor(key1));