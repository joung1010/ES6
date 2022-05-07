 // 프로토타입을 베이스로한 객체지향 프로그래밍

 function Animal(name, emoji) {
     this.name = name;
     this.emoji = emoji;
 }

 Animal.prototype.printName = function () {
     console.log(`${this.name} ${this.emoji}`);
 };

 function Dog(name, emoji, owner) {
//    super (name,emoji)
     Animal.call(this,name,emoji);
     this.owner = owner;
 }
 // create: 우리가 전달한 프로토타입을 베이스로 새로운 객체를 만들어줌
 // Dog.prototype = Object.create(Object.prototype);
 Dog.prototype = Object.create(Animal.prototype);

 Dog.prototype.play = () => {
     console.log('같이 놀자!!');
 };

 function Tiger(name, emoji) {
     Animal.call(this, name, emoji);
 }

 Tiger.prototype = Object.create(Animal.prototype);
 Tiger.prototype.hunt =  () => {
     console.log('사냥이다!');
 };

 const dog1 = new Dog('멍멍','🐶','정환');
dog1.printName();
dog1.play();

 const tiger1 = new Tiger('어흥', '🐱');
 dog1.printName();
 tiger1.hunt();

 // 상속 관계를확인할 수 있다.  instanceof
 console.log(dog1 instanceof Dog);
 console.log(dog1 instanceof Animal);
 console.log(dog1 instanceof Tiger);
