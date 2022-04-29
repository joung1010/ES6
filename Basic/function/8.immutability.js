
// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지않다.
// 만약 상태 변경이 필요한 경우에는 , 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함
//원시값 -  값에 의한 복사
//객체값 - 참조에 의한 복사 (메모리 주소)
function display(num) {
    num = 5; // bad!!!!
    console.log(num);
}
const value = 4;
display(value);
console.log(value);


function displayObj(obj) {
    obj.name = 'Bob'; // Bad!!!!!!!!!!!!!!!!!!!!!!  외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 X
    console.log(obj);
}
const mason = {name: 'mason'};
displayObj(mason);
console.log(mason);

function changeName(obj) { // 함수 명을 그 작업을 하는 느낌이 주도록 바꿈
    return {...obj, name: 'bob'};  // 반환할때는 새로운 오브젝트 만들기!!!
}