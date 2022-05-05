// 기본적으로 JS 동기적으로 실행한다.
// JS 단 하나의 싱글 컨텍스트 스택을 가지고있다
// 싱글 쓰레드!
// 그래서 기본적으로 동기적으로 일을 처리하기 떄문에 중간에 시간이 오래걸리는 작업을 하게되면 그 뒤에 실행되는 로직이 많은 영향을 받는다.
function a() {
    for(let i =0; i<10000; i++);
    return 1;
}

function b() {
    return a() + 1;
}

function c() {
    return b() + 1;
}

console.log('시작했다!!');
const result = c();
console.log(result);