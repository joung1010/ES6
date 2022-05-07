// 동결! Object.freeze 추가 X, 삭제 X, 쓰기 X, 속성 재정의 X
// (단. 얕은 꽁꽁 얼림!)  freeze 한 객체가 다른 객체를 참조하고 있으면 그 참조하는 객체까지 얼려주지는 못한다.
const mason = {name: '정환'};
const dog = {name: '와우', emoji: 'dog', owner: mason};
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog); // 강아지 이름이 변경 안됨:
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);

mason.name = "메이슨";
console.log(dog);

//밀봉 Object.seal 값의 수정 O , 추가 X, 삭제 X , 속성 재정의 X
const cat = {...dog};
// Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '야옹이';
console.log(cat);
delete cat.emoji;
console.log(cat);   // 삭제는 안됨

//객체의 동결여부 확인 (isFrozen) , (isSealed)
console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장금지 prevcenExtensions 추가 X 
const tiger = {name: '어흥'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐흥';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);