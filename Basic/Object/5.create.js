/*const apple = {
    name: 'apple',
    display: function () {
        console.log(`${this.name}: 🍎`);
    }
};

const orange = {
    name: 'orange',
    display: function () {
        console.log(`${this.name}: 🍑`);
    }
};*/

// 생성자 함수
function Fruit(name,emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () =>{
        console.log(`${this.name}: ${this.emoji}`);
    };
    // 이때 this 라는 키워드는 객체 자기자신을 가리킬 수 있다.
    // 그래서 만들어지는 객체에 name 과 emoji 라는 속성이 생긴다.

    // return this; // 생략 가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🥭');
console.log(apple);
console.log(orange);
console.log(apple.name)