// 클래스 베이스로한 객체지향 프로그래밍
class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    printName() {
        console.log(`${this.name} ${this.emoji}`);
    }
}

class Dog extends Animal{
    constructor(name,emoji,owner) {
        super(name, emoji);
        this.owner = owner;
    }

    play() {
        console.log('같이 놀자!!');
    }
}


class Tiger extends Animal{
    hunt() {
        console.log('사냥이다!');
    }
}

const dog1 = new Dog('멍멍','🐶','정환');
dog1.printName();
dog1.play();

const tiger1 = new Tiger('어흥', '🐱');
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);