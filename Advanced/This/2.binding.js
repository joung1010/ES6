// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
// 하지만 자바스크립트 에서는 누가 호출하냐에 따라서 this 가 달라짐
//즉 this는 호출하는 사람(caller) 에 의해 동적으로 결정됨

function Cat(name) {
    this.name = name;
    this.printName = function () {
        console.log(`고양이 이름을 출력 : ${this.name}`);
    };
}

function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(`강아지 이름을 출력 : ${this.name}`);
    };
}
//생성자 함수 Cat , Dog 는 생성되기 전 시점에는 이 this 가 누구인지 모른다.
// 근데 new 생성자를 통해 객체를 만드는 순간
// 이 Cat 생성자 함수의 this는 만들어질 자신의 instance 를 가리키게 될거고
// new Cat 이라고 하는 순간 {} 빈 객체가 만들어지고 그객체의 name이러는 속성에 냐옹이라고 할당하고
// 이 this의 printName()이라는 함수는 우리가 정의한 함수를 가리키게 된다.


const cat = new Cat('냐옹이');
const dog = new Dog('멍멍이')
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName(); //고양이 이름을 출력 : 멍멍이
cat.printName();
// 고양이의 함수를 강아지의 함수에 할당해도 어떤 객체에서 호출되었는지에 따라서 this값이 변경되는것을 확인할 수 있다.

function printOnMonitor(printName) {
    console.log('모니터를 준비하고!, 전달된 콜백을 실행!')
    printName();
}

printOnMonitor(cat.printName); //고양이 이름을 출력 : undefined
