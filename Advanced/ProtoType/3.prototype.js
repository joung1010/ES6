// const dog1 = {name: 'λ©λ©μ΄', emoji: 'πΆ'};
// const dog1 = {name: 'λλμ΄', emoji: 'π·'};


function Dog(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    // μΈμ€ν΄μ€ λ λ²¨μ ν¨μ
    // this.printName = ()=> {console.log(`${this.name} ${this.emoji}`)};
}

Dog.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`)
};

const dog1 = new Dog('λ©λ©μ΄', 'πΆ');
const dog2 = new Dog('λλμ΄', 'π·');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

//μ€λ²λΌμ΄λ©
// μΈμ€ν΄μ€ λ λ²¨μμ (μμ) λμΌν μ΄λ¦μΌλ‘ ν¨μλ₯Ό μ¬μ μ νλ©΄ (μ€λ²λΌμ΄λ© νλ©΄)
// νλ‘ν νμ λ λ²¨μ (λΆλͺ¨) ν¨μμ νλ‘νΌν°λ κ°λ €μ§λ€ (μλμ λλ€)
dog1.printName = function () {
    console.log('μλ');
};
dog1.printName();

// μ μ  λ λ²¨ static μμ±, ν¨μ λ§λ€κΈ°
Dog.hello = () => {
    console.log('Hello');
};

Dog.hello();
Dog.MAX_AGE = 20;
