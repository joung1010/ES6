// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 argumnets 객체에 저장됨
// 매개변수 기본값 Default Parameter a = 1 , b = 1
function add(a = 1, b= 1) {
    console.log(a);
    console.log(b);
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
}

add(1, 2);
add();

// Rest 매개변수 Rest Parameter

function sum(a,b,...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);