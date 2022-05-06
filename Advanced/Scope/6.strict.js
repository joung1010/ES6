// 엄격 모드 strict mode
// 리엑트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

'use strict';

// var x = 1;
// delete  x;

function add(x) {
    var a = 2;
     b = a + x; //dog is not defined
    console.log(this); // undefined
}

add(1);

const array = [1, 2, 3];
for ( num of array) {   // 선언하지 않는 변수는 사용 불가
    console.log(num)
}