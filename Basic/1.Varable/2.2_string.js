// 문자열 타입
let string = 'HEllO';
string = `HI`;
console.log(string);

// 특수 문자 출력하는 법
string = '"HELLO!!"';
console.log(string);

string = 'HI! \n My name is \t\tMason \\'; // \n 한줄 뛰기
                                        // \t tab
                                        // \\ 백슬래시시
console.log(string);

// 탬플릿 리터럴 (Template Literal) ``
let id = 'mason';
let greeting = 'Hello ,'+id+"\nhave a nice day"
console.log(greeting);
 greeting = `Hello ${id}!! \nhave a nice day`;
console.log(greeting);

/*
* MDN String: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
*
* */

