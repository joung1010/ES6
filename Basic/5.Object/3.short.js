const x = 0;
const y = 0;

// 키 이름과 참조하는 변수의 이름이 같다면 축약해서 사용할 수 있다.
const coordinate = {x,y} //{x:x, y: y};
console.log(coordinate);

function makeObj(name, age) {
    return {
        name,
        age
        /* name : name,
         age : age*/
    };
}