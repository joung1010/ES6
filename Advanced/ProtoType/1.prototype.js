const dog = {name: '와우', emoji: '🐕‍'};

console.log(Object.keys(dog)); // 키 값만 확인
console.log(Object.values(dog)); // 값 만 확인
console.log(Object.entries(dog));// 키 , 값 확인

// 해당 객체에  특정 key 값이 존재 하는지
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
/*
* {
  name: { value: '와우', writable: true, enumerable: true, configurable: true },
  emoji: {  value: '�‍',writable: true,enumerable: true,configurable: true}
}
* */

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

//프로퍼티 디스크립터 수정하기

Object.defineProperty(dog,'name',{
   value: '멍멍',
   writable: false, //수정
    enumerable: false , //열거
    configurable: false, //속성의 값을 변경할 수 있고, 객체에서 삭제할 수도 있으면 true
});

console.log(dog.name); //멍멍
console.log(Object.keys(dog)); //[ 'emoji' ] 열거가 불가능 하기때문에 keys, values, entries 에 포함되지 않는다.
delete dog.name
console.log(dog.name);

const student = {};
Object.defineProperties(student,{
    firstName: {
        value: '정환',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: '박',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullName:{
        get() {
            return `${lastName} ${firstName}`
        },
        set(name) {
            [this.lastName, this.firstName] = name.split(' ');
        },
        configurable : true,
    }
})
console.log(student);