// static 정적 프로퍼티, 메소드
// static 키워드가 붙으면 해당 클래스 이름으로 접근할 수 있다.
class Fruit {
    static MAX_FRUITS = 4;
    constructor(name,emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    //클래스 레벨의 메소드드
   static makeRandomFruit() {
        // 클래스 레벨의 메소드에서는 this를 참조할 수 없음
        return new Fruit('banana','🍌');
    }
    // 인스턴스 레벨의 메소드
    display = () =>{
        console.log(`${this.name}: ${this.emoji}`);
    };
}



const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🥭');

console.log(apple);
console.log(orange);
console.log(apple.name)

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// static 예제
Math.pow();
Number.isFinite(1);