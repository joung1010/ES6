// 접근자 프로퍼티 (Accessor Property)

class Student {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName= lastName;
    }
    get fullName(){
        return `${this.lastName} ${this.firstName}`;
    }
    // get 이라는 키워드를 사용하면 일반 속성에 접근하듯이 사용할 수 있다.
    // 즉 fullName을 접근할때 get 키워드가 붙은 함수가 호출
    // 즉 고정된 값이 아니라  이 함수가 호출하는 시점에 데이터를 만들어서 return 을 하는데
    // 이것은 속성에 더 가깝기 때문에 보통 함수라 하면 특정한일을 수행하는데
    // 지금 fullName 이라는 함수는 두 필드를 단순히 조합해서 보여준다 그렇기때문에 속성에 한부분이라고 간주되는 그런것들을
    // 함수로 만들어야 할때 get 이라는 키워드를 붙이면 함수를 호출하는 것 처럼 호출하지 않고 속성에 접근하듯이 만들 수 있다.
    set fullName(value) {
        console.log('set',value);
    }
}

const student = new Student('정환', '박');
console.log(student.firstName);
console.log(student.fullName); // get 함수 호출
student.fullName = '박진수'; // set 함수 호출