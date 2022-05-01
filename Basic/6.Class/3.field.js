//접근 제어자 - 캡슐화
// private(#) , public(기본) , protected(_)

class Fruit {
    // name; 생선자 에서 외부에서 받아오는 필드들은 생략가능
    // emoji;
    #name; // private 필드를 생략 불가능
    #emoji
    #type = '과일';
    constructor(name,emoji) {
        this.#name = name;
        this.emoji = emoji;
    }
    display = () =>{
        console.log(`${this.name}: ${this.emoji}`);
    };
}

const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple);