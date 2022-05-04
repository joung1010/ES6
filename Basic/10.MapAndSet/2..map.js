const map = new Map([
    ['key1', 'apple'],
    ['key2', 'banana'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 값 존재 여부 확인
console.log(map.has('key1'));
console.log(map.has('key3'));

//순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries()); // 키와 value 모두 가져옴

//찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4')); // undefined

//추가
map.set('key3', 'kiwi');
console.log(map);

//삭제
map.delete('key3');
console.log(map);

//전부 삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점
const key = {name: 'milk', price: 10};
const milk = {name: 'milk', price: 10, description: 'Taste Good'};
const object = {
    [key] : milk,
}
console.log(object); //'[object Object]': { name: 'milk', price: 10, description: 'Taste Good' }

const map2 = new Map([[key,milk]]);
console.log(map,map2); // { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: 'Taste Good' }

console.log(object[key]);
//console.log(map2[key]); x
console.log(map2.get(key));

// 구조상으로 차이점을 확인해 볼 수 없지만 map 에는 유용한 메서드들이 존재