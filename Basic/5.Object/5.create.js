/*const apple = {
    name: 'apple',
    display: function () {
        console.log(`${this.name}: π`);
    }
};

const orange = {
    name: 'orange',
    display: function () {
        console.log(`${this.name}: π`);
    }
};*/

// μμ±μ ν¨μ
function Fruit(name,emoji) {
    this.name = name;
    this.emoji = emoji;
    this.display = () =>{
        console.log(`${this.name}: ${this.emoji}`);
    };
    // μ΄λ this λΌλ ν€μλλ κ°μ²΄ μκΈ°μμ μ κ°λ¦¬ν¬ μ μλ€.
    // κ·Έλμ λ§λ€μ΄μ§λ κ°μ²΄μ name κ³Ό emoji λΌλ μμ±μ΄ μκΈ΄λ€.

    // return this; // μλ΅ κ°λ₯
}

const apple = new Fruit('apple', 'π');
const orange = new Fruit('orange', 'π₯­');
console.log(apple);
console.log(orange);
console.log(apple.name)