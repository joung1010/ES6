/*
class Tiger {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log('먹자');
    }

    sleep() {
        console.log('잔다');
    }
}

class Dog {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log('먹자');
    }

    sleep() {
        console.log('잔다');
    }

    play() {
        console.log('놀자');
    }
}*/


class Animal {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log('먹자');
    }

    sleep() {
        console.log('잔다');
    }
}

class Tiger extends Animal {
}

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
    constructor(color,ownerName) {
        // 자식 클래스에 생성자 함수에는 부모 클래스 생성자함수에 필요한 인자 값도 받아서 넘겨줘야한다
        super(color); // 부모 생성자 함수 호출
        this.ownerName = ownerName;
    }
    play() {
        console.log('놀자');
    }
    //오버 라이딩 overriding : 자식클래스에서 부모클래스의 함수를 재정의
    eat() {
        super.eat(); // 부모 클래스의 eat 함수 호출
        console.log('멍멍이가 먹는다.');
    }
}

const dog = new Dog('빨강이','정환');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();