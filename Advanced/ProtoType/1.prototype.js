const dog = {name: 'μμ°', emoji: 'πβ'};

console.log(Object.keys(dog)); // ν€ κ°λ§ νμΈ
console.log(Object.values(dog)); // κ° λ§ νμΈ
console.log(Object.entries(dog));// ν€ , κ° νμΈ

// ν΄λΉ κ°μ²΄μ  νΉμ  key κ°μ΄ μ‘΄μ¬ νλμ§
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// μ€λΈμ νΈμ κ°κ°μ νλ‘νΌν°λ νλ‘νΌν° λμ€ν¬λ¦½ν°λΌκ³  νλ κ°μ²΄λ‘ μ μ₯λ¨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
/*
* {
  name: { value: 'μμ°', writable: true, enumerable: true, configurable: true },
  emoji: {  value: 'οΏ½β',writable: true,enumerable: true,configurable: true}
}
* */

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

//νλ‘νΌν° λμ€ν¬λ¦½ν° μμ νκΈ°

Object.defineProperty(dog,'name',{
   value: 'λ©λ©',
   writable: false, //μμ 
    enumerable: false , //μ΄κ±°
    configurable: false, //μμ±μ κ°μ λ³κ²½ν  μ μκ³ , κ°μ²΄μμ μ­μ ν  μλ μμΌλ©΄ true
});

console.log(dog.name); //λ©λ©
console.log(Object.keys(dog)); //[ 'emoji' ] μ΄κ±°κ° λΆκ°λ₯ νκΈ°λλ¬Έμ keys, values, entries μ ν¬ν¨λμ§ μλλ€.
delete dog.name
console.log(dog.name);

const student = {};
Object.defineProperties(student,{
    firstName: {
        value: 'μ ν',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: 'λ°',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullName:{
        get() {
            return `${lastName} ${firstName}`
        },
        set(name) {
            [this.lastName, this.firstName] = name.split(' ');
        },
        configurable : true,
    }
})
console.log(student);