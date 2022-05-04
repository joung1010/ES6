//Set
const set = new Set([1,2,3]);
console.log(set);

//사이즈 확인
console.log(set.size);

// 해당 값이 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
    console.log(value);
}

//추가 (add) (중복 값은 무시됨)
set.add(6);
console.log(set); //Set(4) { 1, 2, 3, 6 }
set.add(6);
console.log(set); //Set(4) { 1, 2, 3, 6 }

//삭제 (delete)
set.delete(6);
console.log(set);

// 전부 삭제(clear)
set.clear();
console.log(set);

// 오브젝트 set
const obj1 = {name: 'apple', price: 4};
const obj2 = {name: 'banana', price: 5};
const objs = new Set([obj1, obj2]);
console.log(objs); //Set(2) { { name: 'apple', price: 4 }, { name: 'banana', price: 5 } }

//퀴즈
obj1.price = 10;
console.log(obj1);
console.log(objs);

// 퀴즈(실제 해당 값은 같지만 참조값이 다르다) -> object 는 heap 만들어지고 이를 참조하는 참조 값이 다르다
const obj3 = {name: 'banana', price: 5};
objs.add(obj3);
console.log(objs);
