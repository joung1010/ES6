function Cat(name) {
    this.name = name;
    //2. arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억함
    //화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
    this.printName =  () => {
        console.log(`고양이 이름을 출력 : ${this.name}`);
    };
    //1. bind 함수를 이용해서 수동적으로 바인딩 해주기
    // this(앞으로 만들어진 인스턴스)와 이 printName 을 묶은 새로운 함수를 반환
    // this.printName = this.printName.bind(this);

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
