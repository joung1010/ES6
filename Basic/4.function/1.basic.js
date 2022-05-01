// 사용 예제 1
function add(num1, num2) {
    console.log('function');
    return  num1 + num2;
}

const res = add(1, 2);
console.log(res);

// 사용 예제 2
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let lastName = '박'
let firstName = '정환'
//let fullName = `${lastName} ${firstName}`;
console.log(fullName(firstName,lastName));


let lastName2 = '김'
let firstName2 = '지수'
//let fullName2 = `${lastName2} ${firstName2}`;
console.log(fullName(firstName2,lastName2))